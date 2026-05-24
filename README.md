# Hướng dẫn Triển Khai Hệ Thống (Docker Deployment Guide)

Tài liệu này hướng dẫn chi tiết cách triển khai (deploy) hệ thống RAG cho OEE.

---

## 1. Bản chất cấu trúc thư mục của Parser và Embedder trên máy mới


Sơ đồ cấu trúc thư mục tự động sinh ra trong thư mục `./data` trên máy mới:

```
./data/
├── parsed/
│   ├── need-checked/        ← Parser catalog ghi các file .md tạm thời vào đây
│   ├── accepted/            ← Thư mục chứa các file .md được duyệt (Người dùng chuyển thủ công hoặc qua UI)
│   ├── re-embed/            ← Thư mục chứa các file cần nhúng lại
│   ├── embedded/            ← Embedder nhúng vector xong sẽ tự động di chuyển file .md vào đây để lưu trữ
│   │   └── .archive/        ← Thư mục lưu trữ lịch sử nén cũ
│   └── rejected/            ← Thư mục chứa các file .md bị loại bỏ khi review
│       ├── _schema-error/
│       ├── _schema-mismatch/
│       ├── _duplicate/      ← File trùng lặp mã Hash (SHA256) sẽ tự động đưa vào đây
│       ├── _orphan/
│       └── _dim-mismatch/
└── oee/                     ← Cấu trúc dành riêng cho OEE RAG flow
    └── audit-logs/
        ├── incoming/        ← Nơi bạn drop file audit_logs.jsonl để hệ thống tự động xử lý
        ├── processed/       ← Log đã xử lý thành công
        └── failed/          ← Log xử lý lỗi
```

*Bạn chỉ cần tạo một thư mục rỗng tên là `data/` trên máy mới (hoặc để Docker tự sinh), toàn bộ các thư mục trên sẽ tự động được thiết lập chính xác!*

---

## 1.2 Sơ đồ Luồng Di Chuyển Dữ Liệu và Hướng Dẫn Nạp Dữ Liệu (Data Flow & Ingestion Guide)

Hệ thống RAG v3 OEE vận hành dựa trên sự kết hợp đồng bộ giữa **Dữ liệu phi cấu trúc** (tài liệu hướng dẫn SOP, Lesson Learned dạng Markdown) và **Dữ liệu cấu trúc** (Time-series audit logs sự kiện máy dừng).

### A. Sơ đồ Kiến trúc & Luồng di chuyển dữ liệu
Dưới đây là sơ đồ chi tiết biểu diễn quá trình nạp dữ liệu phi cấu trúc, tài liệu markdown thủ công và logs sự cố cấu trúc vào hệ thống:

```text
[Operator / UI / Client]
       │
       ├─► (Thủ công / UI) ──────────► [Thư mục chia sẻ ./data/]
       │   Duyệt tệp .md từ                  │ (Mount Volume: rag_data)
       │   "need-checked" sang "accepted"    ├─► parsed/need-checked/
       │                                     ├─► parsed/accepted/ ◄── [Thả file .md thủ công]
       │                                     ├─► parsed/embedded/ (Lịch sử lưu trữ)
       │                                     │
       │                                     ▼ (7. Watchdog quét tệp mới trong "accepted") [prod-embedder:8005]
       │                                     │
       │                                     ├─► (8. Tạo Vector) ──► [Ollama:11434 (Host)]
       │                                     │
       │                                     └─► (9. Ghi Vector & Chunks) ──► [prod-postgres:5432]
       │
       └─► (Thả audit_logs.jsonl) ───► [data/oee/audit-logs/incoming/]
                                             │
                                             ▼ (11. OEEAuditLogWatcher quét định kỳ)
                                        [prod-embedder:8005] ──► (12. Ghi DB) ──► [prod-postgres:5432]
```

---

### B. Hướng dẫn chi tiết cách Nạp Dữ Liệu vào hệ thống

Hệ thống cung cấp **3 cơ chế nạp dữ liệu** khác nhau để đáp ứng mọi nhu cầu vận hành:

#### 1. Nạp Tài Liệu Markdown 
* **Đối tượng:** SOP, Lesson Learned tự biên soạn trực tiếp bằng tệp Markdown (.md) mà không cần qua dịch vụ Parser.
* **Cách thực hiện:**
  1. Biên soạn tệp Markdown có định nghĩa phần **Front-matter YAML** ở đầu trang đúng chuẩn quy định (chi tiết đặc tả tại **Mục 5.2** phía dưới).
  2. Cấp đầy đủ các trường bắt buộc (`schema_version`, `tenant_id`, `source: other`, `origin`). Bạn nên ghi kèm các trường OEE bổ trợ (`doc_type`, `fault_code`, `machine_id`) để chatbot hiểu sâu hơn về tài liệu.
  3. Copy tệp `.md` đó thả trực tiếp vào thư mục `./data/parsed/accepted/` trên máy chủ mới.
  4. Container `prod-embedder` với cơ chế Watchdog thời gian thực sẽ tự động phát hiện tệp mới, chia đoạn (chunking), gọi Ollama tạo vector nhúng, lưu vào Postgres và nén/di chuyển tệp sang thư mục lưu trữ `./data/parsed/embedded/`.

