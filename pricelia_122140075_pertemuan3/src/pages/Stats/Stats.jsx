import React from "react";
import Header from "../../components/Header/Header";
import { useBooks } from "../../context/BookContext";
import useBookStats from "../../hooks/useBookStats";
import "./Stats.css";

function Stats() {
  const { books } = useBooks();
  const stats = useBookStats(books);

  return (
    <div className="stats">
      <Header
        title="Statistik Buku"
        description="Lihat data buku berdasarkan status koleksi"
      />
      <main className="container stats-container">
        <div className="stat-card">
          <h2>{stats.total}</h2>
          <p>Total Buku</p>
        </div>
        <div className="stat-card">
          <h2>{stats.milik}</h2>
          <p>Milik</p>
        </div>
        <div className="stat-card">
          <h2>{stats.baca}</h2>
          <p>Sedang Dibaca</p>
        </div>
        <div className="stat-card">
          <h2>{stats.beli}</h2>
          <p>Ingin Dibeli</p>
        </div>
      </main>
    </div>
  );
}

export default Stats;
