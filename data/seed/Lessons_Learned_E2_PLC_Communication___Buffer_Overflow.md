---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "LESSON_LEARNED_E2_PLC_Communication___Buffer_Overflow.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, control-system, electrical, lesson_learned]
doc_type: LESSON_LEARNED
fault_code: E2
machine_id: FILLER_02
category: ELECTRICAL
equipment_type: CONTROL_SYSTEM
severity: CRITICAL
incident_date: "2026-04-08"
---

# Bai Hoc Kinh Nghiem: Su co E2 tai may FILLER_02

## 1. Mo ta su co & Dấu hieu canh bao
Trong ca san xuat ngay 2026-04-08, may FILLER_02 lien tuc bao loi ma **E2** (PLC Communication / Buffer Overflow).
Su co gay dung may ngoai ke hoach, anh huong truc tiep den chi so OEE cua ca san xuat.
Tong thoi gian downtime ghi nhan: **83 phut**.

## 2. Phan tich Nguyen nhan (Root Cause Analysis)
Sau khi dieu tra, to bao tri xac dinh nguyen nhan goc re:

- Tran bo dem truyen thong do khoi ham OEE goi ngat qua nhieu
- Mat tin hieu cam bien muc chat long do bam bui ban
- Nhieu dien tu tan so cao tu bien tan canh CPU Siemens 1214C
- Dut cap mang LAN ket noi giua PLC va man hinh HMI
- Mat nguon phu 24VDC cua bo dieu khien PLC do hong bo nguon SMPS
- Loi phan mem firmware PLC — can nang cap version TIA Portal

**Phan tich 5-Why:**
1. Tai sao may dung? → Vi ma loi E2 duoc kich hoat.
2. Tai sao E2 kich hoat? → Vi tran bo dem truyen thong do khoi ham oee goi ngat qua nhieu
3. Tai sao dieu kien do xay ra? → Do thieu quy trinh kiem tra dinh ky.
4. Tai sao kiem tra dinh ky khong phat hien? → Do checklist PM khong bao gom hang muc nay.
5. Tai sao checklist thieu? → Chua cap nhat SOP tu lan su co truoc.

## 3. Cach khac phuc & Phong ngua (Resolution & Preventive Actions)

**Khac phuc ngay lap tuc:**
1. Khoi dong lai module mang, kiem tra lai cau hinh phan cung trong TIA Portal
2. Goi bao tri ve sinh dau do va siet chat lai jack cam tin hieu
3. Lap dat bo sung vong ferrite chong nhieu tren cap truyen thong
4. Bam lai dau mang RJ45 moi va do kiem tra bang thong truyen dan
5. Thay the bo nguon SMPS 24VDC 5A moi, do lai dien ap ngo ra
6. Thuc hien firmware update PLC qua TIA Portal va backup cau hinh

**Bien phap phong ngua lau dai:**
- Cap nhat checklist bao tri du phong (PM) bo sung hang muc kiem tra lien quan den E2.
- Dinh ky thay the linh kien hao mon theo khuyen nghi cua nha san xuat (moi 2000 gio van hanh).
- Dao tao lai cong nhan van hanh ve quy trinh phat hien som dau hieu cua ma loi E2.
- Gan nhan canh bao truc quan tai vi tri thuong xuat hien su co tren may.

## 4. Bai hoc rut ra
1. Phat hien som la yeu to then chot — cac dau hieu canh bao thuong xuat hien truoc khi may dung han.
2. Kiem tra dinh ky theo checklist PM giup giam 46% tan suat xuat hien su co.
3. Can co phu tung du phong tai cho de giam thoi gian cho doi dat hang tu nha cung cap.
