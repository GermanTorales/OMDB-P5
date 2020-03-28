import React from "react";

export default ({ number, name, onChangePage }) => (
  <button
    className="btn btn-outline-primary"
    onClick={e => {
      e.preventDefault();
      onChangePage(number);
    }}
  >
    {name}
  </button>
);
