import axios from "axios";
import {
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_REQ,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGOUT,
} from "./Auth.type";

// Signup Dispatchers

const Signup_Req = () => {
  return { type: SIGNUP_REQ };
};

const Signup_success = (payload) => {
  return { type: SIGNUP_SUCCESS, payload };
};

const Signup_Failed = () => {
  return { type: SIGNUP_FAILED };
};

// Login Dispatchers

const LOGIN_Req = () => {
  return { type: LOGIN_REQ };
};

const LOGIN_success = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

const LOGIN_Failed = () => {
  return { type: LOGIN_FAILED };
};

const Logout_Req = () => {
  return { type: LOGOUT };
};

// Actions for Login & Signup

export const SIGNUP = (data) => async (dispatch) => {
  console.log("dispatch")
  dispatch(Signup_Req());
  try {
    let res = await axios.post("https://drab-cyan-armadillo-slip.cyclic.app/user/signup", data);
    dispatch(Signup_success(res.data));
  } catch (err) {
    dispatch(Signup_Failed());
  }
};

export const LOGIN = (data) => async (dispatch) => {
  dispatch(LOGIN_Req());
  try {
    let res = await axios.post("https://drab-cyan-armadillo-slip.cyclic.app/user/login", data);
    dispatch(LOGIN_success(res.data));
  } catch (err) {
    dispatch(LOGIN_Failed());
  }
};

export const Logout = () => (dispatch) => {
  dispatch(Logout_Req());
};
