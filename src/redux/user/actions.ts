import { User } from "../../models/user/types";
import {
  LOGIN_REQUESTED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNIN_REQUESTED,
  SIGNIN_SUCCESS,
  userLoginRequested,
  userLoginSuccess,
  userLogoutSuccess,
  userSigninRequested,
  userSigninSuccess,
} from "./types";

export const loginRequested = (logUser: Partial<User>): userLoginRequested => ({
  type: LOGIN_REQUESTED,
  payload: logUser,
});

export const loginSuccess = (newUser: User): userLoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload: newUser,
});

export const logoutSuccess = (): userLogoutSuccess => ({
  type: LOGOUT_SUCCESS,
});

export const signinRequested = (
  signUser: Partial<User>
): userSigninRequested => ({
  type: SIGNIN_REQUESTED,
  payload: signUser,
});

export const signinSuccess = (newUser: User): userSigninSuccess => ({
  type: SIGNIN_SUCCESS,
  payload: newUser,
});
