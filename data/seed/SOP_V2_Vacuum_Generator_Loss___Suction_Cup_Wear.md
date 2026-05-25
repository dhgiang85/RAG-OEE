---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "SOP_V2_Vacuum_Generator_Loss___Suction_Cup_Wear.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, vacuum-system, pneumatic, sop]
doc_type: SOP
fault_code: V2
machine_id: PACKER_04
category: PNEUMATIC
equipment_type: VACUUM_SYSTEM
severity: MEDIUM
avg_downtime_min: 15.0
last_updated: 2026-05-15
---

# SOP Xu ly su co V2 - Vacuum Generator Loss / Suction Cup Wear

## 1. Mo ta su co
Ma loi V2 (Vacuum Generator Loss / Suction Cup Wear) thuoc nhom **PNEUMATIC** — **MEDIUM**.
May bi anh huong thuong gap: PACKER_04 va cac may cung loai VACUUM_SYSTEM.

**Cac tin hieu kich hoat (triggers):**
- `Vacuum_Low_Pressure`
- `Suction_Cup_Wear`
- `Ejector_Nozzle_Blocked`
- `Vacuum_Switch_Fault`
- `Tube_Leakage`

## 2. Quy trinh xu ly tieu chuan (Standard Operations)
Khi may bao loi V2, nhan vien van hanh thuc hien theo trinh tu:

1. Ve sinh coc loc xa bui va dieu chinh ap suat cap nguon
2. Thay the cum 4 num giac hut chan khong silicon chiu dau phi 25
3. Dung khi nen ap luc cao say thoi thong Ejector venturi
4. Thay the doan ong mem PU phi 6 cap chan khong
5. Hieu chuan lai cam bien chan khong SMC ve nguong -0.55 bar chinh xac

## 3. Tieu chi leo thang (Escalation Path)
* **Escalate sang To Bao tri khi:**
  - Da thuc hien day du cac buoc tren nhung loi V2 van con sau 30 phut.
  - Thiet bi hu hong can thay the phu tung chuyen dung (co trong kho phu tung).
  - Thoi gian xu ly thu cong vuot qua **45 phut** — bao cao ngay To truong ca san xuat de ghi chep downtime OEE.

## 4. Phu tung can thiet
| Phu tung | Ma vat tu | So luong ton kho |
|----------|-----------|-----------------|
| Bo cam bien thay the | SP-V2-001 | 5 |
| Linh kien co khi thay the | SP-V2-002 | 3 |
| Module dien tu du phong | SP-V2-003 | 2 |

## 5. Bien phap phong ngua
- Kiem tra va bao tri du phong dinh ky hang tuan theo checklist PM cua may.
- Ghi chep nhat ky van hanh cho moi lan xuat hien ma loi V2.
- Dinh ky huan luyen lai SOP nay cho cong nhan van hanh moi 6 thang.
