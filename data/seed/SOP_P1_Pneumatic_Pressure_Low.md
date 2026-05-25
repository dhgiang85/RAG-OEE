---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "SOP_P1_Pneumatic_Pressure_Low.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, pneumatic-system, utility, sop]
doc_type: SOP
fault_code: P1
machine_id: PRESS_01
category: UTILITY
equipment_type: PNEUMATIC_SYSTEM
severity: HIGH
avg_downtime_min: 15.0
last_updated: 2026-05-15
---

# SOP Xu ly su co P1 - Pneumatic Pressure Low

## 1. Mo ta su co
Ma loi P1 (Pneumatic Pressure Low) thuoc nhom **UTILITY** — **HIGH**.
May bi anh huong thuong gap: PRESS_01 va cac may cung loai PNEUMATIC_SYSTEM.

**Cac tin hieu kich hoat (triggers):**
- `Main_Air_Drop`
- `Cylinder_Sensor_Timeout`
- `Air_Filter_Clogged`
- `Solenoid_Valve_Leak`
- `Compressor_Trip`
- `Air_Dryer_Fault`

## 2. Quy trinh xu ly tieu chuan (Standard Operations)
Khi may bao loi P1, nhan vien van hanh thuc hien theo trinh tu:

1. Kiem tra he thong may nen khi trung tam nha may, tang ap ap suat
2. Dieu chinh lai van tiet luu (flow control) dau vao xi-lanh
3. Xa nuoc dong, thay ruot loc khi nen 0.01 micron moi
4. Thay the seal cao su moi hoac thay cum van dien tu Airtac
5. Reset ro-le nhiet may nen khi, doi dong co nguoi han va khoi dong lai
6. Xa nuoc ngung o day loc, kiem tra che do Auto Drain cua Air Dryer

## 3. Tieu chi leo thang (Escalation Path)
* **Escalate sang To Bao tri khi:**
  - Da thuc hien day du cac buoc tren nhung loi P1 van con sau 30 phut.
  - Thiet bi hu hong can thay the phu tung chuyen dung (co trong kho phu tung).
  - Thoi gian xu ly thu cong vuot qua **45 phut** — bao cao ngay To truong ca san xuat de ghi chep downtime OEE.

## 4. Phu tung can thiet
| Phu tung | Ma vat tu | So luong ton kho |
|----------|-----------|-----------------|
| Bo cam bien thay the | SP-P1-001 | 5 |
| Linh kien co khi thay the | SP-P1-002 | 3 |
| Module dien tu du phong | SP-P1-003 | 2 |

## 5. Bien phap phong ngua
- Kiem tra va bao tri du phong dinh ky hang tuan theo checklist PM cua may.
- Ghi chep nhat ky van hanh cho moi lan xuat hien ma loi P1.
- Dinh ky huan luyen lai SOP nay cho cong nhan van hanh moi 6 thang.
