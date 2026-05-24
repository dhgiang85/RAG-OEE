---
schema_version: 1
tenant_id: 00000000-0000-0000-0000-000000000001
source: other
origin:
  filename: SOP_H8_HEATER.md
  uploaded_at: '2026-05-23T12:30:00Z'
  uploaded_by: 11111111-1111-1111-1111-111111111111
tags:
- oee
- heating
- shrink_tunnel
- thermal
- sop
doc_type: SOP
fault_code: H8
machine_id: SHRINK_05
category: ELECTRICAL
equipment_type: SHRINK_TUNNEL
severity: MEDIUM
avg_downtime_min: 20.0
last_updated: '2026-05-10'
---


# SOP Xử lý sự cố H8 - Nhiệt độ Buồng co màng nhiệt SHRINK_05 bị sụt áp dưới tiêu chuẩn

## 1. Quy trình xử lý tiêu chuẩn (Standard Operations)
Khi buồng co màng báo lỗi nhiệt độ thấp (Fault H8 - Dưới 135°C), nhân viên thực hiện thao tác sau:
1. Nhấn nút dừng cấp màng co và nút tạm dừng băng tải nạp chai để ngăn chai đi qua buồng sấy khi chưa đủ nhiệt độ (tránh lỗi chai co màng nhăn nheo).
2. Kiểm tra trị số nhiệt độ thực tế (PV) hiển thị trên đồng hồ nhiệt độ Omron tại mặt tủ điều khiển.
3. Nếu nhiệt độ tăng rất chậm hoặc không tăng:
   - Đo dòng điện pha đi qua 3 pha sấy buồng nhiệt. Trị số tiêu chuẩn là 12A/pha. Nếu sụt còn 8A, kết luận hỏng đứt 1 thanh điện trở gia nhiệt hoặc nổ cầu chì bán dẫn bảo vệ nhiệt.
   - Báo ngay kỹ sư cơ điện để đo kiểm tra và tiến hành ngắt điện thay thế thanh sấy điện trở 2000W mới.
4. Đợi buồng sấy đạt đủ nhiệt độ cài đặt hoạt động ổn định (160°C - 165°C), tiến hành cho chạy lại băng tải nạp chai và chạy Auto.

## 2. Tiêu chí leo thang (Escalation Path)
* **Báo cáo Tổ bảo trì:**
   - Nhiệt độ buồng sấy không tăng mặc dù đèn trạng thái gia nhiệt (OUT1) vẫn sáng (hỏng hoàn toàn cụm thanh sấy hoặc lỗi rơ le bán dẫn SSR bị hỏng hở mạch).
   - Thời gian sụt nhiệt độ kéo dài quá **15 phút** gây ách tắc dây chuyền, phải thông báo Giám sát sản xuất điều chỉnh tốc độ máy chiết rót phía trước để giảm tải dồn ứ sản phẩm.
