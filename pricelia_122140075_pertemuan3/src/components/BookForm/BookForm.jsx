import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./BookForm.css";
import { useAlert } from "../../context/AlertContext";

function BookForm({ onAddBook, onUpdateBook, editingBook, clearEdit }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [status, setStatus] = useState("milik");
  const { showAlert } = useAlert();

  // Isi form otomatis saat mode edit
  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setYear(editingBook.year);
      setStatus(editingBook.status);
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim() || !year.trim()) {
      showAlert("Semua field wajib diisi!", "error");
      return;
    }

    const bookData = {
      id: editingBook ? editingBook.id : Date.now(),
      title,
      author,
      year,
      status,
    };

    if (editingBook) {
      onUpdateBook(bookData);
      showAlert("Buku berhasil diperbarui!", "success");
    } else {
      onAddBook(bookData);
      showAlert("Buku berhasil ditambahkan!", "success");
    }

    setTitle("");
    setAuthor("");
    setYear("");
    setStatus("milik");
    clearEdit();
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Judul Buku"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Penulis"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="number"
        placeholder="Tahun Terbit"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="milik">Milik</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      <button type="submit">
        {editingBook ? "Simpan Perubahan" : "Tambah Buku"}
      </button>
    </form>
  );
}

BookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  editingBook: PropTypes.object,
  clearEdit: PropTypes.func.isRequired,
};

export default BookForm;
