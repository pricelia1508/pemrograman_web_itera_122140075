function sapaNama(nama) {
    return `Halo, ${nama}! Selamat belajar JavaScript!`;
}

// Event handler untuk tombol sapa
const sapaButton = document.getElementById("sapa-button");
if (sapaButton) {
    sapaButton.addEventListener("click", function() {
        const namaInput = document.getElementById("nama-input");
        const sapaOutput = document.getElementById("sapa-output");
        if (!namaInput || !sapaOutput) return;

        const nama = namaInput.value;
        if (nama.trim() === "") {
            sapaOutput.innerHTML = 
                `<p class="text-red-500">Silakan masukkan nama Anda terlebih dahulu!</p>`;
        } else {
            const pesan = sapaNama(nama);
            sapaOutput.innerHTML = 
                `<p class="text-green-500">${pesan}</p>`;
        }
    });
}

// Fungsi untuk kalkulator
function hitungKalkulator(angka1, angka2, operasi) {
    let hasil = 0;
    switch (operasi) {
        case "tambah":
            hasil = angka1 + angka2;
            break;
        case "kurang":
            hasil = angka1 - angka2;
            break;
        case "kali":
            hasil = angka1 * angka2;
            break;
        case "bagi":
            if (angka2 === 0) {
                return "Error: Pembagian dengan nol tidak diperbolehkan";
            }
            hasil = angka1 / angka2;
            break;
        case "pangkat":
            hasil = Math.pow(angka1, angka2);
            break;
        case "akar":
            if (angka1 < 0) {
                return "Error: Akar kuadrat dari bilangan negatif tidak valid";
            }
            hasil = Math.sqrt(angka1);
            break;
        case "modulus":
            hasil = angka1 % angka2;
            break;
        default:
            return "Operasi tidak valid";
    }
    return hasil;
}

// Event handler untuk tombol operasi matematika
const tombolOperasi = [
    { id: "btn-tambah", operasi: "tambah", simbol: "+" },
    { id: "btn-kurang", operasi: "kurang", simbol: "-" },
    { id: "btn-kali", operasi: "kali", simbol: "×" },
    { id: "btn-bagi", operasi: "bagi", simbol: "÷" },
    { id: "btn-pangkat", operasi: "pangkat", simbol: "^" },
    { id: "btn-akar", operasi: "akar", simbol: "√" },
    { id: "btn-modulus", operasi: "modulus", simbol: "%" },
];

tombolOperasi.forEach(({ id, operasi, simbol }) => {
    const tombol = document.getElementById(id);
    if (tombol) {
        tombol.addEventListener("click", function() {
            const angka1Input = document.getElementById("angka1");
            const angka2Input = document.getElementById("angka2");
            const hasilKalkulator = document.getElementById("hasil-kalkulator");
            if (!angka1Input || !hasilKalkulator) {
                console.error("Elemen input atau hasil tidak ditemukan.");
                return;
            }

            const angka1 = parseFloat(angka1Input.value);
            const angka2 = angka2Input ? parseFloat(angka2Input.value) : null;

            if (isNaN(angka1) || (operasi !== "akar" && isNaN(angka2))) {
                hasilKalkulator.innerHTML = 
                    `<p class="text-red-500">Masukkan angka yang valid!</p>`;
            } else {
                const hasil = hitungKalkulator(angka1, angka2, operasi);
                
                let output = "";
                if (operasi === "akar") {
                    output = `<p>Hasil: √${angka1} = ${hasil}</p>`;
                } else if (operasi === "modulus") {
                    output = `<p>Hasil: ${angka1} % ${angka2} = ${hasil}</p>`;
                } else if (operasi === "pangkat") {
                    output = `<p>Hasil: ${angka1} ^ ${angka2} = ${hasil}</p>`;
                } else {
                    output = `<p>Hasil: ${angka1} ${simbol} ${angka2} = ${hasil}</p>`;
                }

                hasilKalkulator.innerHTML = output;
            }
        });
    }
});
