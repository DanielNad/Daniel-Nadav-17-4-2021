import { TOGGLE_METRIC } from "../constants/cToFActionType";

export default function temperatureReducer(state = true, action) {
  switch (action.type) {
    case TOGGLE_METRIC:
      return action.payload;
    default:
      return state;
  }
}
