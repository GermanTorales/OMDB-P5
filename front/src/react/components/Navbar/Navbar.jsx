import React from "react";
import { Link } from "react-router-dom";
import ButtonsUser from "./inside/ButtonsUser";
import ButtonUserProfile from "./inside/ButtonUserProfile";

export default ({ user }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
          <h1 className="navbar-brand" href="#">
            OMDB
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {user.userId ? <ButtonUserProfile user={user} /> : <ButtonsUser />}
      </nav>
    </div>
  );
};
