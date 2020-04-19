import React from "react";
import { Link } from "react-router-dom";
import { ButtonUser } from "../style";

export default ({ user }) => (
  <div>
    <Link style={{ textDecoration: "none" }} to="/profile">
      <ButtonUser>{user.name}</ButtonUser>
    </Link>
  </div>
);
