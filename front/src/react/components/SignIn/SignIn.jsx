import React, { useState } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import SignInForm from "./SignInForm";
import ErrorCard from "../Commons/ErrorCard";
import { loggingUsers } from "../../../redux/actions/Users";
import { INVALID_DATA } from "../../../utils/ErrorMessages";
import validations from "../../../assets/js/ValidacionesDeInputs";

const SignIn = ({ loggingUsers, history }) => {
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [invalidData, setInvalidData] = useState(false);
  const [button, setButton] = useState(true);

  function handlerInput(e) {
    switch (e.target.name) {
      case "email": {
        validations.isValidEmail(e.target.value)
          ? setEmailError(true)
          : setEmailError(false);
        break;
      }
      case "password": {
        validations.isValidPassword(e.target.value)
          ? setPassError(true)
          : setPassError(false);
        break;
      }
    }
    !emailError && !passError ? setButton(false) : setButton(true);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();

    let email = e.target[0].value;
    let password = e.target[1].value;

    loggingUsers(email, password).then((res) => {
      if (res && res.status == 401) {
        setInvalidData(true);
      } else {
        setInvalidData(false);
        history.push("/");
      }
    });
  };

  return (
    <div>
      <SignInForm
        onSubmitForm={onSubmitForm}
        handlerInput={handlerInput}
        emailError={emailError}
        passError={passError}
        button={button}
      />
      {invalidData ? <ErrorCard msg={INVALID_DATA} /> : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loggingUsers: (email, password) => dispatch(loggingUsers(email, password)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
