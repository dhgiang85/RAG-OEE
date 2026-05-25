---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "LESSON_LEARNED_S9_Safety_Interlock___Door_Open___Light_Curtain.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, safety-system, safety, lesson_learned]
doc_type: LESSON_LEARNED
fault_code: S9
machine_id: PRESS_01
category: SAFETY
equipment_type: SAFETY_SYSTEM
severity: CRITICAL
incident_date: "2026-03-04"
---

# Bai Hoc Kinh Nghiem: Su co S9 tai may PRESS_01

## 1. Mo ta su co & Dấu hieu canh bao
Trong ca san xuat ngay 2026-03-04, may PRESS_01 lien tuc bao loi ma **S9** (Safety Interlock / Door Open / Light Curtain).
Su co gay dung may ngoai ke hoach, anh huong truc tiep den chi so OEE cua ca san xuat.
Tong thoi gian downtime ghi nhan: **42 phut**.

## 2. Phan tich Nguyen nhan (Root Cause Analysis)
Sau khi dieu tra, to bao tri xac dinh nguyen nhan goc re:

- Cua an toan khoang bao ve cum co cau cap chai bi mo dot ngot
- Ky thuat vien di vao vung an toan cua cam bien quang chan tia (Light curtain)
- Nut dung khan cap (E-Stop) phia sau may bi va cham vat ly
- Khoa an toan interlock co hoc cua bi ket tiep diem dien
- Ro-le an toan (Safety Relay) bi hong mach khong nhan tin hieu phan hoi

**Phan tich 5-Why:**
1. Tai sao may dung? → Vi ma loi S9 duoc kich hoat.
2. Tai sao S9 kich hoat? → Vi cua an toan khoang bao ve cum co cau cap chai bi mo dot ngot
3. Tai sao dieu kien do xay ra? → Do thieu quy trinh kiem tra dinh ky.
4. Tai sao kiem tra dinh ky khong phat hien? → Do checklist PM khong bao gom hang muc nay.
5. Tai sao checklist thieu? → Chua cap nhat SOP tu lan su co truoc.

## 3. Cach khac phuc & Phong ngua (Resolution & Preventive Actions)

**Khac phuc ngay lap tuc:**
1. Dong chat cua an toan khoang bao ve, reset loi tren HMI
2. Rut tay hoac cong cu khoi vung quet tia hong ngoai an toan
3. Kiem tra va xoay num reset nut dung khan cap E-Stop
4. Thay the cum cong tac interlock co dien Schmersal
5. Thay the ro-le an toan Pilz PNOZ moi, kiem tra day dau noi

**Bien phap phong ngua lau dai:**
- Cap nhat checklist bao tri du phong (PM) bo sung hang muc kiem tra lien quan den S9.
- Dinh ky thay the linh kien hao mon theo khuyen nghi cua nha san xuat (moi 2000 gio van hanh).
- Dao tao lai cong nhan van hanh ve quy trinh phat hien som dau hieu cua ma loi S9.
- Gan nhan canh bao truc quan tai vi tri thuong xuat hien su co tren may.

## 4. Bai hoc rut ra
1. Phat hien som la yeu to then chot — cac dau hieu canh bao thuong xuat hien truoc khi may dung han.
2. Kiem tra dinh ky theo checklist PM giup giam 42% tan suat xuat hien su co.
3. Can co phu tung du phong tai cho de giam thoi gian cho doi dat hang tu nha cung cap.
