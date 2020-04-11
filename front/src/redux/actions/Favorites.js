import { RECIVE_FAVORITES, RECENT_FAVORITE } from "../constants";
import Axios from "axios";

const favorites = (moviesFavs) => ({
  type: RECIVE_FAVORITES,
  moviesFavs,
});

const recentFavorite = (recent) => ({
  type: RECENT_FAVORITE,
  recent,
});

export const setFavorite = function (omdbId) {
  return function (dispatch) {
    Axios.post("/user/add-favorite", { movieId: omdbId })
      .then((res) => res.data)
      .then((recent) => {
        dispatch(recentFavorite(recent));
      })
      .catch((err) => err);
  };
};

export const fetchFavorites = (dispatch) => {
  Axios.get("/user/favorites")
    .then((res) => res.data)
    .then((favs) => {
      let list = [];
      favs.forEach((fav) => {
        Axios.get(
          `https://www.omdbapi.com/?apikey=f480926&i=${fav.movieId}`
        ).then((res) => list.push(res.data));
      });
      dispatch(favorites(list));
    });
};
