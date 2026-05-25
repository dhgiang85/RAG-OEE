---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "SOP_B7_Blister_Forming_Error___Thermoforming_Defect.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, blister-machine, mechanical, sop]
doc_type: SOP
fault_code: B7
machine_id: BLISTER_01
category: MECHANICAL
equipment_type: BLISTER_MACHINE
severity: HIGH
avg_downtime_min: 15.0
last_updated: 2026-05-15
---

# SOP Xu ly su co B7 - Blister Forming Error / Thermoforming Defect

## 1. Mo ta su co
Ma loi B7 (Blister Forming Error / Thermoforming Defect) thuoc nhom **MECHANICAL** — **HIGH**.
May bi anh huong thuong gap: BLISTER_01 va cac may cung loai BLISTER_MACHINE.

**Cac tin hieu kich hoat (triggers):**
- `Blister_Misform`
- `Plastic_Web_Snap`
- `Forming_Temp_Low`
- `Mold_Not_Closed`
- `Sheet_Thickness_Fault`
- `Blister_Hole_Detected`

## 2. Quy trinh xu ly tieu chuan (Standard Operations)
Khi may bao loi B7, nhan vien van hanh thuc hien theo trinh tu:

1. Dieu chinh nhiet do may say tam nhua len 130 do C va cho on dinh
2. Noi lai mang nhua PVC, dieu chinh luc cang phanh cuon nha
3. Ve sinh truc dan huong khuon, thay the bac lot truc bi mon
4. Loai bo lo nhua co do day khong dat va nap lo moi dat tieu chuan 250um
5. Kiem tra he thong camera thi giac, ve sinh ong kinh va hieu chuan
6. Thong rua kenh lam mat khuon bang nuoc sach, kiem tra bom nuoc lam mat

## 3. Tieu chi leo thang (Escalation Path)
* **Escalate sang To Bao tri khi:**
  - Da thuc hien day du cac buoc tren nhung loi B7 van con sau 30 phut.
  - Thiet bi hu hong can thay the phu tung chuyen dung (co trong kho phu tung).
  - Thoi gian xu ly thu cong vuot qua **45 phut** — bao cao ngay To truong ca san xuat de ghi chep downtime OEE.

## 4. Phu tung can thiet
| Phu tung | Ma vat tu | So luong ton kho |
|----------|-----------|-----------------|
| Bo cam bien thay the | SP-B7-001 | 5 |
| Linh kien co khi thay the | SP-B7-002 | 3 |
| Module dien tu du phong | SP-B7-003 | 2 |

## 5. Bien phap phong ngua
- Kiem tra va bao tri du phong dinh ky hang tuan theo checklist PM cua may.
- Ghi chep nhat ky van hanh cho moi lan xuat hien ma loi B7.
- Dinh ky huan luyen lai SOP nay cho cong nhan van hanh moi 6 thang.
