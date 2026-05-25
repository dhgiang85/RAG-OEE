---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "LESSON_LEARNED_W4_Weight_Check_Deviation___Checkweigher_Fault.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, checkweigher, quality, lesson_learned]
doc_type: LESSON_LEARNED
fault_code: W4
machine_id: FILLER_02
category: QUALITY
equipment_type: CHECKWEIGHER
severity: LOW
incident_date: "2026-03-08"
---

# Bai Hoc Kinh Nghiem: Su co W4 tai may FILLER_02

## 1. Mo ta su co & Dấu hieu canh bao
Trong ca san xuat ngay 2026-03-08, may FILLER_02 lien tuc bao loi ma **W4** (Weight Check Deviation / Checkweigher Fault).
Su co gay dung may ngoai ke hoach, anh huong truc tiep den chi so OEE cua ca san xuat.
Tong thoi gian downtime ghi nhan: **45 phut**.

## 2. Phan tich Nguyen nhan (Root Cause Analysis)
Sau khi dieu tra, to bao tri xac dinh nguyen nhan goc re:

- Trong luong san pham vuot ngoai dung sai +-2g so voi gia tri dat
- Load cell cua can kiem tra bi troi diem 0 (zero drift) sau thoi gian dai van hanh
- Bo phan can dong (dynamic weigh) bi rung bang tai gay nhieu tin hieu do
- Van toc bang tai can khong dong bo voi toc do day chuyen chinh
- Chu ky hieu chuan can da het han — can thuc hien lai calibration

**Phan tich 5-Why:**
1. Tai sao may dung? → Vi ma loi W4 duoc kich hoat.
2. Tai sao W4 kich hoat? → Vi trong luong san pham vuot ngoai dung sai +-2g so voi gia tri dat
3. Tai sao dieu kien do xay ra? → Do thieu quy trinh kiem tra dinh ky.
4. Tai sao kiem tra dinh ky khong phat hien? → Do checklist PM khong bao gom hang muc nay.
5. Tai sao checklist thieu? → Chua cap nhat SOP tu lan su co truoc.

## 3. Cach khac phuc & Phong ngua (Resolution & Preventive Actions)

**Khac phuc ngay lap tuc:**
1. Lay 20 mau kiem tra trong luong bang can tinh, so sanh voi can dong
2. Thuc hien quy trinh Zero Calibration cho load cell can kiem tra
3. Kiem tra va thay the giam chan rung (vibration damper) duoi load cell
4. Dong bo lai toc do bang tai can kiem tra voi day chuyen thong qua encoder
5. Thuc hien calibration toan phan load cell bang qua can chuan 500g & 1000g

**Bien phap phong ngua lau dai:**
- Cap nhat checklist bao tri du phong (PM) bo sung hang muc kiem tra lien quan den W4.
- Dinh ky thay the linh kien hao mon theo khuyen nghi cua nha san xuat (moi 2000 gio van hanh).
- Dao tao lai cong nhan van hanh ve quy trinh phat hien som dau hieu cua ma loi W4.
- Gan nhan canh bao truc quan tai vi tri thuong xuat hien su co tren may.

## 4. Bai hoc rut ra
1. Phat hien som la yeu to then chot — cac dau hieu canh bao thuong xuat hien truoc khi may dung han.
2. Kiem tra dinh ky theo checklist PM giup giam 52% tan suat xuat hien su co.
3. Can co phu tung du phong tai cho de giam thoi gian cho doi dat hang tu nha cung cap.
