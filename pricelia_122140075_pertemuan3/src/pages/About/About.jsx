import React from "react";
import Header from "../../components/Header/Header";
import "./About.css";

function About() {
  return (
    <div className="about">
      <Header
        title="Tentang Aplikasi Buku"
        description="Informasi tentang pengembang dan fitur aplikasi"
      />
      <main className="container">
        <div className="about-content">
          <h2>Selamat datang di Aplikasi Manajemen Buku</h2>
          <p>
            Aplikasi ini membantu kamu mencatat dan mengelola daftar koleksi
            buku pribadi.
          </p>
          <h3>Fitur:</h3>
          <ul>
            <li>Tambah buku (judul, penulis, tahun)</li>
            <li>Hapus buku dari daftar</li>
            <li>Penyimpanan lokal (localStorage)</li>
          </ul>
          <h3>Tentang Pengembang:</h3>
          <p>
            Aplikasi ini dikembangkan untuk memenuhi tugas Praktikum Pemrograman
            Web berbasis React.
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;
