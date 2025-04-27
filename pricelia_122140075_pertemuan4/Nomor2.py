# Program Pengelolaan Data Nilai Mahasiswa (Input User)

# Minta jumlah mahasiswa
jumlah_mahasiswa = int(input("Masukkan jumlah mahasiswa: "))

# List untuk menyimpan data
mahasiswa = []

# Input data mahasiswa
for i in range(jumlah_mahasiswa):
    print(f"\nData Mahasiswa ke-{i+1}")
    nama = input("Nama: ")
    nim = input("NIM: ")
    uts = float(input("Nilai UTS: "))
    uas = float(input("Nilai UAS: "))
    tugas = float(input("Nilai Tugas: "))

    mahasiswa.append({
        "nama": nama,
        "nim": nim,
        "nilai_uts": uts,
        "nilai_uas": uas,
        "nilai_tugas": tugas
    })

# Hitung nilai akhir dan grade
for mhs in mahasiswa:
    nilai_akhir = (0.3 * mhs['nilai_uts']) + (0.4 * mhs['nilai_uas']) + (0.3 * mhs['nilai_tugas'])
    mhs['nilai_akhir'] = nilai_akhir

    if nilai_akhir >= 80:
        mhs['grade'] = 'A'
    elif nilai_akhir >= 70:
        mhs['grade'] = 'B'
    elif nilai_akhir >= 60:
        mhs['grade'] = 'C'
    elif nilai_akhir >= 50:
        mhs['grade'] = 'D'
    else:
        mhs['grade'] = 'E'

# Tampilkan dalam tabel
print(f"\n{'Nama':<15} {'NIM':<10} {'UTS':<5} {'UAS':<5} {'Tugas':<7} {'Akhir':<7} {'Grade':<6}")
print("-" * 65)
for mhs in mahasiswa:
    print(f"{mhs['nama']:<15} {mhs['nim']:<10} {mhs['nilai_uts']:<5} {mhs['nilai_uas']:<5} {mhs['nilai_tugas']:<7} {mhs['nilai_akhir']:<7.2f} {mhs['grade']:<6}")

# Cari mahasiswa nilai tertinggi dan terendah
tertinggi = max(mahasiswa, key=lambda x: x['nilai_akhir'])
terendah = min(mahasiswa, key=lambda x: x['nilai_akhir'])

print("\nMahasiswa dengan nilai tertinggi:")
print(f"{tertinggi['nama']} (NIM: {tertinggi['nim']}) - Nilai Akhir: {tertinggi['nilai_akhir']:.2f}")

print("\nMahasiswa dengan nilai terendah:")
print(f"{terendah['nama']} (NIM: {terendah['nim']}) - Nilai Akhir: {terendah['nilai_akhir']:.2f}")
