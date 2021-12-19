import { Action } from "redux";

export interface uiState {
  loading: boolean[];
}

export const PUSH_LOADING = "PUSH_LOADING";
export const POP_LOADING = "POP_LOADING";

export interface pushLoadingSuccess extends Action {
  type: typeof PUSH_LOADING;
}
export interface popLoadingSuccess extends Action {
  type: typeof POP_LOADING;
}

export type uiAction = pushLoadingSuccess | popLoadingSuccess;
