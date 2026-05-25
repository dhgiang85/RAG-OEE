---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "SOP_E2_PLC_Communication___Buffer_Overflow.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, control-system, electrical, sop]
doc_type: SOP
fault_code: E2
machine_id: FILLER_02
category: ELECTRICAL
equipment_type: CONTROL_SYSTEM
severity: CRITICAL
avg_downtime_min: 15.0
last_updated: 2026-05-15
---

# SOP Xu ly su co E2 - PLC Communication / Buffer Overflow

## 1. Mo ta su co
Ma loi E2 (PLC Communication / Buffer Overflow) thuoc nhom **ELECTRICAL** — **CRITICAL**.
May bi anh huong thuong gap: FILLER_02 va cac may cung loai CONTROL_SYSTEM.

**Cac tin hieu kich hoat (triggers):**
- `PLC_Comm_Error`
- `Level_Sensor_Fault`
- `CPU_Stop_Mode`
- `Modbus_TCP_Timeout`
- `Profinet_IO_Device_Fault`
- `Watchdog_Reset`

## 2. Quy trinh xu ly tieu chuan (Standard Operations)
Khi may bao loi E2, nhan vien van hanh thuc hien theo trinh tu:

1. Khoi dong lai module mang, kiem tra lai cau hinh phan cung trong TIA Portal
2. Goi bao tri ve sinh dau do va siet chat lai jack cam tin hieu
3. Lap dat bo sung vong ferrite chong nhieu tren cap truyen thong
4. Bam lai dau mang RJ45 moi va do kiem tra bang thong truyen dan
5. Thay the bo nguon SMPS 24VDC 5A moi, do lai dien ap ngo ra
6. Thuc hien firmware update PLC qua TIA Portal va backup cau hinh

## 3. Tieu chi leo thang (Escalation Path)
* **Escalate sang To Bao tri khi:**
  - Da thuc hien day du cac buoc tren nhung loi E2 van con sau 15 phut.
  - Thiet bi hu hong can thay the phu tung chuyen dung (co trong kho phu tung).
  - Thoi gian xu ly thu cong vuot qua **20 phut** — bao cao ngay To truong ca san xuat de ghi chep downtime OEE.

## 4. Phu tung can thiet
| Phu tung | Ma vat tu | So luong ton kho |
|----------|-----------|-----------------|
| Bo cam bien thay the | SP-E2-001 | 5 |
| Linh kien co khi thay the | SP-E2-002 | 3 |
| Module dien tu du phong | SP-E2-003 | 2 |

## 5. Bien phap phong ngua
- Kiem tra va bao tri du phong dinh ky hang tuan theo checklist PM cua may.
- Ghi chep nhat ky van hanh cho moi lan xuat hien ma loi E2.
- Dinh ky huan luyen lai SOP nay cho cong nhan van hanh moi 6 thang.
