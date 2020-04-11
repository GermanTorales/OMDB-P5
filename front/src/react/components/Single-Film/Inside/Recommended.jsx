import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles";
import Poster from "../../Commons/Poster";
import { POSTER_NOT_FOUND } from "../../../../utils/constansFiles";

export default ({ recommended, ellipsis }) => {
  return (
    <styles.Container>
      {recommended.map((film, index) => {
        return (
          <styles.CardContainer key={index}>
            {film.Poster !== "N/A" ? (
              <Poster poster={film.Poster} />
            ) : (
              <Poster poster={POSTER_NOT_FOUND} />
            )}
            <Link
              style={{ textDecoration: "none" }}
              to={`/movie/${film.Title}/${film.imdbID}`}
            >
              <styles.TarjetaTitle>{ellipsis(film.Title)}</styles.TarjetaTitle>
            </Link>
          </styles.CardContainer>
        );
      })}
    </styles.Container>
  );
};
