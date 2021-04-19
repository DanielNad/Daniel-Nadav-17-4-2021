import { combineReducers } from "redux";

import forecastReducer from "./forecastReducer";
import themeReducer from "./themeReducer";
import searchReducer from "./searchReducer";
import favoritesReducer from "./favoritesReducer";
import backgroundImageReducer from "./backgroundImagesReducer";
import temperatureReducer from "./cToFReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  forecast: forecastReducer,
  style: themeReducer,
  search: searchReducer,
  favorites: favoritesReducer,
  images: backgroundImageReducer,
  temperature: temperatureReducer,
  error: errorReducer,
});

export default rootReducer;
