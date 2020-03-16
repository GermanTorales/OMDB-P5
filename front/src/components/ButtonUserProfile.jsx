import React from "react";
import { Link } from "react-router-dom";

export default ({ user }) => (
  <div className="">
    <Link to="/profile">
      <button className="btn  btn-outline-primary mr-2">
        {user.userFirstName}&nbsp;{user.userLastName}
      </button>
    </Link>
  </div>
);
