import { useMemo } from "react";

function useBookStats(books) {
  return useMemo(() => {
    const total = books.length;
    const milik = books.filter((b) => b.status === "milik").length;
    const baca = books.filter((b) => b.status === "baca").length;
    const beli = books.filter((b) => b.status === "beli").length;

    return {
      total,
      milik,
      baca,
      beli,
    };
  }, [books]);
}

export default useBookStats;
