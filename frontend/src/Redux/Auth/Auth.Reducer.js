import { Get_Local, Remove_Local, Set_Local } from "../../utils/localData";
import {
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_REQ,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGOUT,
} from "./Auth.type";

const initialState = {
  alert: "",
  is_loading: false,
  is_error: false,
  auth: false,
};

export const SignupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQ: {
      return { ...state, is_loading: true };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, is_loading: false, auth: true,alert:payload };
    }
    case SIGNUP_FAILED: {
      return { ...state, is_loading: false, is_error: true };
    }

    default: {
      return state;
    }
  }
};


const initialState2 = {
  token_id:Get_Local("token_id"),
  is_loading: false,
  is_error: false,
  auth: false,
};

export const LoginReducer = (state = initialState2, { type, payload }) => {
  switch (type) {
    case LOGIN_REQ: {
      return { ...state, is_loading: true };
    }
    case LOGIN_SUCCESS: {
      Set_Local("token_id",payload)
      return { ...state, is_loading: false, auth: true, token_id:payload };
    }
    case LOGIN_FAILED: {
      return { ...state, is_loading: false, is_error: true };
    }
      
    case LOGOUT: {
      Remove_Local("token_id");
      return { ...state, is_loading: false, auth: false, token_id:null };
      }

    default: {
      return state;
    }
  }
};