---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "LESSON_LEARNED_B7_Blister_Forming_Error___Thermoforming_Defect.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, blister-machine, mechanical, lesson_learned]
doc_type: LESSON_LEARNED
fault_code: B7
machine_id: BLISTER_01
category: MECHANICAL
equipment_type: BLISTER_MACHINE
severity: HIGH
incident_date: "2026-01-03"
---

# Bai Hoc Kinh Nghiem: Su co B7 tai may BLISTER_01

## 1. Mo ta su co & Dấu hieu canh bao
Trong ca san xuat ngay 2026-01-03, may BLISTER_01 lien tuc bao loi ma **B7** (Blister Forming Error / Thermoforming Defect).
Su co gay dung may ngoai ke hoach, anh huong truc tiep den chi so OEE cua ca san xuat.
Tong thoi gian downtime ghi nhan: **88 phut**.

## 2. Phan tich Nguyen nhan (Root Cause Analysis)
Sau khi dieu tra, to bao tri xac dinh nguyen nhan goc re:

- Tam nhua PVC khong dat nhiet do dinh hinh (duoi 120 do C) gay lech hinh vi
- Mang nhua cap lieu bi dut giua chu ky do luc cang qua cao
- Khuon dinh hinh vi (blister mold) khong dong kin do cap truc tro bam can
- Do day tam nhua dau vao khong dong deu gay bien dang nhiet khong dong nhat
- Lo thung tren be mat blister phat hien boi he thong thi giac
- Kenh lam mat khuon dinh hinh bi nghet — nhiet do khuon qua cao

**Phan tich 5-Why:**
1. Tai sao may dung? → Vi ma loi B7 duoc kich hoat.
2. Tai sao B7 kich hoat? → Vi tam nhua pvc khong dat nhiet do dinh hinh (duoi 120 do c) gay lech hinh vi
3. Tai sao dieu kien do xay ra? → Do thieu quy trinh kiem tra dinh ky.
4. Tai sao kiem tra dinh ky khong phat hien? → Do checklist PM khong bao gom hang muc nay.
5. Tai sao checklist thieu? → Chua cap nhat SOP tu lan su co truoc.

## 3. Cach khac phuc & Phong ngua (Resolution & Preventive Actions)

**Khac phuc ngay lap tuc:**
1. Dieu chinh nhiet do may say tam nhua len 130 do C va cho on dinh
2. Noi lai mang nhua PVC, dieu chinh luc cang phanh cuon nha
3. Ve sinh truc dan huong khuon, thay the bac lot truc bi mon
4. Loai bo lo nhua co do day khong dat va nap lo moi dat tieu chuan 250um
5. Kiem tra he thong camera thi giac, ve sinh ong kinh va hieu chuan
6. Thong rua kenh lam mat khuon bang nuoc sach, kiem tra bom nuoc lam mat

**Bien phap phong ngua lau dai:**
- Cap nhat checklist bao tri du phong (PM) bo sung hang muc kiem tra lien quan den B7.
- Dinh ky thay the linh kien hao mon theo khuyen nghi cua nha san xuat (moi 2000 gio van hanh).
- Dao tao lai cong nhan van hanh ve quy trinh phat hien som dau hieu cua ma loi B7.
- Gan nhan canh bao truc quan tai vi tri thuong xuat hien su co tren may.

## 4. Bai hoc rut ra
1. Phat hien som la yeu to then chot — cac dau hieu canh bao thuong xuat hien truoc khi may dung han.
2. Kiem tra dinh ky theo checklist PM giup giam 49% tan suat xuat hien su co.
3. Can co phu tung du phong tai cho de giam thoi gian cho doi dat hang tu nha cung cap.
