import { USER_LOGGIN } from "../constants";

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGIN:
      return { ...state, user: action.user };
    default:
      return state;
  }
};
