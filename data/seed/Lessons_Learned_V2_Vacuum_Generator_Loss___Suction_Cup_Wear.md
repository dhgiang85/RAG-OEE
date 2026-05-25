---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "LESSON_LEARNED_V2_Vacuum_Generator_Loss___Suction_Cup_Wear.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, vacuum-system, pneumatic, lesson_learned]
doc_type: LESSON_LEARNED
fault_code: V2
machine_id: PACKER_04
category: PNEUMATIC
equipment_type: VACUUM_SYSTEM
severity: MEDIUM
incident_date: "2026-01-13"
---

# Bai Hoc Kinh Nghiem: Su co V2 tai may PACKER_04

## 1. Mo ta su co & Dấu hieu canh bao
Trong ca san xuat ngay 2026-01-13, may PACKER_04 lien tuc bao loi ma **V2** (Vacuum Generator Loss / Suction Cup Wear).
Su co gay dung may ngoai ke hoach, anh huong truc tiep den chi so OEE cua ca san xuat.
Tong thoi gian downtime ghi nhan: **27 phut**.

## 2. Phan tich Nguyen nhan (Root Cause Analysis)
Sau khi dieu tra, to bao tri xac dinh nguyen nhan goc re:

- Ap suat chan khong gap bao bi sut duoi muc an toan -0.55 bar
- Giac hut cao su (suction cup) bi rach mep dinh do co xat co hoc
- Dau ejector tao ap chan khong bi nghet boi xo bui giay carton
- Ong mem dan ap suat chan khong bi gap goc hoac ro ri
- Cam bien ap suat chan khong dien tu (Digital Vacuum Switch) bi sai lech

**Phan tich 5-Why:**
1. Tai sao may dung? → Vi ma loi V2 duoc kich hoat.
2. Tai sao V2 kich hoat? → Vi ap suat chan khong gap bao bi sut duoi muc an toan -0.55 bar
3. Tai sao dieu kien do xay ra? → Do thieu quy trinh kiem tra dinh ky.
4. Tai sao kiem tra dinh ky khong phat hien? → Do checklist PM khong bao gom hang muc nay.
5. Tai sao checklist thieu? → Chua cap nhat SOP tu lan su co truoc.

## 3. Cach khac phuc & Phong ngua (Resolution & Preventive Actions)

**Khac phuc ngay lap tuc:**
1. Ve sinh coc loc xa bui va dieu chinh ap suat cap nguon
2. Thay the cum 4 num giac hut chan khong silicon chiu dau phi 25
3. Dung khi nen ap luc cao say thoi thong Ejector venturi
4. Thay the doan ong mem PU phi 6 cap chan khong
5. Hieu chuan lai cam bien chan khong SMC ve nguong -0.55 bar chinh xac

**Bien phap phong ngua lau dai:**
- Cap nhat checklist bao tri du phong (PM) bo sung hang muc kiem tra lien quan den V2.
- Dinh ky thay the linh kien hao mon theo khuyen nghi cua nha san xuat (moi 2000 gio van hanh).
- Dao tao lai cong nhan van hanh ve quy trinh phat hien som dau hieu cua ma loi V2.
- Gan nhan canh bao truc quan tai vi tri thuong xuat hien su co tren may.

## 4. Bai hoc rut ra
1. Phat hien som la yeu to then chot — cac dau hieu canh bao thuong xuat hien truoc khi may dung han.
2. Kiem tra dinh ky theo checklist PM giup giam 50% tan suat xuat hien su co.
3. Can co phu tung du phong tai cho de giam thoi gian cho doi dat hang tu nha cung cap.
