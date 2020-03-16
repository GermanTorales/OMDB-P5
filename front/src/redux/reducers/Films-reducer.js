import { RECIVE_FILMS, RECIVE_FILM } from "../constants";

const initialState = {
  filmsSearch: { title: "", films: [] },
  filmSelected: { title: "", film: {} }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECIVE_FILMS:
      return {
        ...state,
        filmsSearch: {
          title: action.filmsSearch.search,
          films: action.filmsSearch.films
        }
      };
    case RECIVE_FILM:
      return {
        ...state,
        filmSelected: {
          title: action.filmSearch.search,
          film: action.filmSearch.film
        }
      };
    default:
      return state;
  }
};
