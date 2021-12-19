import {
  popLoadingSuccess,
  POP_LOADING,
  pushLoadingSuccess,
  PUSH_LOADING,
} from "./types";

export const pushLoading = (): pushLoadingSuccess => ({
  type: PUSH_LOADING,
});

export const popLoading = (): popLoadingSuccess => ({
  type: POP_LOADING,
});
