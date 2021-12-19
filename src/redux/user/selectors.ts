import { createSelector } from "reselect";
import { rootState } from "../reducer";
import { userState } from "./types";

const userSelector = (state: rootState) => state.user;

export const userInfoSelector = createSelector(
  userSelector,
  (userState: userState) => userState.info
);

export const userTokenSelector = createSelector(
  userInfoSelector,
  (user) => user.token
);

export const userUsernameSelector = createSelector(
  userInfoSelector,
  (user) => user.username
);
