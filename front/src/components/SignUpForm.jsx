import React, { useRef } from "react";
import { Link } from "react-router-dom";
import AlertInputError from "./AlertInputError";

export default ({
  onSubmitForm,
  handlerInput,
  fNameErr,
  lNameErr,
  emailErr,
  passErr,
  button
}) => {
  return (
    <div className="col-md-4 mx-auto p-4">
      <form onSubmit={onSubmitForm}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            aria-describedby="name"
            placeholder="Enter your full name"
            onChange={handlerInput}
          />
          {fNameErr ? <AlertInputError msg={"First Name invalid"} /> : null}
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="last"
            className="form-control"
            aria-describedby="name"
            placeholder="Enter your full name"
            onChange={handlerInput}
          />
          {lNameErr ? <AlertInputError msg={"Last Name invalid"} /> : null}
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handlerInput}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          {emailErr ? <AlertInputError msg={"Email invalid"} /> : null}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={handlerInput}
          />
          {passErr ? <AlertInputError msg={"Password invalid"} /> : null}
        </div>
        <div className="from-group">
          <button
            disabled={button}
            type="submit"
            className="btn btn-outline-primary btn-block"
          >
            {" "}
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
