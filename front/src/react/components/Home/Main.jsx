import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { isLogin } from "../../../redux/actions/Users";

import NavbarContainer from "../Navbar/NavbarContainer";
import FilmsContainer from "../All-Films/FilmsContainer";
import FilmContainer from "../Single-Film/FilmContainer";
import PagePrincipal from "../PagePrincipal/PagePrincipalContainer";
import ProfileContainer from "../User/ProfileContainer";
import SignUp from "../SignUp/SignUp";
import SingIn from "../SignIn/SignIn";

const Main = ({ isLogin }) => {
  useEffect(() => {
    isLogin();
  }, []);

  return (
    <div className="w-100">
      <NavbarContainer />
      <Switch>
        <Route path="/" exact component={PagePrincipal} />
        <Route path="/search/:title" exact component={FilmsContainer} />
        <Route path="/movie/:title/:imdbId" exact component={FilmContainer} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SingIn} />
        <Route path="/profile" exact component={ProfileContainer} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    isLogin: () => dispatch(isLogin()),
  };
};

export default connect(null, mapDispatchToProps)(Main);
