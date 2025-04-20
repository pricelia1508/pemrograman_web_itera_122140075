Berikut adalah isi `README.md` hasil final yang sudah diperbarui dan siap digunakan:

---

```markdown
# Aplikasi Manajemen Buku Pribadi

Aplikasi ini dibuat untuk membantu pengguna mencatat dan mengelola koleksi buku pribadi. Pengguna dapat menambahkan informasi buku yang dimiliki, sedang dibaca, atau ingin dibeli. Aplikasi dibangun menggunakan React dengan pendekatan komponen fungsional, React Hooks, serta Context API untuk manajemen state global.

## ✨ Fitur Utama

- Menambahkan buku baru (judul, penulis, tahun, status)
- Mengedit dan menghapus buku dari daftar
- Filter berdasarkan status: Milik, Sedang Dibaca, Ingin Dibeli
- Pencarian berdasarkan judul atau penulis
- Statistik jumlah buku berdasarkan status
- Navigasi antar halaman (Home, Statistik, Tentang)
- Penyimpanan data di localStorage

## ⚙️ Teknologi yang Digunakan

- React (Functional Components + Hooks)
- Context API
- React Router v6
- Custom Hooks: `useLocalStorage`, `useBookStats`
- PropTypes untuk type checking
- React Testing Library untuk unit testing

## 🧩 Struktur Folder
```

src/
├── components/
│ ├── Alert/
│ ├── BookFilter/
│ ├── BookForm/
│ ├── BookItem/
│ ├── Header/
│ └── Navbar/
├── context/
│ ├── AlertContext.js
│ └── BookContext.js
├── hooks/
│ ├── useBookStats.js
│ └── useLocalStorage.js
├── pages/
│ ├── About/
│ ├── Home/
│ └── Stats/
├── App.js
├── App.css
├── index.js
└── setupTests.js

````

## 🚀 Cara Menjalankan Aplikasi

1. Clone repository:
   ```bash
   git clone https://github.com/username/pemrograman_web_itera_122140075.git
   cd pemrograman_web_itera_122140075
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Jalankan aplikasi di local:

   ```bash
   npm start
   ```

4. Jalankan pengujian unit:
   ```bash
   npm test
   ```

## 🧪 Testing

Aplikasi telah diuji dengan React Testing Library. Terdapat minimal 5 file pengujian unit:

- `BookForm.test.jsx`
- `BookItem.test.jsx`
- `BookFilter.test.jsx`
- `Home.test.jsx`
- `Stats.test.jsx`

📸 Screenshot hasil testing disimpan dalam folder `/screenshots`.

## ✅ Kesesuaian dengan Kriteria Tugas

| Kriteria                        | Status |
| ------------------------------- | ------ |
| Menambah, mengedit, hapus buku  | ✅     |
| Filter dan pencarian buku       | ✅     |
| Navigasi multi-halaman (Router) | ✅     |
| useState dan useEffect          | ✅     |
| Context API                     | ✅     |
| 3+ Komponen Reusable            | ✅     |
| Custom Hooks (2)                | ✅     |
| PropTypes                       | ✅     |
| localStorage                    | ✅     |
| 5+ Unit Testing                 | ✅     |
| Error handling form input       | ✅     |

## 👩‍💻 Tentang Pengembang

Dikembangkan oleh: **Pricelia Putri (122140075)**  
Untuk memenuhi Tugas Praktikum **Pemrograman Web** di ITERA

---
