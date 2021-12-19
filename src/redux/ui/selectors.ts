import { createSelector } from "reselect";
import { rootState } from "../reducer";

export const uiSelector = (state: rootState) => state.ui;

export const loadingSelector = createSelector(
  uiSelector,
  (ui) => ui.loading.length > 0
);
