import React from 'react';
import { Button } from '../UI';

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <nav className="mt-4 flex justify-center">
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${
              pageNumber === currentPage ? 'active' : ''
            }`}
          >
            <Button
              onClick={() => onPageChange(pageNumber)}
              className="page-link"
            >
              {pageNumber}
            </Button>
          </li>
        ))}
      </ul>

      <div
        className={`page-item ${
          currentPage === 1 ? 'disabled' : ''
        }`}
      >
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          className="page-link text-3xl mr-2 pt-0 px-5"
          disabled={currentPage === 1}
        >
          &#171;
        </Button>
      </div>

      <div
        className={`page-item ${
          currentPage === totalPages ? 'disabled' : ''
        }`}
      >
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          className="page-link text-3xl ml-2 pt-0 px-5"
          disabled={currentPage === totalPages}
        >
          &#187;
        </Button>
      </div>
    </nav>
  );
};
