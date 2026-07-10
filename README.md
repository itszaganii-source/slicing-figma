# 🚀 Modern Digital Agency Landing Page (Slicing Figma)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

Sebuah projek portofolio premium berupa **Landing Page Agensi Digital / Tech Startup** yang di-slicing secara presisi dari desain Figma menjadi kode web interaktif. Projek ini dibangun menggunakan **React.js (Vite)** dan **Tailwind CSS** dengan menerapkan arsitektur komponen yang bersih (*clean code*).

Projek ini menunjukkan kemampuan dalam mentransformasikan desain UI/UX yang kompleks menjadi aplikasi web yang fungsional, interaktif, dan fully-responsive tanpa menggunakan library visual pihak ketiga yang berat.

---

## ✨ Fitur Utama

*   **📱 Fully Responsive Design:** Tampilan web otomatis beradaptasi dengan sempurna mulai dari layar monitor desktop besar, tablet, hingga layar *smartphone* (mobile).
*   **🌌 Modern Dark Mode Aesthetic:** Menggunakan skema warna gelap premium (`Slate-950` / `Zinc-950`) dikombinasikan dengan efek gradasi neon violet, cyan, dan emerald khas startup teknologi masa kini.
*   **🧩 Component-Driven Architecture:** Kode dipecah secara modular menjadi komponen-komponen mandiri (`Navbar`, `Hero`, `Services`, `About`, `Testimonials`, `Contact`, `Footer`) untuk kemudahan pemeliharaan (*maintainability*).
*   **🍔 Interactive Navigation:** Menu navigasi mobile (hamburger menu) yang dinamis menggunakan state management (`useState`) React.
*   **✨ Premium UI/UX Touches:** 
    *   Efek `backdrop-blur` transparan pada sticky navbar.
    *   Efek pendaran grafis (*glow/neon effect*) menggunakan Tailwind murni untuk pengganti gambar ilustrasi berat.
    *   Efek transisi *hover* yang halus pada setiap tombol aksi (CTA) dan kartu layanan.

---

## 🛠️ Tech Stack & Library

*   **Core Framework:** React.js (v18+)
*   **Build Tool:** Vite (Cepat & Ringan)
*   **Styling Engine:** Tailwind CSS (Utility-first CSS)
*   **Data Management:** Centralized array constants untuk menu navigasi dan konten kartu.

---

## 📁 Struktur Folder Projek

Arsitektur folder di dalam direktori `src/` disusun secara rapi dan profesional sesuai dengan standar industri pengembangan web:

```text
src/
├── components/      # Komponen-komponen UI yang modular dan terisolasi
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   ├── Testimonial.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── constants/       # Data statis / placeholder (array menu, data kartu layanan)
│   └── index.js
├── App.jsx          # Root Component tempat menggabungkan seluruh section halaman
├── index.css        # Konfigurasi dan import Tailwind CSS directive
└── main.jsx         # Entry point aplikasi React
```

---

## 🏃‍♂️ Cara Menjalankan Projek Secara Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan projek ini di komputer atau laptop Anda:

### 1. Kloning Repositori
```bash
git clone https://github.com/itszaganii-source/slicing-figma.git
```

### 2. Masuk ke Direktori Projek
```bash
cd slicing-figma
```

### 3. Instalasi Dependencies
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) di sistem Anda. Jalankan perintah berikut untuk mengunduh semua modul yang diperlukan:
```bash
npm install
```

### 4. Jalankan Server Development
Mulai server lokal untuk melihat dan menguji projek di browser secara real-time:
```bash
npm run dev
```
Setelah berhasil running, buka alamat `http://localhost:5173` pada browser kesayangan Anda.

---

## 🧑‍💻 Identitas Developer

*   **GitHub:** [@itszaganii-source](https://github.com/itszaganii-source)
*   **Email:** itszaganii@gmail.com

---
*Projek ini dibuat dengan dedikasi penuh untuk tujuan portofolio profesional dan pameran kapabilitas technical skill.*