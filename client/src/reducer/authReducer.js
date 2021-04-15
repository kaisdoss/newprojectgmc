import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../action/types';

let initialState = {
  isRegister: false,
  isAuth: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegister: true,
        errors: null,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        errors: null,
        isAuth: true,
      };
    case LOGIN_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};
