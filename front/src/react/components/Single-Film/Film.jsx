import React from "react";
import Poster from "../Commons/Poster";
import Tr from "./Inside/Tr";
import { POSTER_NOT_FOUND } from "../../../utils/constansFiles";
import {
  FilmCardContainer,
  FilmImageContainer,
  FilmInfo,
  FilmTitle,
  FilmSubInfo,
  FilmPlot
} from "./styles";

export default ({ filmSelected }) => (
  <FilmCardContainer>
    <FilmImageContainer>
      {filmSelected.Poster !== "N/A" ? (
        <Poster poster={filmSelected.Poster} />
      ) : (
        <Poster poster={POSTER_NOT_FOUND} />
      )}
    </FilmImageContainer>
    <FilmInfo>
      <FilmTitle>
        {filmSelected.Title} ({filmSelected.Year})
      </FilmTitle>
      <FilmSubInfo className="text-muted">
        {filmSelected.Rated} | {filmSelected.Runtime} |{filmSelected.Genre} |{" "}
        {filmSelected.Language} | Imdb Rating-
        <span className="badge badge-primary">{filmSelected.imdbRating}</span>
      </FilmSubInfo>
      <FilmPlot>{filmSelected.Plot}</FilmPlot>
      <table className="table table-striped">
        <tbody>
          <Tr title={"Director"} content={filmSelected.Director} />
          <Tr title={"Actors"} content={filmSelected.Actors} />
          <Tr title={"Awards"} content={filmSelected.Awards} />
          <Tr title={"Production"} content={filmSelected.Production} />
          <Tr title={"Box Office"} content={filmSelected.BoxOffice} />
        </tbody>
      </table>
    </FilmInfo>
  </FilmCardContainer>
);
