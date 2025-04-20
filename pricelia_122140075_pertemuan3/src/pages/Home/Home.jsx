import React, { useState } from "react";
import Header from "../../components/Header/Header";
import BookForm from "../../components/BookForm/BookForm";
import BookItem from "../../components/BookItem/BookItem";
import BookFilter from "../../components/BookFilter/BookFilter";
import { useBooks } from "../../context/BookContext";
import "./Home.css";

function Home() {
  const { books, addBook, deleteBook, updateBook } = useBooks();
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingBook, setEditingBook] = useState(null);

  const filteredBooks = books.filter((book) => {
    const matchStatus = filterStatus === "all" || book.status === filterStatus;
    const matchSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="home">
      <Header
        title="Aplikasi Manajemen Buku"
        description="Tambah dan kelola daftar koleksi bukumu"
      />

      <main className="container">
        <BookFilter
          filterStatus={filterStatus}
          onFilterChange={setFilterStatus}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <BookForm
          onAddBook={addBook}
          onUpdateBook={updateBook}
          editingBook={editingBook}
          clearEdit={() => setEditingBook(null)}
        />

        <div className="book-list">
          {filteredBooks.length === 0 ? (
            <p className="empty-message">Tidak ada buku yang cocok.</p>
          ) : (
            filteredBooks.map((book) => (
              <BookItem
                key={book.id}
                book={book}
                onDelete={deleteBook}
                onEdit={setEditingBook}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
