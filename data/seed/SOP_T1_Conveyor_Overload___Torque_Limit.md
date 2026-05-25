---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "SOP_T1_Conveyor_Overload___Torque_Limit.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, conveyor-system, mechanical, sop]
doc_type: SOP
fault_code: T1
machine_id: CARTON_01
category: MECHANICAL
equipment_type: CONVEYOR_SYSTEM
severity: MEDIUM
avg_downtime_min: 15.0
last_updated: 2026-05-15
---

# SOP Xu ly su co T1 - Conveyor Overload / Torque Limit

## 1. Mo ta su co
Ma loi T1 (Conveyor Overload / Torque Limit) thuoc nhom **MECHANICAL** — **MEDIUM**.
May bi anh huong thuong gap: CARTON_01 va cac may cung loai CONVEYOR_SYSTEM.

**Cac tin hieu kich hoat (triggers):**
- `Conveyor_Overload`
- `Motor_Torque_Limit`
- `Bottle_Jam_Conveyor`
- `Chain_Tension_Low`
- `Bearing_Overheat`

## 2. Quy trinh xu ly tieu chuan (Standard Operations)
Khi may bao loi T1, nhan vien van hanh thuc hien theo trinh tu:

1. Thao go cac chai ket, phan bo lai dong chay va khoang cach chai
2. Doi dong co nguoi, nhan reset ro le nhiet bao ve trong tu dien
3. Bom mo chiu nhiet boi tron xich va o bi dan huong
4. Siet lai oc khoa puly dinh vi hoac thay the bo banh rang hop so
5. Thay the vong bi moi va can chinh lai do cang xich truyen dong

## 3. Tieu chi leo thang (Escalation Path)
* **Escalate sang To Bao tri khi:**
  - Da thuc hien day du cac buoc tren nhung loi T1 van con sau 30 phut.
  - Thiet bi hu hong can thay the phu tung chuyen dung (co trong kho phu tung).
  - Thoi gian xu ly thu cong vuot qua **45 phut** — bao cao ngay To truong ca san xuat de ghi chep downtime OEE.

## 4. Phu tung can thiet
| Phu tung | Ma vat tu | So luong ton kho |
|----------|-----------|-----------------|
| Bo cam bien thay the | SP-T1-001 | 5 |
| Linh kien co khi thay the | SP-T1-002 | 3 |
| Module dien tu du phong | SP-T1-003 | 2 |

## 5. Bien phap phong ngua
- Kiem tra va bao tri du phong dinh ky hang tuan theo checklist PM cua may.
- Ghi chep nhat ky van hanh cho moi lan xuat hien ma loi T1.
- Dinh ky huan luyen lai SOP nay cho cong nhan van hanh moi 6 thang.
