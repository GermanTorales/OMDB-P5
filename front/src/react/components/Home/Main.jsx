import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import NavbarContainer from "../Navbar/NavbarContainer";
import FilmsContainer from "../All-Films/FilmsContainer";
import FilmContainer from "../Single-Film/FilmContainer";
import PagePrincipal from "../PagePrincipal/PagePrincipalContainer";
import ProfileContainer from "../User/ProfileContainer";
import SignUp from "../SignUp/SignUp";
import SingIn from "../SignIn/SignIn";

const Main = ({ user }) => (
  <div className="w-100">
    <NavbarContainer user={user} />
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

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps, null)(Main);
