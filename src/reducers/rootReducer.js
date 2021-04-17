import { combineReducers } from "redux";

import forecastReducer from "./forecastReducer";
import themeReducer from "./themeReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  forecast: forecastReducer,
  style: themeReducer,
  search: searchReducer,
});

export default rootReducer;
