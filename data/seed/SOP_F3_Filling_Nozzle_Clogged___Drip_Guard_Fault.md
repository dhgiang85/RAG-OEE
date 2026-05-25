---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "SOP_F3_Filling_Nozzle_Clogged___Drip_Guard_Fault.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, filling-machine, mechanical, sop]
doc_type: SOP
fault_code: F3
machine_id: FILLER_02
category: MECHANICAL
equipment_type: FILLING_MACHINE
severity: HIGH
avg_downtime_min: 15.0
last_updated: 2026-05-15
---

# SOP Xu ly su co F3 - Filling Nozzle Clogged / Drip Guard Fault

## 1. Mo ta su co
Ma loi F3 (Filling Nozzle Clogged / Drip Guard Fault) thuoc nhom **MECHANICAL** — **HIGH**.
May bi anh huong thuong gap: FILLER_02 va cac may cung loai FILLING_MACHINE.

**Cac tin hieu kich hoat (triggers):**
- `Nozzle_Blocked`
- `Drip_Tray_Not_Home`
- `Servo_Position_Error`
- `Nozzle_Leak`
- `Fill_Volume_Out_Of_Spec`
- `CIP_Cycle_Required`

## 2. Quy trinh xu ly tieu chuan (Standard Operations)
Khi may bao loi F3, nhan vien van hanh thuc hien theo trinh tu:

1. Chay quy trinh CIP (Clean-in-Place) suc rua voi bang nuoc am 70 do C
2. Ve sinh truc dan huong khay hung, thay lo xo keo hoi vi
3. Thuc hien reset homing truc servo nang ha voi qua HMI
4. Thay the bo gioang Teflon lam kin voi chiet rot moi
5. Hieu chuan lai he thong bom dinh luong va kiem tra dung sai the tich
6. Tang tan suat CIP len 2 lan/ca doi voi san pham do nho cao

## 3. Tieu chi leo thang (Escalation Path)
* **Escalate sang To Bao tri khi:**
  - Da thuc hien day du cac buoc tren nhung loi F3 van con sau 30 phut.
  - Thiet bi hu hong can thay the phu tung chuyen dung (co trong kho phu tung).
  - Thoi gian xu ly thu cong vuot qua **45 phut** — bao cao ngay To truong ca san xuat de ghi chep downtime OEE.

## 4. Phu tung can thiet
| Phu tung | Ma vat tu | So luong ton kho |
|----------|-----------|-----------------|
| Bo cam bien thay the | SP-F3-001 | 5 |
| Linh kien co khi thay the | SP-F3-002 | 3 |
| Module dien tu du phong | SP-F3-003 | 2 |

## 5. Bien phap phong ngua
- Kiem tra va bao tri du phong dinh ky hang tuan theo checklist PM cua may.
- Ghi chep nhat ky van hanh cho moi lan xuat hien ma loi F3.
- Dinh ky huan luyen lai SOP nay cho cong nhan van hanh moi 6 thang.
