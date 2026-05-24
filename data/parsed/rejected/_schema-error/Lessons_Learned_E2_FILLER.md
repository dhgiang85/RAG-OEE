---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "Lessons_Learned_E2_FILLER.md"
  uploaded_at: "2026-05-23T00:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, plc, tia_portal, cpu_1214c, communication, lesson_learned]
doc_type: LESSON_LEARNED
fault_code: E2
machine_id: FILLER_02
incident_date: "2026-05-20"
---

# Bài Học Kinh Nghiệm: Treo module điều khiển máy FILLER_02 (Lỗi E2)

## 1. Mô tả sự cố & Dấu hiệu cảnh báo
* **Hiện tượng:** Cụm chiết rót của máy FILLER_02 dừng đột ngột. Giao diện HMI đóng băng, báo lỗi E2 (Mất kết nối truyền thông).
* **Cảnh báo phần cứng:** Đèn báo lỗi (ERROR LED) trên bộ điều khiển nhấp nháy màu đỏ liên tục, đèn RUN tắt.

## 2. Phân tích Nguyên nhân (Root Cause)
Sau khi kết nối máy tính kỹ thuật để chẩn đoán, phát hiện lỗi xuất phát từ việc tràn bộ đệm truyền thông (communication buffer overflow). Cụ thể, khối hàm (Function Block) chịu trách nhiệm gửi dữ liệu OEE liên tục bị gọi ngắt, dẫn đến CPU Siemens 1214C bị quá tải chu kỳ quét (Scan cycle time exceeded) và tự tự động chuyển sang chế độ STOP để bảo vệ hệ thống.

## 3. Cách khắc phục & Phòng ngừa (Resolution & Preventive)
* **Khắc phục tạm thời:** Thực hiện reset nóng phần cứng. Sử dụng phần mềm TIA Portal để clear buffer lỗi, kiểm tra lại cấu hình phần cứng (Hardware Configuration) và load lại chương trình đang chạy. Khởi động lại CPU sang chế độ RUN.
* **Biện pháp phòng ngừa:** 1. Cập nhật lại logic trong TIA Portal: Thêm timer delay (100ms) giữa các lần gửi dữ liệu OEE để giảm tải cho CPU 1214C.
  2. Bật tính năng giới hạn thời gian ngắt (Cycle load management) trong phần Protection & Security của cấu hình CPU.
