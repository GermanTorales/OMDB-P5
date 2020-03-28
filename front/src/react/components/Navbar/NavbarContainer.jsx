import React from "react";
import Navbar from "./Navbar";
import { Nav } from "./style";

const NavbarContainer = ({ user }) => {
  return (
    <Nav>
      <Navbar user={user} />
    </Nav>
  );
};

export default NavbarContainer;
