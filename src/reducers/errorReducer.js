import { UPDATE_ERROR } from "../constants/errorActionType";

const initialState = {
  hasError: false,
  message: null,
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ERROR:
      return {
        hasError: action.payload.hasError,
        message: action.payload.message,
      };
    default:
      return state;
  }
}
