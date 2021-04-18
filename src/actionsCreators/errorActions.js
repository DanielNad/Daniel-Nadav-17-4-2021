import { UPDATE_ERROR } from "../constants/errorActionType";

const updateError = (hasError, message) => ({
  type: UPDATE_ERROR,
  payload: {
    hasError: hasError,
    message: message,
  },
});

export { updateError };
