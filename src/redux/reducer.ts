import { combineReducers } from "redux";
import { uiReducer } from "./ui/reducer";
import { uiState } from "./ui/types";
import { userReducer } from "./user/reducer";
import { userState } from "./user/types";

export type rootState = {
  user: userState;
  ui: uiState;
};

export const rootReducer = combineReducers<rootState>({
  user: userReducer,
  ui: uiReducer,
});