#### 2. Nạp Dữ Liệu Sự Cố Dạng Cấu Trúc (OEE Audit Logs)
* **Đối tượng:** Nhật ký dừng máy, lịch sử sự cố OEE dạng file JSON Lines (`.jsonl`).
* **Cách thực hiện:**
  1. Xuất file nhật ký dừng máy từ hệ thống SCADA/MES hoặc tự biên soạn tệp `.jsonl` (mỗi dòng là một đối tượng JSON hợp lệ chuẩn schema tại **Mục 5.1**).
  2. Đặt tên tệp bất kỳ có đuôi `.jsonl` (ví dụ: `incidents_may_2026.jsonl`).
  3. Thả tệp này vào thư mục `./data/oee/audit-logs/incoming/` trên máy chủ mới.
  4. Tiến trình chạy ngầm `OEEAuditLogWatcher` (định kỳ 30 giây một lần) sẽ tự động nạp tệp, thực hiện kiểm tra cấu trúc từng dòng (kiểm tra kiểu dữ liệu, các giá trị enums hợp lệ). Các dòng hợp lệ sẽ được bulk upsert trực tiếp vào bảng `audit_logs` của Postgres, tệp xử lý xong sẽ tự động chuyển sang thư mục `./data/oee/audit-logs/processed/` (nếu tệp bị lỗi sẽ di chuyển sang `failed/`).



---

## 2. Hướng dẫn chạy và Kiểm tra trên máy mới

### Bước 2.1: Chuẩn bị máy chủ đích
1. Cài đặt Docker & Docker Compose v2 trở lên.
2. (Tùy chọn) Cài đặt **Ollama** trên máy chủ (hoặc dùng API Ollama/Claude từ bên ngoài). Nếu chạy Ollama trên cùng một máy chủ vật lý bên ngoài Docker:
   - Hãy chắc chắn cấu hình Ollama lắng nghe trên tất cả card mạng bằng cách cấu hình biến môi trường hệ thống: `OLLAMA_HOST=0.0.0.0`.
   - Pull model bạn đã chọn: `ollama pull gemma4:31b-cloud` (hoặc model mong muốn khác).

### Bước 2.2: Tạo thư mục cấu hình và chạy
Tạo thư mục deploy tại máy mới, lưu 2 file `.env` và `docker-compose.yml` vào đây, sau đó thực hiện lần lượt các bước:

```bash
# 1. Tạo thư mục chứa dữ liệu RAG (để mount volume đồng bộ)
mkdir -p data

# 2. Khởi chạy các hạ tầng cốt lõi (Postgres + MinIO) và chạy khởi tạo thư mục
docker compose up -d postgres minio data-init

# 3. Đợi khoảng 5 giây cho Postgres sẵn sàng, sau đó chạy Database Migrations để tạo bảng
docker compose up migrate

# 4. Kiểm tra trạng thái database migration
# Lệnh này sẽ chạy xong và dừng lại với mã thoát 0 (success)
```

### Bước 2.3: Chạy hệ thống RAG v3 theo nhu cầu
Bạn có thể tùy ý chọn bật các Module dựa trên tài nguyên RAM máy chủ mới bằng cách bật các `profiles` tương ứng:

* **Trường hợp A: Chỉ bật Chat & Tìm kiếm (Query-Only, siêu nhẹ, không nạp tài liệu mới)**
  ```bash
  docker compose --profile chat up -d
  ```

* **Trường hợp B: Chỉ bật Ingestion, Parser & Embedder (Chuyên nạp dữ liệu)**
  ```bash
  docker compose --profile ingest up -d
  ```

* **Trường hợp C: Chạy đầy đủ toàn bộ hệ thống**
  ```bash
  docker compose --profile chat --profile ingest up -d
  ```

### Bước 2.4: Theo dõi hoạt động
* Xem trạng thái các container đang chạy:
  ```bash
  docker compose ps
  ```
* Xem logs trực tiếp để xử lý lỗi (ví dụ xem log của gateway và embedder):
  ```bash
  docker compose logs -f gateway embedder
  ```
* Để dừng hệ thống:
  ```bash
  docker compose down
  ```

---
## 3. Hướng Dẫn Cấu Hình Ollama & Danh Sách Models Hiện Tại (Ollama & Models Guide)

Để hệ thống RAG v3 chạy ổn định và mượt mà, việc cấu hình chính xác dịch vụ **Ollama** phục vụ tính toán Vector Embeddings và xử lý suy luận LLM là bắt buộc.

