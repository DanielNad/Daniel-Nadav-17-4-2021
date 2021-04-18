import {
  UPDATE_QUERY,
  UPDATE_SUGGESTIONS,
} from "../constants/searchActionType";

const updateQuery = (query) => ({
  type: UPDATE_QUERY,
  payload: query,
});

const updateSuggestions = (suggestions) => ({
  type: UPDATE_SUGGESTIONS,
  payload: suggestions,
});

export { updateQuery, updateSuggestions };
