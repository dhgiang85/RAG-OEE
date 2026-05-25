---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "SOP_A0_Alignment_Drift___Guide_Rail_Displacement.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, conveyor-system, mechanical, sop]
doc_type: SOP
fault_code: A0
machine_id: SHRINK_05
category: MECHANICAL
equipment_type: CONVEYOR_SYSTEM
severity: LOW
avg_downtime_min: 15.0
last_updated: 2026-05-15
---

# SOP Xu ly su co A0 - Alignment Drift / Guide Rail Displacement

## 1. Mo ta su co
Ma loi A0 (Alignment Drift / Guide Rail Displacement) thuoc nhom **MECHANICAL** — **LOW**.
May bi anh huong thuong gap: SHRINK_05 va cac may cung loai CONVEYOR_SYSTEM.

**Cac tin hieu kich hoat (triggers):**
- `Alignment_Warning`
- `Guide_Rail_Position_Fault`
- `Bottle_Fall_Detected`
- `Product_Bridge_Detected`
- `Side_Belt_Speed_Mismatch`

## 2. Quy trinh xu ly tieu chuan (Standard Operations)
Khi may bao loi A0, nhan vien van hanh thuc hien theo trinh tu:

1. Dung bang tai, dieu chinh thanh dan huong ve dung kich thuoc duong chuan
2. Don dep chai bi do, kiem tra van toc bang tai khong vuot 250 chai/phut
3. Lap them bo rung (vibrator) o phieu nap lieu de chong hieu ung bridging
4. Can chinh va dong bo lai toc do 2 ben bang tai thong qua bien tan
5. Siet chat bulong dinh vi thanh dan, thay bulong long ren bang loai tu khoa

## 3. Tieu chi leo thang (Escalation Path)
* **Escalate sang To Bao tri khi:**
  - Da thuc hien day du cac buoc tren nhung loi A0 van con sau 30 phut.
  - Thiet bi hu hong can thay the phu tung chuyen dung (co trong kho phu tung).
  - Thoi gian xu ly thu cong vuot qua **45 phut** — bao cao ngay To truong ca san xuat de ghi chep downtime OEE.

## 4. Phu tung can thiet
| Phu tung | Ma vat tu | So luong ton kho |
|----------|-----------|-----------------|
| Bo cam bien thay the | SP-A0-001 | 5 |
| Linh kien co khi thay the | SP-A0-002 | 3 |
| Module dien tu du phong | SP-A0-003 | 2 |

## 5. Bien phap phong ngua
- Kiem tra va bao tri du phong dinh ky hang tuan theo checklist PM cua may.
- Ghi chep nhat ky van hanh cho moi lan xuat hien ma loi A0.
- Dinh ky huan luyen lai SOP nay cho cong nhan van hanh moi 6 thang.
