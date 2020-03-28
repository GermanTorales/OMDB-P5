import { RECIVE_FILMS, RECIVE_FILM } from "../constants";
import axios from "axios";

const reciveFilms = (films, search) => ({
  type: RECIVE_FILMS,
  filmsSearch: { films, search }
});

const reciveFilm = (film, search) => ({
  type: RECIVE_FILM,
  filmSearch: { film, search }
});

export const fetchFilms = title => dispatch => {
  return axios
    .get(`https://www.omdbapi.com/?apikey=f480926&s=${title}`)
    .then(res => res.data)
    .then(films => {
      dispatch(reciveFilms(films, title));
      return films;
    });
};

export const fetchFilmsPagX = (title, page) => dispatch => {
  return axios
    .get(`https://www.omdbapi.com/?apikey=f480926&s=${title}&page=${page}`)
    .then(res => res.data)
    .then(films => {
      dispatch(reciveFilms(films, title));
      return films;
    });
};

export const fetchFilm = omdbId => dispatch =>
  axios
    .get(`https://www.omdbapi.com/?apikey=f480926&i=${omdbId}`)
    .then(res => res.data)
    .then(film => dispatch(reciveFilm(film, film.Title)));
