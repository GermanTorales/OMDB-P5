import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchFilm, fetchFilms } from "../../../redux/actions/Films";
import Film from "./Film";
import Loading from "../Commons/Loading";
import Recommended from "./Inside/Recommended";

const FilmContainer = ({ match, fetchFilm, fetchFilms }) => {
  const [film, setFilm] = useState({ Response: "False" });
  const [recommended, setRecommended] = useState([]);

  const ellipsis = (string) => {
    return string.length > 14 ? string.substring(0, 14) + "..." : string;
  };

  useEffect(() => {
    fetchFilm(match.params.imdbId).then((film) => setFilm(film));
    fetchFilms(match.params.title).then((res) =>
      setRecommended(res.Search.slice(1, 5))
    );
  }, [setFilm, setRecommended, match]);

  return (
    <div>
      {film.Response == "False" ? <Loading /> : <Film filmSelected={film} />}
      {recommended.length !== 0 ? (
        <Recommended ellipsis={ellipsis} recommended={recommended} />
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
