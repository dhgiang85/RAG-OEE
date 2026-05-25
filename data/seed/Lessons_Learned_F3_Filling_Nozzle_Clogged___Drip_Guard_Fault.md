---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "LESSON_LEARNED_F3_Filling_Nozzle_Clogged___Drip_Guard_Fault.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, filling-machine, mechanical, lesson_learned]
doc_type: LESSON_LEARNED
fault_code: F3
machine_id: FILLER_02
category: MECHANICAL
equipment_type: FILLING_MACHINE
severity: HIGH
incident_date: "2026-04-09"
---

# Bai Hoc Kinh Nghiem: Su co F3 tai may FILLER_02

## 1. Mo ta su co & Dấu hieu canh bao
Trong ca san xuat ngay 2026-04-09, may FILLER_02 lien tuc bao loi ma **F3** (Filling Nozzle Clogged / Drip Guard Fault).
Su co gay dung may ngoai ke hoach, anh huong truc tiep den chi so OEE cua ca san xuat.
Tong thoi gian downtime ghi nhan: **65 phut**.

## 2. Phan tich Nguyen nhan (Root Cause Analysis)
Sau khi dieu tra, to bao tri xac dinh nguyen nhan goc re:

- Voi chiet rot bi tac nghen do can san pham siro duong co dac
- Khay hung giot khong thu hoi het hanh trinh do ket lo xo
- Dong co servo nang ha voi bi sai lech toa do goc
- Gioang voi chiet bi rach dan den nho giot lien tuc
- The tich chiet rot vuot ngoai dung sai +-1.5% do hao mon voi
- Cap san pham co do nho cao gay lang dong trong voi chiet

**Phan tich 5-Why:**
1. Tai sao may dung? → Vi ma loi F3 duoc kich hoat.
2. Tai sao F3 kich hoat? → Vi voi chiet rot bi tac nghen do can san pham siro duong co dac
3. Tai sao dieu kien do xay ra? → Do thieu quy trinh kiem tra dinh ky.
4. Tai sao kiem tra dinh ky khong phat hien? → Do checklist PM khong bao gom hang muc nay.
5. Tai sao checklist thieu? → Chua cap nhat SOP tu lan su co truoc.

## 3. Cach khac phuc & Phong ngua (Resolution & Preventive Actions)

**Khac phuc ngay lap tuc:**
1. Chay quy trinh CIP (Clean-in-Place) suc rua voi bang nuoc am 70 do C
2. Ve sinh truc dan huong khay hung, thay lo xo keo hoi vi
3. Thuc hien reset homing truc servo nang ha voi qua HMI
4. Thay the bo gioang Teflon lam kin voi chiet rot moi
5. Hieu chuan lai he thong bom dinh luong va kiem tra dung sai the tich
6. Tang tan suat CIP len 2 lan/ca doi voi san pham do nho cao

**Bien phap phong ngua lau dai:**
- Cap nhat checklist bao tri du phong (PM) bo sung hang muc kiem tra lien quan den F3.
- Dinh ky thay the linh kien hao mon theo khuyen nghi cua nha san xuat (moi 2000 gio van hanh).
- Dao tao lai cong nhan van hanh ve quy trinh phat hien som dau hieu cua ma loi F3.
- Gan nhan canh bao truc quan tai vi tri thuong xuat hien su co tren may.

## 4. Bai hoc rut ra
1. Phat hien som la yeu to then chot — cac dau hieu canh bao thuong xuat hien truoc khi may dung han.
2. Kiem tra dinh ky theo checklist PM giup giam 34% tan suat xuat hien su co.
3. Can co phu tung du phong tai cho de giam thoi gian cho doi dat hang tu nha cung cap.
