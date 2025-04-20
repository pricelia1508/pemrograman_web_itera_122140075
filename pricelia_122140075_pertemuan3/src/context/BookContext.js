import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useLocalStorage("books", []);

  const addBook = (book) => {
    setBooks((prev) => [...prev, book]);
  };

  const deleteBook = (bookId) => {
    setBooks((prev) => prev.filter((book) => book.id !== bookId));
  };

  const updateBook = (updatedBook) => {
    setBooks((prev) =>
      prev.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  const value = {
    books,
    addBook,
    deleteBook,
    updateBook, // <-- penting!
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export function useBooks() {
  return useContext(BookContext);
}
