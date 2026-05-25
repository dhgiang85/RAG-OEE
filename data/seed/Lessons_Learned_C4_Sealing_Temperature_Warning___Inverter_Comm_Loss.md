---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "LESSON_LEARNED_C4_Sealing_Temperature_Warning___Inverter_Comm_Loss.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, shrink-tunnel, electrical, lesson_learned]
doc_type: LESSON_LEARNED
fault_code: C4
machine_id: SHRINK_05
category: ELECTRICAL
equipment_type: SHRINK_TUNNEL
severity: HIGH
incident_date: "2026-05-15"
---

# Bai Hoc Kinh Nghiem: Su co C4 tai may SHRINK_05

## 1. Mo ta su co & Dấu hieu canh bao
Trong ca san xuat ngay 2026-05-15, may SHRINK_05 lien tuc bao loi ma **C4** (Sealing Temperature Warning / Inverter Comm Loss).
Su co gay dung may ngoai ke hoach, anh huong truc tiep den chi so OEE cua ca san xuat.
Tong thoi gian downtime ghi nhan: **25 phut**.

## 2. Phan tich Nguyen nhan (Root Cause Analysis)
Sau khi dieu tra, to bao tri xac dinh nguyen nhan goc re:

- Nhiet do thanh han sealing vuot nguong canh bao PID dat
- Mat thong so cau hinh bien tan dot ngot do sut ap nguon
- Dut day dien tro gia nhiet cua buong co mang
- Ro-le ban dan (SSR) dieu khien nhiet do bi hong ngo ra chap
- Quat lam mat bien tan bi ket khong quay — nhiet do tu dien tang cao
- Cam bien nhiet PT100 loi doc sai lech > 5% gia tri thuc

**Phan tich 5-Why:**
1. Tai sao may dung? → Vi ma loi C4 duoc kich hoat.
2. Tai sao C4 kich hoat? → Vi nhiet do thanh han sealing vuot nguong canh bao pid dat
3. Tai sao dieu kien do xay ra? → Do thieu quy trinh kiem tra dinh ky.
4. Tai sao kiem tra dinh ky khong phat hien? → Do checklist PM khong bao gom hang muc nay.
5. Tai sao checklist thieu? → Chua cap nhat SOP tu lan su co truoc.

## 3. Cach khac phuc & Phong ngua (Resolution & Preventive Actions)

**Khac phuc ngay lap tuc:**
1. Cho bo PID tu dong dieu chinh giam dong kich thich
2. Nap lai thong so cau hinh bien tan tu ban sao luu gan nhat
3. Thay the day dien tro gia nhiet moi cong suat 2000W
4. Thay the ro-le ban dan (SSR) moi loai Autonics 40A
5. Thay the quat lam mat bien tan va ve sinh canh tan nhiet
6. Hieu chuan lai cam bien PT100 hoac thay the neu hong

**Bien phap phong ngua lau dai:**
- Cap nhat checklist bao tri du phong (PM) bo sung hang muc kiem tra lien quan den C4.
- Dinh ky thay the linh kien hao mon theo khuyen nghi cua nha san xuat (moi 2000 gio van hanh).
- Dao tao lai cong nhan van hanh ve quy trinh phat hien som dau hieu cua ma loi C4.
- Gan nhan canh bao truc quan tai vi tri thuong xuat hien su co tren may.

## 4. Bai hoc rut ra
1. Phat hien som la yeu to then chot — cac dau hieu canh bao thuong xuat hien truoc khi may dung han.
2. Kiem tra dinh ky theo checklist PM giup giam 43% tan suat xuat hien su co.
3. Can co phu tung du phong tai cho de giam thoi gian cho doi dat hang tu nha cung cap.
