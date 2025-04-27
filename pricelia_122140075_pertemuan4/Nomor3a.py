# Modul operasi matematika

PI = 3.14159

# Fungsi Geometri
def luas_persegi(sisi):
    return sisi * sisi

def keliling_persegi(sisi):
    return 4 * sisi

def luas_persegi_panjang(panjang, lebar):
    return panjang * lebar

def keliling_persegi_panjang(panjang, lebar):
    return 2 * (panjang + lebar)

def luas_lingkaran(jari_jari):
    return PI * jari_jari * jari_jari

def keliling_lingkaran(jari_jari):
    return 2 * PI * jari_jari

# Fungsi Konversi Suhu
def celsius_ke_fahrenheit(c):
    return (c * 9/5) + 32

def celsius_ke_kelvin(c):
    return c + 273.15