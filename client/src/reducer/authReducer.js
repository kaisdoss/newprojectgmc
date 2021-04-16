import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT,
} from "../action/types";

let initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isRegister: false,
  isAuth: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        errors: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegister: true,
        errors: null,
      };
    case LOGIN_FAIL:
    case LOAD_USER_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        errors: action.payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        errors: null,
        isAuth: true,
        isRegister: true,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        isAuth: false,
        errors: null,
        user: null,
        isRegister: false,
      };
    default:
      return state;
  }
};
