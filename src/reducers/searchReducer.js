import {
  UPDATE_QUERY,
  UPDATE_SUGGESTIONS,
} from "../constants/searchActionType";

const initialState = {
  query: "",
  suggestions: [],
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_QUERY:
      return { ...state, query: action.payload };
    case UPDATE_SUGGESTIONS:
      return { ...state, suggestions: action.payload };
    default:
      return state;
  }
}
