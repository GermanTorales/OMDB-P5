import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchFilms } from "../redux/actions/Films";
import { withRouter } from "react-router";
import Navbar from "../components/Navbar";

const NavbarContainer = ({ fetchFilms, user, history }) => {
  const [searchInput, setSearchInput] = useState("");

  function handlerInput(e) {
    setSearchInput(e.target.value);
  }

  function onSubmitForm(e) {
    e.preventDefault();
    fetchFilms(e.target[0].value).then(() => {
      history.push("/search");
    });
  }

  return (
    <Navbar
      user={user}
      handlerInput={handlerInput}
      onSubmitForm={onSubmitForm}
    />
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFilms: title => dispatch(fetchFilms(title))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(NavbarContainer));
