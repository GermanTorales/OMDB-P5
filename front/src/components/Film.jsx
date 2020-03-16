import React from "react";
import Poster from "./Poster";
import { POSTER_NOT_FOUND } from "../utils/constansFiles";
import { ButtonFavorite } from "./ButtonFavorite";

export default ({ filmSelected }) => (
  <div className="card mb-3">
    <div className="row no-gutters">
      <div className="col-md-4">
        {filmSelected.Poster !== "N/A" ? (
          <Poster poster={filmSelected.Poster} />
        ) : (
          <Poster poster={POSTER_NOT_FOUND} />
        )}
      </div>
      <div className="col-md-8">
        <div className="container">
          <div className="title">
            <h2>
              {filmSelected.Title} ({filmSelected.Year})
            </h2>
            <div className="fav"></div>
          </div>
          <div>
            <p className="text-muted">
              {filmSelected.Rated} | {filmSelected.Runtime} |
              {filmSelected.Genre} | {filmSelected.Language} | Imdb Rating-
              <span className="badge badge-primary">
                {filmSelected.imdbRating}
              </span>
            </p>
            <p className="card-text">{filmSelected.Plot}</p>
          </div>
          <div className=" d-flex pt-3">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th scope="">Director</th>
                  <td>{filmSelected.Director}</td>
                </tr>
                <tr>
                  <th scope="">Actors</th>
                  <td>{filmSelected.Actors}</td>
                </tr>
                <tr>
                  <th scope="">Awards</th>
                  <td>{filmSelected.Production}</td>
                </tr>
                <tr>
                  <th scope="">Production</th>
                  <td>{filmSelected.Production}</td>
                </tr>
                <tr>
                  <th scope="">Box Office</th>
                  <td>{filmSelected.BoxOffice}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);
