import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import NavbarContainer from "../containers/NavbarContainer";
import FilmsContainer from "../containers/FilmsContainer";
import FilmContainer from "../containers/FilmContainer";
import PagePrincipal from "../components/PagePrincipal";
import ProfileContainer from "../containers/ProfileContainer";
import SignUp from "../containers/SignUp";
import SingIn from "../containers/SignIn";

const Main = ({ user }) => (
  <div id="main" className="">
    <NavbarContainer user={user} />
    <Switch>
      <Route path="/" exact component={PagePrincipal} />
      <Route path="/search" exact component={FilmsContainer} />
      <Route path="/search/:page" exact component={FilmsContainer} />
      <Route path="/movie/:imdbId" exact component={FilmContainer} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/signin" exact component={SingIn} />
      <Route path="/profile" exact component={ProfileContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps, null)(Main);
