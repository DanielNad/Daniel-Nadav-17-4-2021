import { combineReducers } from "redux";

import forecastReducer from "./forecastReducer";
import themeReducer from "./themeReducer";
import searchReducer from "./searchReducer";
import favoritesReducer from "./favoritesReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  forecast: forecastReducer,
  style: themeReducer,
  search: searchReducer,
  favorites: favoritesReducer,
  error: errorReducer,
});

export default rootReducer;
