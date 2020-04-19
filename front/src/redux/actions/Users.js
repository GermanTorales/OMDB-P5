import Axios from "axios";
import { USER_LOGGIN } from "../constants";

const setUser = (user) => {
  return {
    type: USER_LOGGIN,
    user,
  };
};

export const createUser = (data) => (dispatch) => {
  return Axios.post("/auth/signup", { data }).then((res) => {
    if (res.data && res.data.name == "SequelizeUniqueConstraintError") {
      return true;
    } else {
      dispatch(setUser(res.data));
      return false;
    }
  });
};

export const loggingUsers = (email, password) => (dispatch) => {
  return Axios.post("/auth/signin", {
    email: email,
    password: password,
  })
    .then((res) => {
      dispatch(setUser(res.data));
    })
    .catch((err) => err.response);
};

export const isLogin = () => (dispatch) => {
  Axios.get("/auth/islogin")
    .then((response) => response.data)
    .then((user) => dispatch(setUser(user)))
    .catch((err) => err.response);
};

export const fetchUser = () => (dispatch) => {
  Axios.get("/session")
    .then((res) => res.data)
    .then((user) => dispatch(setUser(user)));
};
