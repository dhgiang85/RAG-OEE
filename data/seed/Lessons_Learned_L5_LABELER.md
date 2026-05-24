---
schema_version: 1
tenant_id: 00000000-0000-0000-0000-000000000001
source: other
origin:
  filename: Lessons_Learned_L5_LABELER.md
  uploaded_at: '2026-05-23T12:05:00Z'
  uploaded_by: 11111111-1111-1111-1111-111111111111
tags:
- oee
- packaging
- labeler
- lessons_learned
- maintenance
doc_type: LESSON_LEARNED
fault_code: L5
machine_id: LABELER_03
incident_date: '2026-05-12'
---


# Bài Học Kinh Nghiệm: Kẹt cứng cụm lô keo nóng máy LABELER_03 gây sập Aptomat

## 1. Mô tả sự cố & Hậu quả
Vào ca 2 ngày 12/05/2026, máy dán nhãn LABELER_03 đột ngột sập nguồn động cơ, HMI mất kết nối và nhảy Aptomat nhánh 3 pha. Downtime ghi nhận lên tới **75 phút**, gây sụt giảm OEE của dây chuyền đóng gói đáng kể.

## 2. Phân tích Nguyên nhân (Root Cause)
Do cảm biến nhiệt độ (Thermocouple PT100) bể keo bị báo sai lệch nhiệt độ thấp hơn thực tế. Bộ điều khiển liên tục cấp điện cho thanh nhiệt khiến keo nóng chảy bị quá nhiệt (đạt gần 210 độ C) dẫn đến cháy keo, hóa than đen đóng cặn cứng kẹt chặt lu lô quay. Khi động cơ cố kéo lu lô bị kẹt cứng, dòng điện tăng vọt kích hoạt Aptomat bảo vệ quá tải.

## 3. Cách khắc phục & Phòng ngừa (Resolution & Preventive)
* **Khắc phục:** 
  1. Tháo rã cụm lô keo dán dính, ngâm rửa trong bể dung môi hóa chất làm mềm keo cháy carbon.
  2. Thay thế cảm biến nhiệt độ PT100 mới và hiệu chuẩn lại sai số nhiệt độ bể keo bằng súng hồng ngoại.
  3. Cài đặt lại tham số bảo vệ dòng điện của biến tần truyền động lô keo về đúng ngưỡng an toàn 1.8A.
* **Biện pháp phòng ngừa lâu dài:**
  - Kỹ thuật viên bảo trì bắt buộc phải kiểm tra và vệ sinh bể keo nóng định kỳ hàng tuần.
  - Thay đổi hãng keo dán sang loại chịu nhiệt cao hơn để giảm thiểu hiện tượng cháy carbon hóa than.
