import React from "react";
import { render, screen } from "@testing-library/react";
import Stats from "./Stats";

jest.mock("../../context/BookContext", () => ({
  useBooks: () => ({
    books: [
      { id: 1, title: "A", author: "X", year: "2020", status: "milik" },
      { id: 2, title: "B", author: "Y", year: "2021", status: "baca" },
      { id: 3, title: "C", author: "Z", year: "2022", status: "beli" },
      { id: 4, title: "D", author: "X", year: "2023", status: "milik" },
    ],
  }),
}));

describe("Stats", () => {
  test("displays correct statistics", () => {
    render(<Stats />);

    expect(screen.getByText(/Total Buku/i).previousSibling.textContent).toBe(
      "4"
    );
    expect(screen.getByText(/Milik/i).previousSibling.textContent).toBe("2");
    expect(screen.getByText(/Sedang Dibaca/i).previousSibling.textContent).toBe(
      "1"
    );
    expect(screen.getByText(/Ingin Dibeli/i).previousSibling.textContent).toBe(
      "1"
    );
  });
});
