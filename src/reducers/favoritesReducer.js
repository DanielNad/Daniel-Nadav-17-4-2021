import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../constants/favoritesActionType";

export default function favoritesReducer(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    case REMOVE_FAVORITE:
      return state.filter((city) => city.key !== action.payload);
    default:
      return state;
  }
}
