import React, { useState } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import SignInForm from "./SignInForm";
import ErrorCard from "../Commons/ErrorCard";
import { loggingUsers } from "../../../redux/actions/Users";
import { INVALID_DATA } from "../../../utils/ErrorMessages";

const SignIn = ({ loggingUsers, history }) => {
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [invalidData, setInvalidData] = useState(false);
  const [button, setButton] = useState(true);

  function isValidEmail(email) {
    return !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
      email
    );
  }

  function isValidPassword(password) {
    return !/^(?=(?:.*(\d|[$@._&])){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{4,20}$/.test(
      password
    );
  }

  function handlerInput(e) {
    switch (e.target.name) {
      case "email": {
        isValidEmail(e.target.value)
          ? setEmailError(true)
          : setEmailError(false);
      }
      case "password": {
        isValidPassword(e.target.value)
          ? setPassError(true)
          : setPassError(false);
      }
    }
    !emailError && !passError ? setButton(false) : setButton(true);
  }

  const onSubmitForm = e => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    loggingUsers(email, password).then(res => {
      if (res && res.status == 401) {
        setInvalidData(true);
      } else {
        setInvalidData(false);
        history.push("/");
      }
    });
  };

  return (
    <div className="container mt-4 pt-4 bg-light">
      <div className="row ">
        <SignInForm
          onSubmitForm={onSubmitForm}
          handlerInput={handlerInput}
          emailError={emailError}
          passError={passError}
          button={button}
        />
      </div>
      {invalidData ? <ErrorCard msg={INVALID_DATA} /> : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loggingUsers: (email, password) => dispatch(loggingUsers(email, password))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
