import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchFilm, fetchFilms } from "../../../redux/actions/Films";
import Film from "./Film";
import Loading from "../Commons/Loading";
import Recommended from "./Inside/Recommended";

const FilmContainer = ({ match, fetchFilm, fetchFilms }) => {
  const [film, setFilm] = useState({ Response: "False" });
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    fetchFilm(match.params.imdbId).then((film) => setFilm(film));
    fetchFilms(film.Title).then((recommended) => setRecommended(recommended));
  }, [setFilm, setRecommended]);

  console.log("RECOMMENDED", recommended);

  return (
    <div>
      {film.Response == "False" ? <Loading /> : <Film filmSelected={film} />}
      {recommended.length !== 0 ? (
        <Recommended recommended={recommended} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFilm: (omdbId) => dispatch(fetchFilm(omdbId)),
    fetchFilms: (title) => dispatch(fetchFilms(title)),
  };
};

export default connect(null, mapDispatchToProps)(FilmContainer);
