---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "LESSON_LEARNED_T1_Conveyor_Overload___Torque_Limit.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, conveyor-system, mechanical, lesson_learned]
doc_type: LESSON_LEARNED
fault_code: T1
machine_id: CARTON_01
category: MECHANICAL
equipment_type: CONVEYOR_SYSTEM
severity: MEDIUM
incident_date: "2026-03-06"
---

# Bai Hoc Kinh Nghiem: Su co T1 tai may CARTON_01

## 1. Mo ta su co & Dấu hieu canh bao
Trong ca san xuat ngay 2026-03-06, may CARTON_01 lien tuc bao loi ma **T1** (Conveyor Overload / Torque Limit).
Su co gay dung may ngoai ke hoach, anh huong truc tiep den chi so OEE cua ca san xuat.
Tong thoi gian downtime ghi nhan: **46 phut**.

## 2. Phan tich Nguyen nhan (Root Cause Analysis)
Sau khi dieu tra, to bao tri xac dinh nguyen nhan goc re:

- Chai bi don u lech huong tai vi tri re nhanh gay ket cung bang tai
- Dong co truyen dong chinh xich tai bi qua nhiet gay ngat ro le nhiet
- Truc truyen dong xich xuoc mon thieu mo boi tron ma sat cao
- Hop so dong co bi truot luc banh rang truyen chuyen dong
- Vong bi do banh cang xich bi vo hong gay lech xich va tang luc can

**Phan tich 5-Why:**
1. Tai sao may dung? → Vi ma loi T1 duoc kich hoat.
2. Tai sao T1 kich hoat? → Vi chai bi don u lech huong tai vi tri re nhanh gay ket cung bang tai
3. Tai sao dieu kien do xay ra? → Do thieu quy trinh kiem tra dinh ky.
4. Tai sao kiem tra dinh ky khong phat hien? → Do checklist PM khong bao gom hang muc nay.
5. Tai sao checklist thieu? → Chua cap nhat SOP tu lan su co truoc.

## 3. Cach khac phuc & Phong ngua (Resolution & Preventive Actions)

**Khac phuc ngay lap tuc:**
1. Thao go cac chai ket, phan bo lai dong chay va khoang cach chai
2. Doi dong co nguoi, nhan reset ro le nhiet bao ve trong tu dien
3. Bom mo chiu nhiet boi tron xich va o bi dan huong
4. Siet lai oc khoa puly dinh vi hoac thay the bo banh rang hop so
5. Thay the vong bi moi va can chinh lai do cang xich truyen dong

**Bien phap phong ngua lau dai:**
- Cap nhat checklist bao tri du phong (PM) bo sung hang muc kiem tra lien quan den T1.
- Dinh ky thay the linh kien hao mon theo khuyen nghi cua nha san xuat (moi 2000 gio van hanh).
- Dao tao lai cong nhan van hanh ve quy trinh phat hien som dau hieu cua ma loi T1.
- Gan nhan canh bao truc quan tai vi tri thuong xuat hien su co tren may.

## 4. Bai hoc rut ra
1. Phat hien som la yeu to then chot — cac dau hieu canh bao thuong xuat hien truoc khi may dung han.
2. Kiem tra dinh ky theo checklist PM giup giam 30% tan suat xuat hien su co.
3. Can co phu tung du phong tai cho de giam thoi gian cho doi dat hang tu nha cung cap.
