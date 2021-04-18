import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../constants/favoritesActionType";

const addFavorite = (key, favorite) => ({
  type: ADD_FAVORITE,
  payload: { key, ...favorite },
});

const removeFavorite = (key) => ({
  type: REMOVE_FAVORITE,
  payload: key,
});

export { addFavorite, removeFavorite };
