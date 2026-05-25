---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "SOP_W4_Weight_Check_Deviation___Checkweigher_Fault.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, checkweigher, quality, sop]
doc_type: SOP
fault_code: W4
machine_id: FILLER_02
category: QUALITY
equipment_type: CHECKWEIGHER
severity: LOW
avg_downtime_min: 15.0
last_updated: 2026-05-15
---

# SOP Xu ly su co W4 - Weight Check Deviation / Checkweigher Fault

## 1. Mo ta su co
Ma loi W4 (Weight Check Deviation / Checkweigher Fault) thuoc nhom **QUALITY** — **LOW**.
May bi anh huong thuong gap: FILLER_02 va cac may cung loai CHECKWEIGHER.

**Cac tin hieu kich hoat (triggers):**
- `Weight_Out_Range`
- `Checkweigher_Zero_Drift`
- `Load_Cell_Fault`
- `Belt_Speed_Error`
- `Calibration_Expired`

## 2. Quy trinh xu ly tieu chuan (Standard Operations)
Khi may bao loi W4, nhan vien van hanh thuc hien theo trinh tu:

1. Lay 20 mau kiem tra trong luong bang can tinh, so sanh voi can dong
2. Thuc hien quy trinh Zero Calibration cho load cell can kiem tra
3. Kiem tra va thay the giam chan rung (vibration damper) duoi load cell
4. Dong bo lai toc do bang tai can kiem tra voi day chuyen thong qua encoder
5. Thuc hien calibration toan phan load cell bang qua can chuan 500g & 1000g

## 3. Tieu chi leo thang (Escalation Path)
* **Escalate sang To Bao tri khi:**
  - Da thuc hien day du cac buoc tren nhung loi W4 van con sau 30 phut.
  - Thiet bi hu hong can thay the phu tung chuyen dung (co trong kho phu tung).
  - Thoi gian xu ly thu cong vuot qua **45 phut** — bao cao ngay To truong ca san xuat de ghi chep downtime OEE.

## 4. Phu tung can thiet
| Phu tung | Ma vat tu | So luong ton kho |
|----------|-----------|-----------------|
| Bo cam bien thay the | SP-W4-001 | 5 |
| Linh kien co khi thay the | SP-W4-002 | 3 |
| Module dien tu du phong | SP-W4-003 | 2 |

## 5. Bien phap phong ngua
- Kiem tra va bao tri du phong dinh ky hang tuan theo checklist PM cua may.
- Ghi chep nhat ky van hanh cho moi lan xuat hien ma loi W4.
- Dinh ky huan luyen lai SOP nay cho cong nhan van hanh moi 6 thang.
