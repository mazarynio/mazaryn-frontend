import { GLOBAL_ERROR, GLOBAL_WARNING, GLOBAL_SUCCESS, GLOBAL_INFO } from "../types";

const INITIAL_STATE = {
  globalError: null,
  globalWarning: null,
  globalSuccess: null,
  globalInfo: null,
};

export default function commonReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GLOBAL_ERROR:
      return { ...state, globalError: action.payload };
    case GLOBAL_SUCCESS:
      return { ...state, globalSuccess: action.payload };
    case GLOBAL_WARNING:
      return { ...state, globalWarning: action.payload };
    case GLOBAL_INFO:
      return { ...state, globalInfo: action.payload };
    default:
      return state;
  }
}
