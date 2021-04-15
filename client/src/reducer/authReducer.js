import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../action/types";

let initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuth: false,
  error: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isAuth: true,
        errors: null,
      };
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: true,
        errors: action.payload,
      };
    default:
      return state;
  }
};
export default AuthReducer;
