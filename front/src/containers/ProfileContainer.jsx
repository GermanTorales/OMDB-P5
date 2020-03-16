import React, { useEffect } from "react";
import { connect } from "react-redux";
import UserProfile from "../components/UserProfile";
import ErrorCard from "../components/ErrorCard";
import { FAVORITES_NOT_FOUND } from "../utils/ErrorMessages";
import { fetchFavorites } from "../redux/actions/Favorites";

const ProfileContainer = ({ userFavorites, user, favList }) => {
  useEffect(() => {
    if (userFavorites.length == 0) {
      favList();
    } else {
      return () => {};
    }
  }, [userFavorites]);

  return (
    <div className="container">
      {userFavorites ? (
        <UserProfile favorites={userFavorites} user={user} />
      ) : (
        <ErrorCard msg={FAVORITES_NOT_FOUND} />
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    userFavorites: state.favorites.favoritesList,
    user: state.user.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    favList: () => dispatch(fetchFavorites())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
