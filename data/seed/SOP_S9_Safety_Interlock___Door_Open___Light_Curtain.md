---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "SOP_S9_Safety_Interlock___Door_Open___Light_Curtain.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, safety-system, safety, sop]
doc_type: SOP
fault_code: S9
machine_id: PRESS_01
category: SAFETY
equipment_type: SAFETY_SYSTEM
severity: CRITICAL
avg_downtime_min: 15.0
last_updated: 2026-05-15
---

# SOP Xu ly su co S9 - Safety Interlock / Door Open / Light Curtain

## 1. Mo ta su co
Ma loi S9 (Safety Interlock / Door Open / Light Curtain) thuoc nhom **SAFETY** — **CRITICAL**.
May bi anh huong thuong gap: PRESS_01 va cac may cung loai SAFETY_SYSTEM.

**Cac tin hieu kich hoat (triggers):**
- `Safety_Door_Interlock`
- `Light_Curtain_Tripped`
- `E_Stop_Button_Pressed`
- `Guard_Lock_Timeout`
- `Safety_Relay_Fault`

## 2. Quy trinh xu ly tieu chuan (Standard Operations)
Khi may bao loi S9, nhan vien van hanh thuc hien theo trinh tu:

1. Dong chat cua an toan khoang bao ve, reset loi tren HMI
2. Rut tay hoac cong cu khoi vung quet tia hong ngoai an toan
3. Kiem tra va xoay num reset nut dung khan cap E-Stop
4. Thay the cum cong tac interlock co dien Schmersal
5. Thay the ro-le an toan Pilz PNOZ moi, kiem tra day dau noi

## 3. Tieu chi leo thang (Escalation Path)
* **Escalate sang To Bao tri khi:**
  - Da thuc hien day du cac buoc tren nhung loi S9 van con sau 15 phut.
  - Thiet bi hu hong can thay the phu tung chuyen dung (co trong kho phu tung).
  - Thoi gian xu ly thu cong vuot qua **20 phut** — bao cao ngay To truong ca san xuat de ghi chep downtime OEE.

## 4. Phu tung can thiet
| Phu tung | Ma vat tu | So luong ton kho |
|----------|-----------|-----------------|
| Bo cam bien thay the | SP-S9-001 | 5 |
| Linh kien co khi thay the | SP-S9-002 | 3 |
| Module dien tu du phong | SP-S9-003 | 2 |

## 5. Bien phap phong ngua
- Kiem tra va bao tri du phong dinh ky hang tuan theo checklist PM cua may.
- Ghi chep nhat ky van hanh cho moi lan xuat hien ma loi S9.
- Dinh ky huan luyen lai SOP nay cho cong nhan van hanh moi 6 thang.