### 3.1 Khuyến nghị Kiến trúc chạy Ollama
Khuyên dùng: **Chạy Ollama trực tiếp trên máy chủ vật lý (Host Machine) thay vì chạy trong container Docker** để tận dụng tối đa card đồ họa GPU (NVIDIA CUDA) mà không cần cài đặt NVIDIA Container Toolkit phức tạp.

#### 🛠️ Cấu hình trên máy chủ vật lý (Host):
1. **Cho phép Docker kết nối ra ngoài Host**: Theo mặc định, Ollama chỉ lắng nghe trên `127.0.0.1`. Bạn cần đổi sang `0.0.0.0` để cho phép container Docker kết nối:
   * **Trên Windows**: Thiết lập biến môi trường hệ thống (System Environment Variables):
     `OLLAMA_HOST=0.0.0.0`
   * **Trên Linux (systemd)**: Chạy lệnh `sudo systemctl edit ollama.service` và thêm cấu hình:
     ```ini
     [Service]
     Environment="OLLAMA_HOST=0.0.0.0"
     ```
     Sau đó lưu lại và khởi động lại dịch vụ: `sudo systemctl daemon-reload && sudo systemctl restart ollama`
2. **Cấu hình file `.env` của hệ thống RAG v3**:
   `OLLAMA_BASE_URL=http://host.docker.internal:11434`
3. **Cấu hình `docker-compose.yml`**:
   Đảm bảo các container có nhu cầu gọi Ollama (`prod-chat`, `prod-embedder`) được cấu hình ánh xạ cổng mạng `extra_hosts` chính xác:
   ```yaml
   extra_hosts:
     - "host.docker.internal:host-gateway"
   ```

---

### 3.2 Danh sách Models hiện tại đang được cấu hình trong hệ thống

Hệ thống RAG v3 OEE được tối ưu hóa cấu hình sẵn các mô hình ngôn ngữ lớn chuyên sâu sau đây (có thể tùy chỉnh lại qua file `.env`):

| Nhiệm vụ | Tên Model trong Ollama | Kích thước / Chi tiết | Lệnh tải về (Ollama Pull) | Vai trò & Đặc tả |
| :--- | :--- | :--- | :--- | :--- |
| **Nhúng Vector (Embeddings)** | `bge-m3` | 1.2 GB (1024 dims) | `ollama pull bge-m3` | Hỗ trợ đa ngôn ngữ cực mạnh (Multi-lingual), tối ưu hóa tuyệt đối cho việc tra cứu quy trình kỹ thuật Tiếng Việt và Tiếng Anh. |
| **Mô hình chính (Primary LLM)** | `gemma4:31b-cloud` | ~19 GB (hoặc model tùy chọn) | `ollama pull gemma4:31b-cloud` | Mô hình suy luận chính, chịu trách nhiệm đọc hiểu ngữ cảnh RAG và trả lời câu hỏi của người dùng cuối một cách chính xác nhất. |
| **Phân rã câu hỏi (Query Decomposition)** | `qwen2:1.5b-instruct` | 986 MB | `ollama pull qwen2:1.5b-instruct` | Mô hình siêu nhẹ, tốc độ phản hồi cực nhanh (< 200ms). Chuyên dùng để phân rã câu hỏi phức tạp thành nhiều câu hỏi phụ trước khi tìm kiếm. |
| **Mô hình dự phòng (LLM Fallback)** | `qwen2.5:14b-instruct` | 9.0 GB | `ollama pull qwen2.5:14b-instruct` | Sử dụng làm phương án dự phòng hiệu quả cao khi mô hình chính gặp sự cố quá tải hoặc phản hồi chậm. |

> [!TIP]
> **Vận hành thực tế:** Trước khi khởi chạy Docker Compose, hãy chắc chắn rằng bạn đã kéo đầy đủ các mô hình này về máy bằng các lệnh `ollama pull` tương ứng trên máy chủ!

---

## 4. Phụ Lục: Tài Liệu Đặc Tả Các Schemas Hệ Thống (System Schemas Specification)

Hệ thống RAG v3 OEE vận hành dựa trên các hợp đồng dữ liệu (schemas) chặt chẽ được định nghĩa bằng JSON Schema hoặc được kiểm tra bằng code Python/Go nghiêm ngặt.

### 4.1 Cấu trúc OEE Audit Logs (`audit_logs.jsonl`)
Khi chạy hệ thống OEE, bạn có thể nạp các file log sự kiện dạng `.jsonl` trực tiếp vào thư mục `./data/oee/audit-logs/incoming/`. Service `embedder` sẽ tự động quét, xác thực nghiêm ngặt và lưu trữ vào cơ sở dữ liệu `audit_logs` phục vụ tra cứu.

