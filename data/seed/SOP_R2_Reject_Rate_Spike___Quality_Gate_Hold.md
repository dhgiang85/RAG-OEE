---
schema_version: 1
tenant_id: "00000000-0000-0000-0000-000000000001"
source: other
origin:
  filename: "SOP_R2_Reject_Rate_Spike___Quality_Gate_Hold.md"
  uploaded_at: "2026-05-23T12:00:00Z"
  uploaded_by: "11111111-1111-1111-1111-111111111111"
  mime_type: "text/markdown"
tags: [oee, quality-inspection, quality, sop]
doc_type: SOP
fault_code: R2
machine_id: PRESS_01
category: QUALITY
equipment_type: QUALITY_INSPECTION
severity: MEDIUM
avg_downtime_min: 15.0
last_updated: 2026-05-15
---

# SOP Xu ly su co R2 - Reject Rate Spike / Quality Gate Hold

## 1. Mo ta su co
Ma loi R2 (Reject Rate Spike / Quality Gate Hold) thuoc nhom **QUALITY** — **MEDIUM**.
May bi anh huong thuong gap: PRESS_01 va cac may cung loai QUALITY_INSPECTION.

**Cac tin hieu kich hoat (triggers):**
- `Reject_Rate_High`
- `Quality_Gate_Active`
- `Vision_System_Fault`
- `Foreign_Particle_Detected`
- `Bottle_Ovality_Fault`

## 2. Quy trinh xu ly tieu chuan (Standard Operations)
Khi may bao loi R2, nhan vien van hanh thuc hien theo trinh tu:

1. Tam dung day chuyen, kiem tra chat luong nguyen lieu dau vao
2. Hieu chuan lai he thong camera vision, ve sinh den LED chieu sang
3. Kiem tra va don sach cac manh vo chai tren bang tai
4. Lay mau kiem tra do ovan cua chai, loai bo lo chai loi
5. Dieu chinh lai thoi gian phan ung cua xi-lanh pneumat reject

## 3. Tieu chi leo thang (Escalation Path)
* **Escalate sang To Bao tri khi:**
  - Da thuc hien day du cac buoc tren nhung loi R2 van con sau 30 phut.
  - Thiet bi hu hong can thay the phu tung chuyen dung (co trong kho phu tung).
  - Thoi gian xu ly thu cong vuot qua **45 phut** — bao cao ngay To truong ca san xuat de ghi chep downtime OEE.

## 4. Phu tung can thiet
| Phu tung | Ma vat tu | So luong ton kho |
|----------|-----------|-----------------|
| Bo cam bien thay the | SP-R2-001 | 5 |
| Linh kien co khi thay the | SP-R2-002 | 3 |
| Module dien tu du phong | SP-R2-003 | 2 |

## 5. Bien phap phong ngua
- Kiem tra va bao tri du phong dinh ky hang tuan theo checklist PM cua may.
- Ghi chep nhat ky van hanh cho moi lan xuat hien ma loi R2.
- Dinh ky huan luyen lai SOP nay cho cong nhan van hanh moi 6 thang.
