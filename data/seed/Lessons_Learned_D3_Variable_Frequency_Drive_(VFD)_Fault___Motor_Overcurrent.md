---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "LESSON_LEARNED_D3_Variable_Frequency_Drive_(VFD)_Fault___Motor_Overcurrent.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, motor-drive, electrical, lesson_learned]
doc_type: LESSON_LEARNED
fault_code: D3
machine_id: FILLER_02
category: ELECTRICAL
equipment_type: MOTOR_DRIVE
severity: HIGH
incident_date: "2026-03-20"
---

# Bai Hoc Kinh Nghiem: Su co D3 tai may FILLER_02

## 1. Mo ta su co & Dấu hieu canh bao
Trong ca san xuat ngay 2026-03-20, may FILLER_02 lien tuc bao loi ma **D3** (Variable Frequency Drive (VFD) Fault / Motor Overcurrent).
Su co gay dung may ngoai ke hoach, anh huong truc tiep den chi so OEE cua ca san xuat.
Tong thoi gian downtime ghi nhan: **61 phut**.

## 2. Phan tich Nguyen nhan (Root Cause Analysis)
Sau khi dieu tra, to bao tri xac dinh nguyen nhan goc re:

- Bien tan (VFD) bao loi qua dong khoi dong do dong co bi ket co hoc
- Mat pha dau vao dong co dan den dong dien lech pha > 15%
- Dien ap DC bus cua bien tan tang vot qua nguong 400VDC do sut ap luoi
- Module IGBT cua bien tan bi qua nhiet do quat giai nhiet hong
- Cham mat (ground fault) trong cuon day stator dong co
- Dong co bi roi vao trang thai nghi (stall) do qua tai co hoc

**Phan tich 5-Why:**
1. Tai sao may dung? → Vi ma loi D3 duoc kich hoat.
2. Tai sao D3 kich hoat? → Vi bien tan (vfd) bao loi qua dong khoi dong do dong co bi ket co hoc
3. Tai sao dieu kien do xay ra? → Do thieu quy trinh kiem tra dinh ky.
4. Tai sao kiem tra dinh ky khong phat hien? → Do checklist PM khong bao gom hang muc nay.
5. Tai sao checklist thieu? → Chua cap nhat SOP tu lan su co truoc.

## 3. Cach khac phuc & Phong ngua (Resolution & Preventive Actions)

**Khac phuc ngay lap tuc:**
1. Reset bien tan, kiem tra co cau truyen dong co bi ket hay khong
2. Do dong dien 3 pha bang ampe kim, kiem tra can bang pha
3. Tat may, cho DC bus xa het, kiem tra dien ap luoi on dinh
4. Ve sinh canh tan nhiet va thay quat giai nhiet VFD moi
5. Do dien tro cach dien cuon day dong co, thay the neu cham mat
6. Kiem tra va giai phong phan co khi gay qua tai cho dong co

**Bien phap phong ngua lau dai:**
- Cap nhat checklist bao tri du phong (PM) bo sung hang muc kiem tra lien quan den D3.
- Dinh ky thay the linh kien hao mon theo khuyen nghi cua nha san xuat (moi 2000 gio van hanh).
- Dao tao lai cong nhan van hanh ve quy trinh phat hien som dau hieu cua ma loi D3.
- Gan nhan canh bao truc quan tai vi tri thuong xuat hien su co tren may.

## 4. Bai hoc rut ra
1. Phat hien som la yeu to then chot — cac dau hieu canh bao thuong xuat hien truoc khi may dung han.
2. Kiem tra dinh ky theo checklist PM giup giam 37% tan suat xuat hien su co.
3. Can co phu tung du phong tai cho de giam thoi gian cho doi dat hang tu nha cung cap.
