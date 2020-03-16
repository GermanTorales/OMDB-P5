import { RECIVE_FAVORITES, RECENT_FAVORITE } from "../constants";

const initialState = {
  favoritesList: [],
  recentFavorite: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECIVE_FAVORITES:
      return {
        ...state,
        favoritesList: action.moviesFavs
      };
    case RECENT_FAVORITE:
      return { ...state, recentFavorite: action.recent };
    default:
      return state;
  }
};
