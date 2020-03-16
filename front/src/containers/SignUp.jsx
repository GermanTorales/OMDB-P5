import React, { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import { connect } from "react-redux";
import { createUser } from "../redux/actions/Users";
import { withRouter } from "react-router";
import ErrorCard from "../components/ErrorCard";
import { EMAIL_IN_USE } from "../utils/ErrorMessages";

const SignUp = ({ createUser, history }) => {
  const [fNameError, setfNameError] = useState(false);
  const [lNameError, setlNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [emailInUse, setEmailInUse] = useState(false);
  const [button, setButton] = useState(true);

  function isValidName(name) {
    return !/^[A-Z]+$/i.test(name);
  }

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
      case "name": {
        isValidName(e.target.value)
          ? setfNameError(true)
          : setfNameError(false);
      }
      case "last": {
        isValidName(e.target.value)
          ? setlNameError(true)
          : setlNameError(false);
      }
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
    !fNameError && !emailError && !passError && !lNameError
      ? setButton(false)
      : setButton(true);
  }

  const onSubmitForm = e => {
    e.preventDefault();
    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    createUser(firstName, lastName, email, password).then(res => {
      if (res) {
        setEmailInUse(true);
      } else {
        setEmailInUse(false);
        history.push("/signin");
      }
    });
  };

  return (
    <div className="container mt-4 pt-4 ">
      <div className="row bg-light">
        <SignUpForm
          onSubmitForm={onSubmitForm}
          handlerInput={handlerInput}
          fNameErr={fNameError}
          lNameErr={lNameError}
          emailErr={emailError}
          passErr={passError}
          button={button}
        />
      </div>
      {emailInUse ? <ErrorCard msg={EMAIL_IN_USE} /> : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createUser: (firstName, lastName, email, password) =>
      dispatch(createUser(firstName, lastName, email, password))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SignUp));
