import React from "react";
import { connect } from "react-redux";
import { setFavorite } from "../redux/actions/Favorites";

const ButtonFavorite = ({ addFav, imdbId }) => (
  <div>
    <button
      className="btn btn-warning btn-block"
      onClick={event => {
        event.preventDefault();
        addFav(imdbId);
      }}
    >
      Add To Favs
    </button>
  </div>
);

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addFav: omdbId => {
      dispatch(setFavorite(omdbId));
    }
  };
};

export default connect(null, mapDispatchToProps)(ButtonFavorite);
