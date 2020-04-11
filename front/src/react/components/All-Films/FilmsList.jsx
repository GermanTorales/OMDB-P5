import React from "react";
import { Link } from "react-router-dom";
import ButtonFavorite from "../Commons/ButtonFavorite";
import Poster from "../Commons/Poster";
import { POSTER_NOT_FOUND } from "../../../utils/constansFiles";
import styles from "./styles.js";

export default ({ films, user, ellipsis }) => {
  return (
    <styles.Grilla>
      <styles.Tarjetas>
        {films.map((e, index) => {
          return (
            <styles.Tarjeta key={index}>
              {e.Poster !== "N/A" ? (
                <Poster poster={e.Poster} />
              ) : (
                <Poster poster={POSTER_NOT_FOUND} />
              )}
              <Link
                style={{ textDecoration: "none" }}
                to={`/movie/${e.Title}/${e.imdbID}`}
              >
                <styles.TarjetaTitle>{ellipsis(e.Title)}</styles.TarjetaTitle>
              </Link>
            </styles.Tarjeta>
          );
        })}
      </styles.Tarjetas>
    </styles.Grilla>
  );
};
