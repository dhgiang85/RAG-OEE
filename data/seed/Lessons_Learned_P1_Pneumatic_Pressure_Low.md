---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "LESSON_LEARNED_P1_Pneumatic_Pressure_Low.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, pneumatic-system, utility, lesson_learned]
doc_type: LESSON_LEARNED
fault_code: P1
machine_id: PRESS_01
category: UTILITY
equipment_type: PNEUMATIC_SYSTEM
severity: HIGH
incident_date: "2026-04-12"
---

# Bai Hoc Kinh Nghiem: Su co P1 tai may PRESS_01

## 1. Mo ta su co & Dấu hieu canh bao
Trong ca san xuat ngay 2026-04-12, may PRESS_01 lien tuc bao loi ma **P1** (Pneumatic Pressure Low).
Su co gay dung may ngoai ke hoach, anh huong truc tiep den chi so OEE cua ca san xuat.
Tong thoi gian downtime ghi nhan: **26 phut**.

## 2. Phan tich Nguyen nhan (Root Cause Analysis)
Sau khi dieu tra, to bao tri xac dinh nguyen nhan goc re:

- Ap suat duong khi nen chinh bi sut duoi 5.5 bar
- Xi-lanh day san pham di chuyen cham khong dat hanh trinh
- Bo loc tach nuoc cua he thong khi nen bi tac nghen
- Dem lam kin (seal) cua van dien tu Solenoid bi ho thoat khi
- May nen khi cong nghiep bi ngat boi ro-le nhiet qua tai
- May say khi (Air Dryer) bi loi khong tach duoc NUOC NGUNG

**Phan tich 5-Why:**
1. Tai sao may dung? → Vi ma loi P1 duoc kich hoat.
2. Tai sao P1 kich hoat? → Vi ap suat duong khi nen chinh bi sut duoi 5.5 bar
3. Tai sao dieu kien do xay ra? → Do thieu quy trinh kiem tra dinh ky.
4. Tai sao kiem tra dinh ky khong phat hien? → Do checklist PM khong bao gom hang muc nay.
5. Tai sao checklist thieu? → Chua cap nhat SOP tu lan su co truoc.

## 3. Cach khac phuc & Phong ngua (Resolution & Preventive Actions)

**Khac phuc ngay lap tuc:**
1. Kiem tra he thong may nen khi trung tam nha may, tang ap ap suat
2. Dieu chinh lai van tiet luu (flow control) dau vao xi-lanh
3. Xa nuoc dong, thay ruot loc khi nen 0.01 micron moi
4. Thay the seal cao su moi hoac thay cum van dien tu Airtac
5. Reset ro-le nhiet may nen khi, doi dong co nguoi han va khoi dong lai
6. Xa nuoc ngung o day loc, kiem tra che do Auto Drain cua Air Dryer

**Bien phap phong ngua lau dai:**
- Cap nhat checklist bao tri du phong (PM) bo sung hang muc kiem tra lien quan den P1.
- Dinh ky thay the linh kien hao mon theo khuyen nghi cua nha san xuat (moi 2000 gio van hanh).
- Dao tao lai cong nhan van hanh ve quy trinh phat hien som dau hieu cua ma loi P1.
- Gan nhan canh bao truc quan tai vi tri thuong xuat hien su co tren may.

## 4. Bai hoc rut ra
1. Phat hien som la yeu to then chot — cac dau hieu canh bao thuong xuat hien truoc khi may dung han.
2. Kiem tra dinh ky theo checklist PM giup giam 47% tan suat xuat hien su co.
3. Can co phu tung du phong tai cho de giam thoi gian cho doi dat hang tu nha cung cap.
