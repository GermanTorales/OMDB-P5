import React from "react";
import { Link } from "react-router-dom";
import { Button, NotUser } from "../style";

export default () => (
  <NotUser>
    <Link style={{ textDecoration: "none" }} to="/signup">
      <Button>Sign Up</Button>
    </Link>
    <Link style={{ textDecoration: "none" }} to="/signin">
      <Button>Sign In</Button>
    </Link>
  </NotUser>
);
