---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "SOP_L5_Label_Roll_Empty___Glue_Roller_Jam.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, labeler-machine, mechanical, sop]
doc_type: SOP
fault_code: L5
machine_id: LABELER_03
category: MECHANICAL
equipment_type: LABELER_MACHINE
severity: MEDIUM
avg_downtime_min: 15.0
last_updated: 2026-05-15
---

# SOP Xu ly su co L5 - Label Roll Empty / Glue Roller Jam

## 1. Mo ta su co
Ma loi L5 (Label Roll Empty / Glue Roller Jam) thuoc nhom **MECHANICAL** — **MEDIUM**.
May bi anh huong thuong gap: LABELER_03 va cac may cung loai LABELER_MACHINE.

**Cac tin hieu kich hoat (triggers):**
- `Label_Roll_End`
- `Glue_Temp_Low`
- `Label_Web_Snap`
- `Cutter_Blade_Stuck`
- `Label_Misalign`
- `Backing_Paper_Break`

## 2. Quy trinh xu ly tieu chuan (Standard Operations)
Khi may bao loi L5, nhan vien van hanh thuc hien theo trinh tu:

1. Tam dung may, luon cuon nhan moi va nhan nut chay tiep
2. Doi dien tro gia nhiet be keo dat 165 do C theo tieu chuan
3. Noi lai nhan, dieu chinh luc cang phanh xa cuon nhan tren HMI
4. Ve sinh lam sach keo bam tren luoi dao bang dung moi RP7
5. Can chinh lai do dao dong true xa cuon nhan va kiem tra bac dan
6. Noi lai lop giay de nhan va chay thu che do Jog

## 3. Tieu chi leo thang (Escalation Path)
* **Escalate sang To Bao tri khi:**
  - Da thuc hien day du cac buoc tren nhung loi L5 van con sau 30 phut.
  - Thiet bi hu hong can thay the phu tung chuyen dung (co trong kho phu tung).
  - Thoi gian xu ly thu cong vuot qua **45 phut** — bao cao ngay To truong ca san xuat de ghi chep downtime OEE.

## 4. Phu tung can thiet
| Phu tung | Ma vat tu | So luong ton kho |
|----------|-----------|-----------------|
| Bo cam bien thay the | SP-L5-001 | 5 |
| Linh kien co khi thay the | SP-L5-002 | 3 |
| Module dien tu du phong | SP-L5-003 | 2 |

## 5. Bien phap phong ngua
- Kiem tra va bao tri du phong dinh ky hang tuan theo checklist PM cua may.
- Ghi chep nhat ky van hanh cho moi lan xuat hien ma loi L5.
- Dinh ky huan luyen lai SOP nay cho cong nhan van hanh moi 6 thang.
