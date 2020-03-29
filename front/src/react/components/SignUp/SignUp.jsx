import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { createUser } from "../../../redux/actions/Users";
import { withRouter } from "react-router";
import ErrorCard from "../Commons/ErrorCard";
import { EMAIL_IN_USE } from "../../../utils/ErrorMessages";
import validations from "../../../assets/js/ValidacionesDeInputs";

const SignUp = ({ createUser, history }) => {
  const [fNameError, setfNameError] = useState(false);
  const [lNameError, setlNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [emailInUse, setEmailInUse] = useState(false);
  const [button, setButton] = useState(true);

  const handlerInput = e => {
    switch (e.target.name) {
      case "name": {
        validations.isValidName(e.target.value)
          ? setfNameError(true)
          : setfNameError(false);
        break;
      }
      case "last": {
        validations.isValidName(e.target.value)
          ? setlNameError(true)
          : setlNameError(false);
        break;
      }
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
    !fNameError && !emailError && !passError && !lNameError
      ? setButton(false)
      : setButton(true);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const data = {};
    data.firstName = e.target[0].value;
    data.lastName = e.target[1].value;
    data.email = e.target[2].value;
    data.password = e.target[3].value;
    createUser(data).then(res => {
      if (res) {
        setEmailInUse(true);
      } else {
        setEmailInUse(false);
        history.push("/signin");
      }
    });
  };

  return (
    <div>
      <SignUpForm
        onSubmitForm={onSubmitForm}
        handlerInput={handlerInput}
        fNameErr={fNameError}
        lNameErr={lNameError}
        emailErr={emailError}
        passErr={passError}
        button={button}
      />
      {emailInUse ? <ErrorCard msg={EMAIL_IN_USE} /> : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createUser: data => dispatch(createUser(data))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SignUp));
