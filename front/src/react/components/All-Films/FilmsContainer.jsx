import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchFilms, fetchFilmsPagX } from "../../../redux/actions/Films";
import FilmsList from "./FilmsList";
import PaginationContainer from "../Pagination/PaginationContainer";
import Loading from "../Commons/Loading";

const FilmsContainer = ({ user, match, fetchFilms, fetchFilmsPagX }) => {
  const [films, setFilms] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [numberPages, setNumberPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchFilmsPagX(match.params.title, page).then(films => {
      setFilms(films.Search);
      setTotalResults(films.totalResults);
      setNumberPages(films.totalResults / 10);
    });
  }, []);

  const onChangePage = pageSelected => {
    fetchFilmsPagX(match.params.title, pageSelected).then(films => {
      setPage(pageSelected);
      setFilms(films.Search);
      setTotalResults(films.totalResults);
      setNumberPages(films.totalResults / 10);
    });
  };

  return (
    <div>
      {films ? (
        <div>
          <FilmsList films={films} user={user} />
          <PaginationContainer
            pages={numberPages}
            onChangePage={onChangePage}
            page={page}
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.user
  };
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    fetchFilmsPagX: (title, page) => dispatch(fetchFilmsPagX(title, page))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(FilmsContainer);
