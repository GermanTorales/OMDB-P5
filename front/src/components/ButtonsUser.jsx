import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="">
    <Link to="/signup">
      <button className="btn  btn-outline-primary mr-2">Sign Up</button>
    </Link>
    <Link to="/signin">
      <button className="btn  btn-outline-primary">Sign In</button>
    </Link>
  </div>
);
