import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookForm from "./BookForm";
import "@testing-library/jest-dom";

// Mock useAlert
const mockShowAlert = jest.fn();

jest.mock("../../context/AlertContext", () => ({
  useAlert: () => ({
    showAlert: mockShowAlert,
  }),
}));

describe("BookForm", () => {
  const mockAdd = jest.fn();
  const mockUpdate = jest.fn();
  const mockClear = jest.fn();

  beforeEach(() => {
    render(
      <BookForm
        onAddBook={mockAdd}
        onUpdateBook={mockUpdate}
        editingBook={null}
        clearEdit={mockClear}
      />
    );
    mockAdd.mockClear();
    mockUpdate.mockClear();
    mockClear.mockClear();
    mockShowAlert.mockClear();
  });

  test("renders input fields and submit button", () => {
    expect(screen.getByPlaceholderText(/Judul Buku/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Penulis/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tahun Terbit/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Tambah Buku/i })
    ).toBeInTheDocument();
  });

  test("does not submit when fields are empty and shows alert", () => {
    fireEvent.click(screen.getByRole("button", { name: /Tambah Buku/i }));
    expect(mockAdd).not.toHaveBeenCalled();
    expect(mockShowAlert).toHaveBeenCalledWith(
      "Semua field wajib diisi!",
      "error"
    );
  });

  test("submits data correctly when form is filled", () => {
    fireEvent.change(screen.getByPlaceholderText(/Judul Buku/i), {
      target: { value: "Buku Testing" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Penulis/i), {
      target: { value: "Penulis Hebat" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Tahun Terbit/i), {
      target: { value: "2024" },
    });
    fireEvent.change(screen.getByDisplayValue("Milik"), {
      target: { value: "baca" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Tambah Buku/i }));

    expect(mockAdd).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Buku Testing",
        author: "Penulis Hebat",
        year: "2024",
        status: "baca",
      })
    );
    expect(mockShowAlert).toHaveBeenCalledWith(
      "Buku berhasil ditambahkan!",
      "success"
    );
    expect(mockClear).toHaveBeenCalled();
  });
});
