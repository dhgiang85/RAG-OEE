---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "LESSON_LEARNED_M1_Carton_Magazine_Jam___Feed_Error.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, cartoning-machine, mechanical, lesson_learned]
doc_type: LESSON_LEARNED
fault_code: M1
machine_id: CARTON_01
category: MECHANICAL
equipment_type: CARTONING_MACHINE
severity: MEDIUM
incident_date: "2026-03-24"
---

# Bai Hoc Kinh Nghiem: Su co M1 tai may CARTON_01

## 1. Mo ta su co & Dấu hieu canh bao
Trong ca san xuat ngay 2026-03-24, may CARTON_01 lien tuc bao loi ma **M1** (Carton Magazine Jam / Feed Error).
Su co gay dung may ngoai ke hoach, anh huong truc tiep den chi so OEE cua ca san xuat.
Tong thoi gian downtime ghi nhan: **31 phut**.

## 2. Phan tich Nguyen nhan (Root Cause Analysis)
Sau khi dieu tra, to bao tri xac dinh nguyen nhan goc re:

- Vo hop carton bi am moc tu kho luu tru dan den khong mo duoc
- Bang tai cap hop bi lech bang co hoc
- Co cau giac hut chan khong (Vacuum cups) bi bam bui va giam luc hut
- Sensor phat hien vo hop bi bam bui ban che mat doc
- Lo vo carton bi lech kich thuoc cat (sai lech +-2mm) gay kep khi nap
- Cam bien quang phat hien vo hop bi lech vi tri do rung dong may

**Phan tich 5-Why:**
1. Tai sao may dung? → Vi ma loi M1 duoc kich hoat.
2. Tai sao M1 kich hoat? → Vi vo hop carton bi am moc tu kho luu tru dan den khong mo duoc
3. Tai sao dieu kien do xay ra? → Do thieu quy trinh kiem tra dinh ky.
4. Tai sao kiem tra dinh ky khong phat hien? → Do checklist PM khong bao gom hang muc nay.
5. Tai sao checklist thieu? → Chua cap nhat SOP tu lan su co truoc.

## 3. Cach khac phuc & Phong ngua (Resolution & Preventive Actions)

**Khac phuc ngay lap tuc:**
1. Loai bo cac vo hop bi am, say kho khoang chua va nap lo vo hop moi
2. Chinh lai luc cang bang tai va can le banh rang dan huong
3. Ve sinh giac hut bang con chuyen dung, thay the 2 num cao su bi mon
4. Lau sach mat doc cam bien quang dien bang khan mem
5. Kiem tra va loai bo lo vo carton bi sai lech kich thuoc khoi magazine
6. Can chinh lai vi tri lap dat cam bien quang va kiem tra do rung may

**Bien phap phong ngua lau dai:**
- Cap nhat checklist bao tri du phong (PM) bo sung hang muc kiem tra lien quan den M1.
- Dinh ky thay the linh kien hao mon theo khuyen nghi cua nha san xuat (moi 2000 gio van hanh).
- Dao tao lai cong nhan van hanh ve quy trinh phat hien som dau hieu cua ma loi M1.
- Gan nhan canh bao truc quan tai vi tri thuong xuat hien su co tren may.

## 4. Bai hoc rut ra
1. Phat hien som la yeu to then chot — cac dau hieu canh bao thuong xuat hien truoc khi may dung han.
2. Kiem tra dinh ky theo checklist PM giup giam 32% tan suat xuat hien su co.
3. Can co phu tung du phong tai cho de giam thoi gian cho doi dat hang tu nha cung cap.
