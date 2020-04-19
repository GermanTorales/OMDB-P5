import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchFilm, fetchFilms } from "../../../redux/actions/Films";
import Film from "./Film";
import Loading from "../Commons/Loading";

const FilmContainer = ({ match, fetchFilm }) => {
  const [film, setFilm] = useState({ Response: "False" });

  useEffect(() => {
    fetchFilm(match.params.imdbId).then((film) => setFilm(film));
  }, [setFilm]);

  return (
    <div>
      {film.Response == "False" ? <Loading /> : <Film filmSelected={film} />}
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFilm: (omdbId) => dispatch(fetchFilm(omdbId)),
  };
};

export default connect(null, mapDispatchToProps)(FilmContainer);
