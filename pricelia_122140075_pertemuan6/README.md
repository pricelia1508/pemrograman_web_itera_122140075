# Pengelolaan Mata Kuliah

## Daftar API Tersedia

### Kelola Data Mata Kuliah (Course)

- **GET** `http://localhost:6543/api/matakuliah` – Mengambil seluruh data mata kuliah
- **GET** `http://localhost:6543/api/matakuliah/{id}` – Melihat detail satu mata kuliah berdasarkan ID
- **POST** `http://localhost:6543/api/matakuliah` – Menambahkan data mata kuliah baru
- **PUT** `http://localhost:6543/api/matakuliah/{id}` – Memperbarui data mata kuliah berdasarkan ID
- **DELETE** `http://localhost:6543/api/matakuliah/{id}` – Menghapus data mata kuliah berdasarkan ID

## Cara Memulai

Ikuti langkah-langkah berikut untuk menjalankan proyek Pyramid.

### 1. Masuk ke direktori proyek yang telah dibuat

```bash
cd matakuliah
```

### 2. Buat lingkungan virtual Python

```bash
python3 -m venv venv
venv/scripts/activate
```

### 3. Perbarui alat pengemasan (packaging tools)

```bash
pip install --upgrade pip setuptools
```

### 4. Instal proyek dalam mode editable beserta dependensi testing-nya

```bash
pip install -e ".[testing]"
```

### 5. Siapkan dan perbarui struktur database menggunakan Alembic

```bash
alembic -c development.ini revision --autogenerate -m "init"
alembic -c development.ini upgrade head
```

### 6. Isi database dengan data awal menggunakan skrip inisialisasi

```bash
initialize_manajemen_matakuliah_db development.ini
```

### 7. Jalankan aplikasi

```bash
pserve development.ini
```
