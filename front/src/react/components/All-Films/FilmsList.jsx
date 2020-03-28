import React from "react";
import { Link } from "react-router-dom";
import ButtonFavorite from "../Commons/ButtonFavorite";
import Poster from "../Commons/Poster";
import { POSTER_NOT_FOUND } from "../../../utils/constansFiles";
import { Grilla, Tarjetas, Tarjeta } from "./styles.js";

export default ({ films, user }) => {
  return (
    <Grilla>
      <Tarjetas>
        {films.map((e, index) => {
          return (
            <Tarjeta key={index}>
              <Link to={`/movie/${e.imdbID}`}>
                {e.Poster !== "N/A" ? (
                  <Poster poster={e.Poster} />
                ) : (
                  <Poster poster={POSTER_NOT_FOUND} />
                )}
              </Link>
            </Tarjeta>
          );
        })}
      </Tarjetas>
    </Grilla>
  );
};
