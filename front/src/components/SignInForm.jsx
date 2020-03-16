import React from "react";
import AlertInputError from "./AlertInputError";

export default ({
  onSubmitForm,
  handlerInput,
  passError,
  emailError,
  button
}) => {
  return (
    <div className="col-md-4 mx-auto p-4">
      <form onSubmit={onSubmitForm}>
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
          {emailError ? <AlertInputError msg={"Email invalid"} /> : null}
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
          {passError ? <AlertInputError msg={"Password invalid"} /> : null}
        </div>
        <div className="from-group">
          <button
            disabled={button}
            type="submit"
            className="btn btn-outline-primary btn-block"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
