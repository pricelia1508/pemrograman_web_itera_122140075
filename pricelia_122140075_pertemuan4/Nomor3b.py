# main.py

import Nomor3a as mo
from Nomor3a import celsius_ke_fahrenheit, celsius_ke_kelvin

def tampilkan_menu():
    print("\n=== Kalkulator Matematika & Konversi ===")
    print("1. Luas Persegi")
    print("2. Keliling Persegi")
    print("3. Luas Persegi Panjang")
    print("4. Keliling Persegi Panjang")
    print("5. Luas Lingkaran")
    print("6. Keliling Lingkaran")
    print("7. Konversi Celsius ke Fahrenheit")
    print("8. Konversi Celsius ke Kelvin")
    print("9. Keluar")

while True:
    tampilkan_menu()
    pilihan = input("Pilih menu (1-9): ")

    if pilihan == '1':
        sisi = float(input("Masukkan sisi persegi: "))
        print(f"Luas Persegi: {mo.luas_persegi(sisi)}")
    elif pilihan == '2':
        sisi = float(input("Masukkan sisi persegi: "))
        print(f"Keliling Persegi: {mo.keliling_persegi(sisi)}")
    elif pilihan == '3':
        panjang = float(input("Masukkan panjang: "))
        lebar = float(input("Masukkan lebar: "))
        print(f"Luas Persegi Panjang: {mo.luas_persegi_panjang(panjang, lebar)}")
    elif pilihan == '4':
        panjang = float(input("Masukkan panjang: "))
        lebar = float(input("Masukkan lebar: "))
        print(f"Keliling Persegi Panjang: {mo.keliling_persegi_panjang(panjang, lebar)}")
    elif pilihan == '5':
        jari_jari = float(input("Masukkan jari-jari lingkaran: "))
        print(f"Luas Lingkaran: {mo.luas_lingkaran(jari_jari)}")
    elif pilihan == '6':
        jari_jari = float(input("Masukkan jari-jari lingkaran: "))
        print(f"Keliling Lingkaran: {mo.keliling_lingkaran(jari_jari)}")
    elif pilihan == '7':
        celsius = float(input("Masukkan suhu dalam Celsius: "))
        print(f"Hasil Konversi: {celsius_ke_fahrenheit(celsius)} °F")
    elif pilihan == '8':
        celsius = float(input("Masukkan suhu dalam Celsius: "))
        print(f"Hasil Konversi: {celsius_ke_kelvin(celsius)} K")
    elif pilihan == '9':
        print("Terima kasih sudah menggunakan kalkulator ini!")
        break
    else:
        print("Pilihan tidak valid, silakan pilih lagi.")
