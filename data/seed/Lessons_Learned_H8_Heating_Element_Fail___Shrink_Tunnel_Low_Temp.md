---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "LESSON_LEARNED_H8_Heating_Element_Fail___Shrink_Tunnel_Low_Temp.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, shrink-tunnel, electrical, lesson_learned]
doc_type: LESSON_LEARNED
fault_code: H8
machine_id: SHRINK_05
category: ELECTRICAL
equipment_type: SHRINK_TUNNEL
severity: MEDIUM
incident_date: "2026-02-11"
---

# Bai Hoc Kinh Nghiem: Su co H8 tai may SHRINK_05

## 1. Mo ta su co & Dấu hieu canh bao
Trong ca san xuat ngay 2026-02-11, may SHRINK_05 lien tuc bao loi ma **H8** (Heating Element Fail / Shrink Tunnel Low Temp).
Su co gay dung may ngoai ke hoach, anh huong truc tiep den chi so OEE cua ca san xuat.
Tong thoi gian downtime ghi nhan: **38 phut**.

## 2. Phan tich Nguyen nhan (Root Cause Analysis)
Sau khi dieu tra, to bao tri xac dinh nguyen nhan goc re:

- Nhiet do buong say mang co sut giam sau duoi nguong 135 do C
- Dut 1 trong 3 soi dien tro gia nhiet kim loai cong suat lon
- Cam bien nhiet do do sai hong tiep diem do (Thermocouple Type K)
- Quat doi luu nhiet nong buong co mang bi hong dong co
- Ro-le ban dan SSR bi chap ngo ra — cap dien lien tuc khong kiem soat

**Phan tich 5-Why:**
1. Tai sao may dung? → Vi ma loi H8 duoc kich hoat.
2. Tai sao H8 kich hoat? → Vi nhiet do buong say mang co sut giam sau duoi nguong 135 do c
3. Tai sao dieu kien do xay ra? → Do thieu quy trinh kiem tra dinh ky.
4. Tai sao kiem tra dinh ky khong phat hien? → Do checklist PM khong bao gom hang muc nay.
5. Tai sao checklist thieu? → Chua cap nhat SOP tu lan su co truoc.

## 3. Cach khac phuc & Phong ngua (Resolution & Preventive Actions)

**Khac phuc ngay lap tuc:**
1. Cho he thong gia nhiet hoi nhiet do dat 165 do C
2. Thay the soi say dien tro gia nhiet dang lo xo 3kW moi
3. Thay dau do cap nhiet dien chong an mon Type K moi
4. Thay the dong co quat thoi khi doi luu nhiet do cao
5. Thay the ro-le ban dan SSR 40A moi, kiem tra tin hieu PWM dieu khien

**Bien phap phong ngua lau dai:**
- Cap nhat checklist bao tri du phong (PM) bo sung hang muc kiem tra lien quan den H8.
- Dinh ky thay the linh kien hao mon theo khuyen nghi cua nha san xuat (moi 2000 gio van hanh).
- Dao tao lai cong nhan van hanh ve quy trinh phat hien som dau hieu cua ma loi H8.
- Gan nhan canh bao truc quan tai vi tri thuong xuat hien su co tren may.

## 4. Bai hoc rut ra
1. Phat hien som la yeu to then chot — cac dau hieu canh bao thuong xuat hien truoc khi may dung han.
2. Kiem tra dinh ky theo checklist PM giup giam 32% tan suat xuat hien su co.
3. Can co phu tung du phong tai cho de giam thoi gian cho doi dat hang tu nha cung cap.
