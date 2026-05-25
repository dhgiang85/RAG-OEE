---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "SOP_M1_Carton_Magazine_Jam___Feed_Error.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, cartoning-machine, mechanical, sop]
doc_type: SOP
fault_code: M1
machine_id: CARTON_01
category: MECHANICAL
equipment_type: CARTONING_MACHINE
severity: MEDIUM
avg_downtime_min: 15.0
last_updated: 2026-05-15
---

# SOP Xu ly su co M1 - Carton Magazine Jam / Feed Error

## 1. Mo ta su co
Ma loi M1 (Carton Magazine Jam / Feed Error) thuoc nhom **MECHANICAL** — **MEDIUM**.
May bi anh huong thuong gap: CARTON_01 va cac may cung loai CARTONING_MACHINE.

**Cac tin hieu kich hoat (triggers):**
- `Carton_Magazine_Jam`
- `Sensor_Feed_Blocked`
- `Vacuum_Suction_Loss`
- `system_auto_resolve=True`
- `Carton_Feed_Double_Pick`
- `Magazine_Empty_Warning`

## 2. Quy trinh xu ly tieu chuan (Standard Operations)
Khi may bao loi M1, nhan vien van hanh thuc hien theo trinh tu:

1. Loai bo cac vo hop bi am, say kho khoang chua va nap lo vo hop moi
2. Chinh lai luc cang bang tai va can le banh rang dan huong
3. Ve sinh giac hut bang con chuyen dung, thay the 2 num cao su bi mon
4. Lau sach mat doc cam bien quang dien bang khan mem
5. Kiem tra va loai bo lo vo carton bi sai lech kich thuoc khoi magazine
6. Can chinh lai vi tri lap dat cam bien quang va kiem tra do rung may

## 3. Tieu chi leo thang (Escalation Path)
* **Escalate sang To Bao tri khi:**
  - Da thuc hien day du cac buoc tren nhung loi M1 van con sau 30 phut.
  - Thiet bi hu hong can thay the phu tung chuyen dung (co trong kho phu tung).
  - Thoi gian xu ly thu cong vuot qua **45 phut** — bao cao ngay To truong ca san xuat de ghi chep downtime OEE.

## 4. Phu tung can thiet
| Phu tung | Ma vat tu | So luong ton kho |
|----------|-----------|-----------------|
| Bo cam bien thay the | SP-M1-001 | 5 |
| Linh kien co khi thay the | SP-M1-002 | 3 |
| Module dien tu du phong | SP-M1-003 | 2 |

## 5. Bien phap phong ngua
- Kiem tra va bao tri du phong dinh ky hang tuan theo checklist PM cua may.
- Ghi chep nhat ky van hanh cho moi lan xuat hien ma loi M1.
- Dinh ky huan luyen lai SOP nay cho cong nhan van hanh moi 6 thang.
