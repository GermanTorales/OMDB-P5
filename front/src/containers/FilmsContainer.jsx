import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import FilmsList from "../components/FilmsList";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

const FilmsContainer = ({ films, paginas, search, user }) => {
  const [pag, setPag] = useState(1);

  return (
    <div className="container">
      {films ? (
        <div className="container">
          <div className="row">
            <FilmsList films={films} user={user} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-3 mx-auto">
                <Pagination
                  search={search}
                  totalResults={paginas}
                  pag={pag}
                  setPag={setPag}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    films: state.films.filmsSearch.films.Search,
    paginas: state.films.filmsSearch.films.totalResults / 10,
    search: state.films.filmsSearch.title,
    user: state.user.user
  };
};

export default connect(mapStateToProps, null)(FilmsContainer);
