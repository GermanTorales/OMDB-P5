import Axios from "axios";
import { USER_LOGGIN } from "../constants";

const setUser = user => {
  return {
    type: USER_LOGGIN,
    user
  };
};

export const createUser = function(firstName, lastName, email, password) {
  return function(dispatch) {
    return Axios.post("/auth/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }).then(res => {
      if (res.data && res.data.name == "SequelizeUniqueConstraintError") {
        return true;
      } else {
        dispatch(setUser(res.data));
        return false;
      }
    });
  };
};

export const loggingUsers = function(email, password) {
  return function(dispatch) {
    return Axios.post("/auth/signin", { email, password })
      .then(res => {
        dispatch(setUser(res.data));
      })
      .catch(err => err.response);
  };
};

export const fetchUser = function() {
  return function(dispatch) {
    Axios.get("/session")
      .then(res => res.data)
      .then(user => dispatch(setUser(user)));
  };
};
