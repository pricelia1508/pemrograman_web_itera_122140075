import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

// Mock context (useBooks)
jest.mock("../../context/BookContext", () => ({
  useBooks: () => ({
    books: [
      {
        id: 1,
        title: "Buku 1",
        author: "Penulis A",
        year: "2020",
        status: "milik",
      },
      {
        id: 2,
        title: "Buku 2",
        author: "Penulis B",
        year: "2021",
        status: "baca",
      },
    ],
    addBook: jest.fn(),
    deleteBook: jest.fn(),
    updateBook: jest.fn(),
  }),
}));

// Mock all child components
jest.mock("../../components/Header/Header", () => () => <div>MockHeader</div>);

jest.mock("../../components/BookForm/BookForm", () => () => (
  <input placeholder="Judul Buku" />
));

jest.mock("../../components/BookItem/BookItem", () => ({ book }) => (
  <div>
    <p>{book.title}</p>
    <p>Penulis: {book.author}</p>
  </div>
));

jest.mock("../../components/BookFilter/BookFilter", () => () => (
  <div>MockFilter</div>
));

// Unit test
describe("Home Page", () => {
  test("renders header and book form", () => {
    render(<Home />);
    expect(screen.getByText(/MockHeader/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Judul Buku/i)).toBeInTheDocument();
  });

  test("renders list of books", () => {
    render(<Home />);
    expect(screen.getByText("Buku 1")).toBeInTheDocument();
    expect(screen.getByText("Buku 2")).toBeInTheDocument();

    const penulisParagraphs = screen.getAllByText(/Penulis/i, {
      selector: "p",
    });
    expect(penulisParagraphs).toHaveLength(2);
  });
});
