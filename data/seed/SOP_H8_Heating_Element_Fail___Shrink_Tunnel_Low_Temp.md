---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "SOP_H8_Heating_Element_Fail___Shrink_Tunnel_Low_Temp.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, shrink-tunnel, electrical, sop]
doc_type: SOP
fault_code: H8
machine_id: SHRINK_05
category: ELECTRICAL
equipment_type: SHRINK_TUNNEL
severity: MEDIUM
avg_downtime_min: 15.0
last_updated: 2026-05-15
---

# SOP Xu ly su co H8 - Heating Element Fail / Shrink Tunnel Low Temp

## 1. Mo ta su co
Ma loi H8 (Heating Element Fail / Shrink Tunnel Low Temp) thuoc nhom **ELECTRICAL** — **MEDIUM**.
May bi anh huong thuong gap: SHRINK_05 va cac may cung loai SHRINK_TUNNEL.

**Cac tin hieu kich hoat (triggers):**
- `Temp_Low_Warning`
- `Heater_Element_Open`
- `Thermocouple_Fault`
- `Airflow_Blocked`
- `SSR_Short_Circuit`

## 2. Quy trinh xu ly tieu chuan (Standard Operations)
Khi may bao loi H8, nhan vien van hanh thuc hien theo trinh tu:

1. Cho he thong gia nhiet hoi nhiet do dat 165 do C
2. Thay the soi say dien tro gia nhiet dang lo xo 3kW moi
3. Thay dau do cap nhiet dien chong an mon Type K moi
4. Thay the dong co quat thoi khi doi luu nhiet do cao
5. Thay the ro-le ban dan SSR 40A moi, kiem tra tin hieu PWM dieu khien

## 3. Tieu chi leo thang (Escalation Path)
* **Escalate sang To Bao tri khi:**
  - Da thuc hien day du cac buoc tren nhung loi H8 van con sau 30 phut.
  - Thiet bi hu hong can thay the phu tung chuyen dung (co trong kho phu tung).
  - Thoi gian xu ly thu cong vuot qua **45 phut** — bao cao ngay To truong ca san xuat de ghi chep downtime OEE.

## 4. Phu tung can thiet
| Phu tung | Ma vat tu | So luong ton kho |
|----------|-----------|-----------------|
| Bo cam bien thay the | SP-H8-001 | 5 |
| Linh kien co khi thay the | SP-H8-002 | 3 |
| Module dien tu du phong | SP-H8-003 | 2 |

## 5. Bien phap phong ngua
- Kiem tra va bao tri du phong dinh ky hang tuan theo checklist PM cua may.
- Ghi chep nhat ky van hanh cho moi lan xuat hien ma loi H8.
- Dinh ky huan luyen lai SOP nay cho cong nhan van hanh moi 6 thang.
