import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookItem from "./BookItem";

// Mock useAlert
const mockShowAlert = jest.fn();

jest.mock("../../context/AlertContext", () => ({
  useAlert: () => ({
    showAlert: mockShowAlert,
  }),
}));

describe("BookItem Component", () => {
  const mockDelete = jest.fn();
  const mockEdit = jest.fn();
  const dummyBook = {
    id: 1,
    title: "React untuk Pemula",
    author: "Jane Doe",
    year: "2023",
    status: "baca",
  };

  beforeEach(() => {
    mockDelete.mockClear();
    mockEdit.mockClear();
    mockShowAlert.mockClear();
  });

  test("menampilkan detail buku dengan benar", () => {
    render(
      <BookItem book={dummyBook} onDelete={mockDelete} onEdit={mockEdit} />
    );

    expect(screen.getByText("React untuk Pemula")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("2023")).toBeInTheDocument();
    expect(screen.getByText("Sedang Dibaca")).toBeInTheDocument();
  });

  test("memanggil onDelete dan showAlert saat tombol hapus diklik", () => {
    render(
      <BookItem book={dummyBook} onDelete={mockDelete} onEdit={mockEdit} />
    );

    const deleteBtn = screen.getByRole("button", { name: /hapus/i });
    fireEvent.click(deleteBtn);

    expect(mockDelete).toHaveBeenCalledWith(dummyBook.id);
    expect(mockShowAlert).toHaveBeenCalledWith("Buku berhasil dihapus", "info");
  });

  test("memanggil onEdit saat tombol edit diklik", () => {
    render(
      <BookItem book={dummyBook} onDelete={mockDelete} onEdit={mockEdit} />
    );

    const editBtn = screen.getByRole("button", { name: /edit/i });
    fireEvent.click(editBtn);

    expect(mockEdit).toHaveBeenCalledWith(dummyBook);
  });
});
