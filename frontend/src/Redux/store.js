import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { SignupReducer, LoginReducer } from "./Auth/Auth.Reducer";

const Reducers = combineReducers({ SignupReducer, LoginReducer });

export const store = legacy_createStore(Reducers, applyMiddleware(thunk));
