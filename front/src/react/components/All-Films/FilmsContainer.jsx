import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchFilmsPagX } from "../../../redux/actions/Films";
import FilmsList from "./FilmsList";
import PaginationContainer from "../Pagination/PaginationContainer";
import Loading from "../Commons/Loading";

const FilmsContainer = ({ user, match, fetchFilmsPagX }) => {
  const [films, setFilms] = useState({ Response: "False" });
  const [totalResults, setTotalResults] = useState(0);
  const [numberPages, setNumberPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (films.Response == "False") {
      fetchFilmsPagX(match.params.title, page).then(films => {
        setFilms(films);
        setTotalResults(films.totalResults);
        setNumberPages(films.totalResults / 10);
      });
    } else {
      return;
    }
  }, [setFilms]);

  const onChangePage = pageSelected => {
    if (pageSelected > 0 && pageSelected <= numberPages) {
      fetchFilmsPagX(match.params.title, pageSelected).then(films => {
        setPage(pageSelected);
        setFilms(films);
        setTotalResults(films.totalResults);
        setNumberPages(films.totalResults / 10);
      });
    }
  };

  return (
    <div>
      {films.Response == "True" ? (
        <div>
          <FilmsList films={films.Search} user={user} />
          <PaginationContainer
            page={page}
            pages={numberPages}
            onChangePage={onChangePage}
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
