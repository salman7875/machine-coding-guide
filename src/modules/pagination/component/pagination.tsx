import { useState } from "react";
import { PAGINATION_DATA } from "../data/data";

const totalPages = Math.ceil(PAGINATION_DATA.length / 10);
const PAGE_LIMIT = 10;

function PaginationSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const startPage = Math.max(1, currentPage - Math.floor(PAGE_LIMIT / 2));
  const endPage = Math.min(totalPages, startPage + PAGE_LIMIT - 1);

  const adjustedStartPage = Math.max(1, endPage - PAGE_LIMIT + 1);
  console.log(currentPage, startPage, endPage, adjustedStartPage);

  const pages = Array.from(
    { length: Math.min(totalPages, PAGE_LIMIT) },
    (_, idx) => adjustedStartPage + idx,
  );

  return (
    <div className="flex items-center gap-2">
      {adjustedStartPage > 1 && (
        <button onClick={() => setCurrentPage(1)}>First</button>
      )}

      {pages.map((page) => (
        <button
          key={page}
          className={`px-3 py-2 ${currentPage === page ? "bg-blue-300" : "cursor-pointer"}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <button onClick={() => setCurrentPage(totalPages)}>Last</button>
      )}
    </div>
  );
}

export default PaginationSection;
