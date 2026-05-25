---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "LESSON_LEARNED_L5_Label_Roll_Empty___Glue_Roller_Jam.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, labeler-machine, mechanical, lesson_learned]
doc_type: LESSON_LEARNED
fault_code: L5
machine_id: LABELER_03
category: MECHANICAL
equipment_type: LABELER_MACHINE
severity: MEDIUM
incident_date: "2026-05-16"
---

# Bai Hoc Kinh Nghiem: Su co L5 tai may LABELER_03

## 1. Mo ta su co & Dấu hieu canh bao
Trong ca san xuat ngay 2026-05-16, may LABELER_03 lien tuc bao loi ma **L5** (Label Roll Empty / Glue Roller Jam).
Su co gay dung may ngoai ke hoach, anh huong truc tiep den chi so OEE cua ca san xuat.
Tong thoi gian downtime ghi nhan: **58 phut**.

## 2. Phan tich Nguyen nhan (Root Cause Analysis)
Sau khi dieu tra, to bao tri xac dinh nguyen nhan goc re:

- Cuon nhan dan bi het trong qua trinh chay tu dong
- Keo dan nong chua dat nhiet do hoat dong (do duoi 140 do C)
- Luc cang cuon nhan qua lon gay dut nhan giua chung
- Dao cat nhan bi cun hoac dinh keo thua lam ket co cau
- Nhan bi lech tam dan dan do true xa cuon bi dao dong
- Lop giay de nhan (backing paper) bi dut khi thay cuon moi

**Phan tich 5-Why:**
1. Tai sao may dung? → Vi ma loi L5 duoc kich hoat.
2. Tai sao L5 kich hoat? → Vi cuon nhan dan bi het trong qua trinh chay tu dong
3. Tai sao dieu kien do xay ra? → Do thieu quy trinh kiem tra dinh ky.
4. Tai sao kiem tra dinh ky khong phat hien? → Do checklist PM khong bao gom hang muc nay.
5. Tai sao checklist thieu? → Chua cap nhat SOP tu lan su co truoc.

## 3. Cach khac phuc & Phong ngua (Resolution & Preventive Actions)

**Khac phuc ngay lap tuc:**
1. Tam dung may, luon cuon nhan moi va nhan nut chay tiep
2. Doi dien tro gia nhiet be keo dat 165 do C theo tieu chuan
3. Noi lai nhan, dieu chinh luc cang phanh xa cuon nhan tren HMI
4. Ve sinh lam sach keo bam tren luoi dao bang dung moi RP7
5. Can chinh lai do dao dong true xa cuon nhan va kiem tra bac dan
6. Noi lai lop giay de nhan va chay thu che do Jog

**Bien phap phong ngua lau dai:**
- Cap nhat checklist bao tri du phong (PM) bo sung hang muc kiem tra lien quan den L5.
- Dinh ky thay the linh kien hao mon theo khuyen nghi cua nha san xuat (moi 2000 gio van hanh).
- Dao tao lai cong nhan van hanh ve quy trinh phat hien som dau hieu cua ma loi L5.
- Gan nhan canh bao truc quan tai vi tri thuong xuat hien su co tren may.

## 4. Bai hoc rut ra
1. Phat hien som la yeu to then chot — cac dau hieu canh bao thuong xuat hien truoc khi may dung han.
2. Kiem tra dinh ky theo checklist PM giup giam 56% tan suat xuat hien su co.
3. Can co phu tung du phong tai cho de giam thoi gian cho doi dat hang tu nha cung cap.
