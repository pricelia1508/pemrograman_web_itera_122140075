function validateForm() {
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const result = document.getElementById("result");

    let errors = [];

    if (nama.length <= 3) {
        errors.push("Nama harus lebih dari 3 karakter.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push("Email tidak valid.");
    }

    if (password.length < 8) {
        errors.push("Password harus minimal 8 karakter.");
    }

    if (errors.length > 0) {
        result.innerHTML = `<p style="color:red;">${errors.join("<br>")}</p>`;
    } else {
        result.innerHTML = `<p style="color:green;">Semua input valid!</p>`;
    }
}
