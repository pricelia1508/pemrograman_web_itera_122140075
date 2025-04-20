import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookFilter from "./BookFilter";

describe("BookFilter", () => {
  const mockFilterChange = jest.fn();
  const mockSearchChange = jest.fn();

  beforeEach(() => {
    render(
      <BookFilter
        filterStatus="all"
        onFilterChange={mockFilterChange}
        searchTerm=""
        onSearchChange={mockSearchChange}
      />
    );
  });

  test("renders filter dropdown and search input", () => {
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/cari judul atau penulis/i)
    ).toBeInTheDocument();
  });

  test("calls onFilterChange when status changed", () => {
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "baca" },
    });
    expect(mockFilterChange).toHaveBeenCalledWith("baca");
  });

  test("calls onSearchChange when typing in input", () => {
    fireEvent.change(screen.getByPlaceholderText(/cari judul atau penulis/i), {
      target: { value: "JavaScript" },
    });
    expect(mockSearchChange).toHaveBeenCalledWith("JavaScript");
  });
});
