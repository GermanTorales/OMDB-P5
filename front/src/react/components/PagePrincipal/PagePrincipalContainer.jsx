import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchFilms } from "../../../redux/actions/Films";
import { withRouter } from "react-router";

import PagePrincipal from "./PagePrincipal";

const PagePrincipalContainer = ({ fetchFilms, history }) => {
  const [searchInput, setSearchInput] = useState("");

  function handlerInput(e) {
    setSearchInput(e.target.value);
  }

  function onSubmitForm(e) {
    e.preventDefault();
    fetchFilms(e.target[0].value).then(() => {
      history.push(`/search/${searchInput}`);
    });
  }

  return (
    <PagePrincipal handlerInput={handlerInput} onSubmitForm={onSubmitForm} />
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFilms: title => dispatch(fetchFilms(title))
  };
};

export default withRouter(
  connect(null, mapDispatchToProps)(PagePrincipalContainer)
);
