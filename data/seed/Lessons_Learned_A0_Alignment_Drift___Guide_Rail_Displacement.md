---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "LESSON_LEARNED_A0_Alignment_Drift___Guide_Rail_Displacement.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, conveyor-system, mechanical, lesson_learned]
doc_type: LESSON_LEARNED
fault_code: A0
machine_id: SHRINK_05
category: MECHANICAL
equipment_type: CONVEYOR_SYSTEM
severity: LOW
incident_date: "2026-04-09"
---

# Bai Hoc Kinh Nghiem: Su co A0 tai may SHRINK_05

## 1. Mo ta su co & Dấu hieu canh bao
Trong ca san xuat ngay 2026-04-09, may SHRINK_05 lien tuc bao loi ma **A0** (Alignment Drift / Guide Rail Displacement).
Su co gay dung may ngoai ke hoach, anh huong truc tiep den chi so OEE cua ca san xuat.
Tong thoi gian downtime ghi nhan: **37 phut**.

## 2. Phan tich Nguyen nhan (Root Cause Analysis)
Sau khi dieu tra, to bao tri xac dinh nguyen nhan goc re:

- Thanh dan huong chai bi lech do rung dong co hoc tich luy qua thoi gian
- Chai bi do nghieng (tip-over) tren bang tai gay ket van chuyen
- Hieu ung 'cau noi' (bridging) gay nghen chai o phieu nap lieu
- Toc do 2 ben bang tai khong dong bo gay xoay vong chai
- Bulong dinh vi thanh dan huong bi long ren do rung tan so cao

**Phan tich 5-Why:**
1. Tai sao may dung? → Vi ma loi A0 duoc kich hoat.
2. Tai sao A0 kich hoat? → Vi thanh dan huong chai bi lech do rung dong co hoc tich luy qua thoi gian
3. Tai sao dieu kien do xay ra? → Do thieu quy trinh kiem tra dinh ky.
4. Tai sao kiem tra dinh ky khong phat hien? → Do checklist PM khong bao gom hang muc nay.
5. Tai sao checklist thieu? → Chua cap nhat SOP tu lan su co truoc.

## 3. Cach khac phuc & Phong ngua (Resolution & Preventive Actions)

**Khac phuc ngay lap tuc:**
1. Dung bang tai, dieu chinh thanh dan huong ve dung kich thuoc duong chuan
2. Don dep chai bi do, kiem tra van toc bang tai khong vuot 250 chai/phut
3. Lap them bo rung (vibrator) o phieu nap lieu de chong hieu ung bridging
4. Can chinh va dong bo lai toc do 2 ben bang tai thong qua bien tan
5. Siet chat bulong dinh vi thanh dan, thay bulong long ren bang loai tu khoa

**Bien phap phong ngua lau dai:**
- Cap nhat checklist bao tri du phong (PM) bo sung hang muc kiem tra lien quan den A0.
- Dinh ky thay the linh kien hao mon theo khuyen nghi cua nha san xuat (moi 2000 gio van hanh).
- Dao tao lai cong nhan van hanh ve quy trinh phat hien som dau hieu cua ma loi A0.
- Gan nhan canh bao truc quan tai vi tri thuong xuat hien su co tren may.

## 4. Bai hoc rut ra
1. Phat hien som la yeu to then chot — cac dau hieu canh bao thuong xuat hien truoc khi may dung han.
2. Kiem tra dinh ky theo checklist PM giup giam 34% tan suat xuat hien su co.
3. Can co phu tung du phong tai cho de giam thoi gian cho doi dat hang tu nha cung cap.
