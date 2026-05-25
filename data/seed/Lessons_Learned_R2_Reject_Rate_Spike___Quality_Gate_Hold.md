---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "LESSON_LEARNED_R2_Reject_Rate_Spike___Quality_Gate_Hold.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, quality-inspection, quality, lesson_learned]
doc_type: LESSON_LEARNED
fault_code: R2
machine_id: PRESS_01
category: QUALITY
equipment_type: QUALITY_INSPECTION
severity: MEDIUM
incident_date: "2026-01-13"
---

# Bai Hoc Kinh Nghiem: Su co R2 tai may PRESS_01

## 1. Mo ta su co & Dấu hieu canh bao
Trong ca san xuat ngay 2026-01-13, may PRESS_01 lien tuc bao loi ma **R2** (Reject Rate Spike / Quality Gate Hold).
Su co gay dung may ngoai ke hoach, anh huong truc tiep den chi so OEE cua ca san xuat.
Tong thoi gian downtime ghi nhan: **66 phut**.

## 2. Phan tich Nguyen nhan (Root Cause Analysis)
Sau khi dieu tra, to bao tri xac dinh nguyen nhan goc re:

- Ty le san pham loi vuot nguong 3% — chat luong dau vao khong dat
- He thong camera thi giac (Vision Inspection) phat hien di thuong lien tuc
- Hat la xuat hien trong san pham do vo chai hoac rac tu bang tai
- Chai nhua bi bien dang ovan (ovality) dan den dan nhan lech
- Bo phan loai khi nen (pneumatic reject) bi tre phan ung bo sot san pham loi

**Phan tich 5-Why:**
1. Tai sao may dung? → Vi ma loi R2 duoc kich hoat.
2. Tai sao R2 kich hoat? → Vi ty le san pham loi vuot nguong 3% — chat luong dau vao khong dat
3. Tai sao dieu kien do xay ra? → Do thieu quy trinh kiem tra dinh ky.
4. Tai sao kiem tra dinh ky khong phat hien? → Do checklist PM khong bao gom hang muc nay.
5. Tai sao checklist thieu? → Chua cap nhat SOP tu lan su co truoc.

## 3. Cach khac phuc & Phong ngua (Resolution & Preventive Actions)

**Khac phuc ngay lap tuc:**
1. Tam dung day chuyen, kiem tra chat luong nguyen lieu dau vao
2. Hieu chuan lai he thong camera vision, ve sinh den LED chieu sang
3. Kiem tra va don sach cac manh vo chai tren bang tai
4. Lay mau kiem tra do ovan cua chai, loai bo lo chai loi
5. Dieu chinh lai thoi gian phan ung cua xi-lanh pneumat reject

**Bien phap phong ngua lau dai:**
- Cap nhat checklist bao tri du phong (PM) bo sung hang muc kiem tra lien quan den R2.
- Dinh ky thay the linh kien hao mon theo khuyen nghi cua nha san xuat (moi 2000 gio van hanh).
- Dao tao lai cong nhan van hanh ve quy trinh phat hien som dau hieu cua ma loi R2.
- Gan nhan canh bao truc quan tai vi tri thuong xuat hien su co tren may.

## 4. Bai hoc rut ra
1. Phat hien som la yeu to then chot — cac dau hieu canh bao thuong xuat hien truoc khi may dung han.
2. Kiem tra dinh ky theo checklist PM giup giam 39% tan suat xuat hien su co.
3. Can co phu tung du phong tai cho de giam thoi gian cho doi dat hang tu nha cung cap.
