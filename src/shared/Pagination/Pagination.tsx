import React from 'react';
import styles from './pagination.module.scss';
import ReactPaginate from "react-paginate";

interface IPagination {
    onChangePage: (number:number)=>void;
    currentPage: number;
}

export function Pagination({currentPage, onChangePage}: IPagination) {
  return (
      <ReactPaginate
          className={styles.pagination}
          breakLabel="..."
          nextLabel=">"
          onPageChange={(event)=>onChangePage(event.selected + 1)}
          pageRangeDisplayed={4}
          pageCount={3}
          forcePage={currentPage-1}
          previousLabel="<"
          renderOnZeroPageCount={null}
      />
  );
}
