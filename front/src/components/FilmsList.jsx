import React from "react";
import { Link } from "react-router-dom";
import ButtonFavorite from "./ButtonFavorite";
import Poster from "./Poster";
import { POSTER_NOT_FOUND } from "../utils/constansFiles";

export default ({ films, addFav, user }) => {
  return films.map(e => {
    return (
      <div className="col-md-3 pt-2" key={e.Title}>
        <Link to={`/movie/${e.imdbID}`}>
          {e.Poster !== "N/A" ? (
            <Poster poster={e.Poster} />
          ) : (
            <Poster poster={POSTER_NOT_FOUND} />
          )}
        </Link>
        {user.userId ? (
          <ButtonFavorite addFav={addFav} imdbId={e.imdbID} />
        ) : null}
        <div className="card-body">
          <h5 className="card-title">{e.Title}</h5>
          <p className="card-text">{e.Plot}</p>
          <p className="card-text">
            <small className="text-muted">{e.Year}</small>
          </p>
        </div>
      </div>
    );
  });
};
