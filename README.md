# ✅ To-do List App (Vue 3 + Pinia + Tailwind)

โปรเจกต์นี้เป็น To-do List Application ที่สร้างขึ้นด้วย **Vue 3 +
TypeScript + Pinia + TailwindCSS**\
ผู้ใช้สามารถเพิ่ม ลบ แก้ไข และจัดการงานได้อย่างง่ายดาย
พร้อมทั้งแยกงานที่ทำเสร็จแล้วออกมาในแท็บ `Completed`

------------------------------------------------------------------------


## 🚀 Features

- ✨ เพิ่มงานใหม่ พร้อม Title, Description, Due Date และ Category
- 📂 หมวดหมู่ (Category) พร้อมอิโมจิ 💼 Work / 🏡 Personal / ⏰ Urgent
- 🖊 แก้ไขงาน ได้ทั้ง Title, Description, Due Date, Category
- ✅ Mark Complete / Undo Complete
- 🗑 ลบงานทีละงาน (พร้อม Alert ยืนยันก่อนลบ)
- 🧹 ลบงานที่ทำเสร็จทั้งหมด
- 📌 Tab View
  - `My Tasks` : งานที่ยังไม่เสร็จ
  - `Completed` : งานที่เสร็จแล้ว
- 📅 จัดเรียงงานตาม Due Date (งานที่ใกล้ครบกำหนดมากที่สุดจะขึ้นก่อน)
- 💾 เก็บข้อมูลใน LocalStorage (เปิดแอปใหม่ งานยังอยู่)

------------------------------------------------------------------------

## 📂 Project Structure

    src/
     ├── assets/    
     ├── components/        
     ├── stores/            
     ├── App.vue            
     ├── main.ts           

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`)
-   [Pinia](https://pinia.vuejs.org/) (State Management)
-   [TypeScript](https://www.typescriptlang.org/)
-   [TailwindCSS](https://tailwindcss.com/) (UI Styling)
-   LocalStorage API (สำหรับเก็บ tasks)

------------------------------------------------------------------------

## ▶️ การใช้งาน

1.  ติดตั้ง dependencies

    ``` bash
    npm install
    ```

2.  รันเซิร์ฟเวอร์ Development

    ``` bash
    npm run dev
    ```

3.  เปิดเบราว์เซอร์ไปที่:\
    <http://localhost:5173>

------------------------------------------------------------------------

## 📸 UI Preview

-   **My Tasks Tab**: แสดงงานที่ยังไม่เสร็จ พร้อมปุ่ม Add Task\


-   **Completed Tab**: แสดงงานที่ทำเสร็จแล้ว พร้อมปุ่ม Delete All

------------------------------------------------------------------------

## ✨ Author

Project by *Achiraya Komatsu*
