import React from "react";
import PropTypes from "prop-types";
import "./BookItem.css";
import { useAlert } from "../../context/AlertContext";

const formatStatus = {
  milik: "Milik",
  baca: "Sedang Dibaca",
  beli: "Ingin Dibeli",
};

function BookItem({ book, onDelete, onEdit }) {
  const { showAlert } = useAlert();

  const handleDelete = () => {
    onDelete(book.id);
    showAlert("Buku berhasil dihapus", "info");
  };

  return (
    <div className="book-item">
      <div className="book-content">
        <h3>{book.title}</h3>
        <p>
          <strong>Penulis:</strong> {book.author}
        </p>
        <p>
          <strong>Tahun:</strong> {book.year}
        </p>
        <p>
          <strong>Status:</strong> {formatStatus[book.status]}
        </p>
      </div>
      <div>
        <button className="delete-btn" onClick={handleDelete}>
          Hapus
        </button>
        <button className="edit-btn" onClick={() => onEdit(book)}>
          Edit
        </button>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    year: PropTypes.string,
    status: PropTypes.string,
  }),
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default BookItem;
