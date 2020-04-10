import React, { useState } from "react";
import Pagination from "./Pagination";

const PaginationContainer = ({ page, pages, onChangePage }) => {
  let pageLinks = [];
  let selected = "";
  function pagination(primerPag, ultimaPag) {
    for (let i = primerPag; i <= ultimaPag; i++) {
      selected = page == i ? "disabled" : "";
      pageLinks.push(i);
    }
  }

  if (page + 10 <= pages) {
    if (page < 10) {
      pagination(1, 10);
    } else if (page >= 10) {
      pagination(page, page + 9);
    }
  } else if (pages - 10 > 0) {
    pagination(Math.floor(pages) - 10, pages);
  } else {
    pagination(1, pages);
  }

  return (
    <Pagination
      selected={selected}
      page={page}
      pageLinks={pageLinks}
      onChangePage={onChangePage}
    />
  );
};

export default PaginationContainer;
