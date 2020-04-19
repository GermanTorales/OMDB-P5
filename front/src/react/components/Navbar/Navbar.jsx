import React from "react";
import { Link } from "react-router-dom";
import ButtonsUser from "./inside/ButtonsUser";
import ButtonUserProfile from "./inside/ButtonUserProfile";
import { Nav, Home, Title, ToggleButtons } from "./style";

export default ({ user }) => {
  return (
    <Nav>
      <Home>
        <Link style={{ textDecoration: "none" }} to="/">
          <Title>OMDB</Title>
        </Link>
      </Home>
      <ToggleButtons>
        {user.name ? <ButtonUserProfile user={user} /> : <ButtonsUser />}
      </ToggleButtons>
    </Nav>
  );
};
