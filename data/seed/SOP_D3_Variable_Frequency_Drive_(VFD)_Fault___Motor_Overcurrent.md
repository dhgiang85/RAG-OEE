---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "SOP_D3_Variable_Frequency_Drive_(VFD)_Fault___Motor_Overcurrent.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, motor-drive, electrical, sop]
doc_type: SOP
fault_code: D3
machine_id: FILLER_02
category: ELECTRICAL
equipment_type: MOTOR_DRIVE
severity: HIGH
avg_downtime_min: 15.0
last_updated: 2026-05-15
---

# SOP Xu ly su co D3 - Variable Frequency Drive (VFD) Fault / Motor Overcurrent

## 1. Mo ta su co
Ma loi D3 (Variable Frequency Drive (VFD) Fault / Motor Overcurrent) thuoc nhom **ELECTRICAL** — **HIGH**.
May bi anh huong thuong gap: FILLER_02 va cac may cung loai MOTOR_DRIVE.

**Cac tin hieu kich hoat (triggers):**
- `VFD_Overcurrent`
- `Motor_Phase_Loss`
- `VFD_DC_Bus_Overvoltage`
- `IGBT_Overtemp`
- `VFD_Ground_Fault`
- `Motor_Stall_Detected`

## 2. Quy trinh xu ly tieu chuan (Standard Operations)
Khi may bao loi D3, nhan vien van hanh thuc hien theo trinh tu:

1. Reset bien tan, kiem tra co cau truyen dong co bi ket hay khong
2. Do dong dien 3 pha bang ampe kim, kiem tra can bang pha
3. Tat may, cho DC bus xa het, kiem tra dien ap luoi on dinh
4. Ve sinh canh tan nhiet va thay quat giai nhiet VFD moi
5. Do dien tro cach dien cuon day dong co, thay the neu cham mat
6. Kiem tra va giai phong phan co khi gay qua tai cho dong co

## 3. Tieu chi leo thang (Escalation Path)
* **Escalate sang To Bao tri khi:**
  - Da thuc hien day du cac buoc tren nhung loi D3 van con sau 30 phut.
  - Thiet bi hu hong can thay the phu tung chuyen dung (co trong kho phu tung).
  - Thoi gian xu ly thu cong vuot qua **45 phut** — bao cao ngay To truong ca san xuat de ghi chep downtime OEE.

## 4. Phu tung can thiet
| Phu tung | Ma vat tu | So luong ton kho |
|----------|-----------|-----------------|
| Bo cam bien thay the | SP-D3-001 | 5 |
| Linh kien co khi thay the | SP-D3-002 | 3 |
| Module dien tu du phong | SP-D3-003 | 2 |

## 5. Bien phap phong ngua
- Kiem tra va bao tri du phong dinh ky hang tuan theo checklist PM cua may.
- Ghi chep nhat ky van hanh cho moi lan xuat hien ma loi D3.
- Dinh ky huan luyen lai SOP nay cho cong nhan van hanh moi 6 thang.
