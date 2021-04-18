import { SET_IMAGES } from "../constants/backgroundActionType";

export default function backgroundImageReducer(state = [], action) {
  switch (action.type) {
    case SET_IMAGES:
      return action.payload;
    default:
      return state;
  }
}
