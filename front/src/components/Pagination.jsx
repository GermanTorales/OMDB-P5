import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFilmsPagX } from "../redux/actions/Films";

const Pagination = ({ totalResults, setPag, pag, search, fetchFilmsPagX }) => {
  function pagination(primerPag, ultimaPag) {
    let paginas = [];

    for (let i = primerPag; i < ultimaPag; i++) {
      let componente = (
        <li key={i} className="page-item">
          <Link to={`/search/${i}`}>
            <button
              className="page-link"
              onClick={() => {
                setPag(currentState => i);
                fetchFilmsPagX(search, i);
              }}
            >
              {i}
            </button>
          </Link>
        </li>
      );
      paginas.push(componente);
    }
    return paginas;
  }

  function printPagination() {
    if (pag + 10 <= totalResults) {
      if (pag < 10) {
        return pagination(1, 10);
      } else if (pag >= 9) {
        return pagination(pag, pag + 10);
      }
    } else {
      return pagination(pag, totalResults);
    }
  }

  return (
    <ul className="pagination justify-content-center">
      <li className="page-item disabled">
        <Link to={`/search/${pag - 1}`}>
          <button
            className="page-link"
            onClick={() => {
              setPag(currentState => currentState - 1);
              fetchFilmsPagX(search, pag);
            }}
          >
            Previous
          </button>
        </Link>
      </li>

      {printPagination()}

      <li className="page-item">
        <Link to={`/search/${pag + 1}`}>
          <button
            className="page-link"
            onClick={() => {
              setPag(currentState => currentState + 1);
              fetchFilmsPagX(search, pag);
            }}
          >
            Next
          </button>
        </Link>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFilmsPagX: (title, pag) => dispatch(fetchFilmsPagX(title, pag))
  };
};

export default connect(null, mapDispatchToProps)(Pagination);
