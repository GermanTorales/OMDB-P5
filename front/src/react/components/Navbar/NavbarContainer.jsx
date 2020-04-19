import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";

const NavbarContainer = ({ user }) => {
  return <Navbar user={user} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps, null)(NavbarContainer);
