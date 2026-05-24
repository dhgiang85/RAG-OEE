---
schema_version: 1
tenant_id: 00000000-0000-0000-0000-000000000001
source: other
origin:
  filename: Lessons_Learned_T1_CONVEYOR.md
  uploaded_at: '2026-05-23T12:25:00Z'
  uploaded_by: 11111111-1111-1111-1111-111111111111
tags:
- oee
- mechanical
- conveyor
- overload
- lessons_learned
doc_type: LESSON_LEARNED
fault_code: T1
machine_id: CARTON_01
incident_date: '2026-05-15'
---


# Bài Học Kinh Nghiệm: Kẹt chai gây quá tải dòng điện động cơ băng tải chính CARTON_01

## 1. Mô tả sự cố & Dấu hiệu
Động cơ xích tải chính máy đóng hộp CARTON_01 tự động dừng đột ngột, khởi động từ trong tủ điện ngắt nguồn bảo vệ quá dòng. HMI hiển thị lỗi truyền động mã T1 (Quá tải lực kéo băng tải). Downtime kéo dài **35 phút** do phải tháo dỡ một loạt chai bị ép dẹp dồn ứ trên xích tải.

## 2. Phân tích Nguyên nhân (Root Cause)
Do thanh hướng dẫn chai (Guide Rails) ở góc bo cua rẽ hướng bị lỏng vít định vị dẫn đến dịch chuyển hẹp góc rẽ chai. Khi máy chạy ở tốc độ cao (250 chai/phút), các chai nhựa đi qua bị vướng mép bo, dồn đè lên nhau tạo áp lực lớn kẹt cứng xích tải. Động cơ xoay chiều cố kéo tải lớn khiến dòng điện vọt lên 4.2A vượt ngưỡng bảo vệ của Relay nhiệt trong tủ điều khiển.

## 3. Cách khắc phục & Phòng ngừa (Resolution & Preventive)
* **Cách xử lý:**
   1. Ngắt nguồn cấp điện tủ điều khiển để đảm bảo an toàn tuyệt đối.
   2. Gỡ bỏ toàn bộ chai móp méo kẹt ở bo cua.
   3. Điều chỉnh và siết khóa bulông định vị thanh hướng dẫn chai về đúng khoảng cách dưỡng chuẩn 85mm.
   4. Đợi rơ-le nhiệt nguội (khoảng 5 phút) rồi nhấn nút màu xanh "Reset" trực tiếp trên rơ-le trong tủ điện điều khiển.
* **Biện pháp phòng ngừa lâu dài:**
   - Thay thế bulông khóa thanh dẫn bằng loại bulông đầu lục giác chìm tự khóa chống rung ren.
   - Dán nhãn định vị vạch kích thước tiêu chuẩn tại các góc cua để kiểm tra trực quan nhanh đầu ca sản xuất.
