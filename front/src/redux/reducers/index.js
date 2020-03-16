import { combineReducers } from "redux";
import films from "./Films-reducer";
import user from "./UserReducer";
import favorites from "../reducers/Favorites-reducer";

export default combineReducers({
  films,
  user,
  favorites
});
