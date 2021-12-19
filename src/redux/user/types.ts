import { Action } from "redux";
import { User } from "../../models/user/types";

export interface userState {
  info: Omit<Partial<User>, "password">;
}

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_REQUESTED = "SIGNIN_REQUESTED";
export const SIGNIN_ERROR = "SIGNIN_ERROR";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_REQUESTED = "LOGOUT_REQUESTED";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export interface userSigninRequested extends Action {
  type: typeof SIGNIN_REQUESTED;
  payload: Partial<User>;
}

export interface userSigninSuccess extends Action {
  type: typeof SIGNIN_SUCCESS;
  payload: User;
}

export interface userLoginRequested extends Action {
  type: typeof LOGIN_REQUESTED;
  payload: Partial<User>;
}

export interface userLoginSuccess extends Action {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}

export interface userLogoutSuccess extends Action {
  type: typeof LOGOUT_SUCCESS;
}

export type userAction =
  | userLoginSuccess
  | userLogoutSuccess
  | userSigninRequested
  | userSigninSuccess;
