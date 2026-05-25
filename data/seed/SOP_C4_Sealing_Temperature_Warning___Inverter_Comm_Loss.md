---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "SOP_C4_Sealing_Temperature_Warning___Inverter_Comm_Loss.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, shrink-tunnel, electrical, sop]
doc_type: SOP
fault_code: C4
machine_id: SHRINK_05
category: ELECTRICAL
equipment_type: SHRINK_TUNNEL
severity: HIGH
avg_downtime_min: 15.0
last_updated: 2026-05-15
---

# SOP Xu ly su co C4 - Sealing Temperature Warning / Inverter Comm Loss

## 1. Mo ta su co
Ma loi C4 (Sealing Temperature Warning / Inverter Comm Loss) thuoc nhom **ELECTRICAL** — **HIGH**.
May bi anh huong thuong gap: SHRINK_05 va cac may cung loai SHRINK_TUNNEL.

**Cac tin hieu kich hoat (triggers):**
- `Temp_Warning_High`
- `Inverter_Comm_Loss`
- `Heater_Wire_Broken`
- `PID_Autotune_Fail`
- `Thermal_Runaway_Detected`
- `Cooling_Fan_Stall`

## 2. Quy trinh xu ly tieu chuan (Standard Operations)
Khi may bao loi C4, nhan vien van hanh thuc hien theo trinh tu:

1. Cho bo PID tu dong dieu chinh giam dong kich thich
2. Nap lai thong so cau hinh bien tan tu ban sao luu gan nhat
3. Thay the day dien tro gia nhiet moi cong suat 2000W
4. Thay the ro-le ban dan (SSR) moi loai Autonics 40A
5. Thay the quat lam mat bien tan va ve sinh canh tan nhiet
6. Hieu chuan lai cam bien PT100 hoac thay the neu hong

## 3. Tieu chi leo thang (Escalation Path)
* **Escalate sang To Bao tri khi:**
  - Da thuc hien day du cac buoc tren nhung loi C4 van con sau 30 phut.
  - Thiet bi hu hong can thay the phu tung chuyen dung (co trong kho phu tung).
  - Thoi gian xu ly thu cong vuot qua **45 phut** — bao cao ngay To truong ca san xuat de ghi chep downtime OEE.

## 4. Phu tung can thiet
| Phu tung | Ma vat tu | So luong ton kho |
|----------|-----------|-----------------|
| Bo cam bien thay the | SP-C4-001 | 5 |
| Linh kien co khi thay the | SP-C4-002 | 3 |
| Module dien tu du phong | SP-C4-003 | 2 |

## 5. Bien phap phong ngua
- Kiem tra va bao tri du phong dinh ky hang tuan theo checklist PM cua may.
- Ghi chep nhat ky van hanh cho moi lan xuat hien ma loi C4.
- Dinh ky huan luyen lai SOP nay cho cong nhan van hanh moi 6 thang.
