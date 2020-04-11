import React from "react";
import Poster from "../Commons/Poster";
import Tr from "./Inside/Tr";
import Recommended from "./Inside/Recommended";
import { POSTER_NOT_FOUND } from "../../../utils/constansFiles";
import styles from "../../styles/formStyles";

export default ({ filmSelected }) => (
  <styles.Container>
    <styles.FilmCardContainer>
      <styles.FilmImageContainer>
        {filmSelected.Poster !== "N/A" ? (
          <Poster poster={filmSelected.Poster} />
        ) : (
          <Poster poster={POSTER_NOT_FOUND} />
        )}
      </styles.FilmImageContainer>
      <styles.FilmInfo>
        <styles.FilmTitle>
          {filmSelected.Title} ({filmSelected.Year})
        </styles.FilmTitle>
        <styles.FilmSubInfo className="text-muted">
          {filmSelected.Rated} | {filmSelected.Runtime} |{filmSelected.Genre} |{" "}
          {filmSelected.Language} | Imdb Rating {filmSelected.imdbRating}
        </styles.FilmSubInfo>
        <styles.FilmPlot>{filmSelected.Plot}</styles.FilmPlot>
        <table className="table table-striped">
          <tbody>
            <Tr title={"Director"} content={filmSelected.Director} />
            <Tr title={"Actors"} content={filmSelected.Actors} />
            <Tr title={"Awards"} content={filmSelected.Awards} />
            <Tr title={"Production"} content={filmSelected.Production} />
            <Tr title={"Box Office"} content={filmSelected.BoxOffice} />
          </tbody>
        </table>
      </styles.FilmInfo>
    </styles.FilmCardContainer>
  </styles.Container>
);