Mỗi dòng trong file `.jsonl` phải là một đối tượng JSON độc lập, tuân thủ các quy tắc sau:

#### Các trường Bắt buộc (Required):
* **`timestamp`** (string): Thời gian xảy ra sự cố, định dạng ISO 8601 (ví dụ: `YYYY-MM-DDTHH:MM:SS` hoặc `YYYY-MM-DDTHH:MM:SSZ`).
* **`machine_id`** (string): Mã nhận dạng thiết bị/máy (ví dụ: `CARTON_01`, `FILLER_02`).
* **`incident_id`** (string): Mã định danh duy nhất của sự cố (dùng để deduplicate khi ghi vào DB, ví dụ: `CP-M1-0518-003`).
* **`fault_code`** (string): Mã lỗi kỹ thuật tương ứng (ví dụ: `M1`, `E2`, `C4`).

#### Các trường Tùy chọn (Optional):
* **`downtime_min`** (number): Thời gian máy dừng hoạt động (đơn vị: phút, phải là kiểu số float/int, ví dụ: `5.5`).
* **`operator`** (string hoặc null): Tên hoặc mã của người vận hành ca làm việc (nếu không có, điền `"None"` hoặc `null`).
* **`root_cause`** (string): Nguyên nhân gốc rễ gây ra sự cố.
* **`action_taken`** (string): Biện pháp/hành động đã thực hiện để khắc phục lỗi.
* **`resolution_type`** (string): Hình thức xử lý sự cố. Chỉ được chọn 1 trong 3 giá trị: `"auto"` (tự động), `"manual"` (thủ công), hoặc `"escalated"` (báo cáo cấp cao).
* **`raw_trigger`** (string): Sự kiện hoặc cảm biến kích hoạt lỗi hệ thống (ví dụ: `Belt_Alignment_Fault`).
* **`metadata`** (object JSON): Bản đồ dữ liệu bổ sung dạng key-value nếu có.

> [!WARNING]
> **Quy tắc xác thực nghiêm ngặt:** Nếu đối tượng JSON chứa bất kỳ trường nào khác ngoài các trường Bắt buộc và Tùy chọn nêu trên (unknown fields), dòng log đó sẽ bị coi là lỗi và ghi vào logs cảnh báo của watcher!

#### 📄 Ví dụ 1 dòng log hợp lệ (`audit_logs.jsonl`):
```json
{"timestamp": "2026-05-18T10:05:30Z", "machine_id": "CARTON_01", "incident_id": "CP-M1-0518-003", "fault_code": "M1", "downtime_min": 12.5, "operator": "op_pham_d", "root_cause": "Thùng carton bị ẩm không mở được", "action_taken": "Loại bỏ vỏ hộp hỏng, cấp lô mới", "resolution_type": "manual", "raw_trigger": "Carton_Magazine_Jam"}
```

---

### 4.2 Cấu trúc Markdown Front-Matter (`front-matter.schema.json`)
Sử dụng khi bạn muốn tự tạo tài liệu Markdown bằng tay (Path A) hoặc nạp tài liệu từ hệ thống khác vào `./data/parsed/accepted/` để Embedder nhúng vector.

```yaml
---
schema_version: 1                                   # Bắt buộc (luôn là 1)
tenant_id: "00000000-0000-0000-0000-000000000001"   # Bắt buộc (chuỗi UUID)
source: other                                       # Bắt buộc ("other" cho tài liệu tự nạp)
origin:
  filename: "SOP_M1_CARTON.md"                      # Bắt buộc (tên file hiển thị trích dẫn)
  uploaded_at: "2026-05-23T00:00:00Z"               # Bắt buộc (chuỗi thời gian RFC3339)
  uploaded_by: "11111111-1111-1111-1111-111111111111" # Bắt buộc (chuỗi UUID người tải)
  mime_type: "text/markdown"                         # Tùy chọn (mặc định text/markdown)
tags: [oee, mechanical, carton_machine, sop]        # Tùy chọn (danh sách thẻ nhãn)

# ─── SIÊU DỮ LIỆU OEE TÙY CHỌN (KHUYẾN NGHỊ) ───
doc_type: SOP                                       # SOP | LESSON_LEARNED | MAINTENANCE_LOG | TECHNICAL_SPEC
fault_code: M1                                      # Mã lỗi sự cố liên quan
machine_id: CARTON_01                               # Mã máy/thiết bị liên quan
category: MECHANICAL                                # Phân loại (MECHANICAL, ELECTRICAL, v.v.)
equipment_type: CARTON_MACHINE                      # Kiểu thiết bị
severity: LOW                                       # Mức độ nghiêm trọng (LOW, MEDIUM, HIGH)
avg_downtime_min: 5.0                               # Thời gian downtime trung bình (phút)
last_updated: "2026-05-01"                          # Ngày cập nhật gần nhất
---
```
