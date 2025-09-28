# ✅ To-do List App

แอปจัดการงาน (To-do List) ที่สร้างด้วย **Vue 3 + TypeScript + Pinia + TailwindCSS**  
รองรับการเพิ่ม / แก้ไข / ลบ / จัดหมวดหมู่ และแยกแท็บระหว่างงานที่ยังไม่เสร็จ (My Tasks) และงานที่ทำเสร็จแล้ว (Completed)

---

## 🚀 Features

- ✨ **Add Task** → เพิ่มงานใหม่พร้อม **title, description, due date, category**  
- 📝 **Edit Task** → แก้ไขรายละเอียดงานได้ผ่าน modal  
- ✅ **Mark Complete** → กด checkbox เพื่อทำเครื่องหมายว่างานเสร็จแล้ว  
- 📂 **Category with Emoji** → หมวดหมู่มีสี + emoji น่ารัก ๆ  
  - 💼 Work  
  - 🏡 Personal  
  - ⏰ Urgent  
- ⏳ **Overdue Highlight** → งานที่เลยกำหนดจะถูกแสดงด้วยสีแดง  
- 🗑️ **Delete Task** → กดลบงานเดี่ยว ๆ (มี alert ยืนยันก่อนลบ)  
- 🗑️ **Delete Completed** → ลบงานที่เสร็จทั้งหมดพร้อม alert ยืนยัน  
- 💾 **LocalStorage Support** → รีเฟรชแล้วยังเก็บงานไว้ได้  

---

## 🛠️ Tech Stack

- [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/)  
- [Pinia](https://pinia.vuejs.org/) → จัดการ state ของ tasks  
- [TailwindCSS](https://tailwindcss.com/) → UI ที่สวยและ responsive  
- LocalStorage → เก็บ tasks แบบ offline  

---

## 📦 Installation

```bash
# ติดตั้ง dependency
npm install

# รันเซิร์ฟเวอร์ dev
npm run dev

# build สำหรับ production
npm run build
