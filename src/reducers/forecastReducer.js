import {
  UPDATE_KEY,
  UPDATE_CURRENT_CONDITION,
  UPDATE_5_DAYS_FORECAST,
} from "../constants/forecastActionTypes";

const initialState = {
  key: "",
  currentCondition: null,
  fiveDaysForecast: [],
};

export default function forecastReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_KEY:
      return { ...state, key: action.payload };
    case UPDATE_CURRENT_CONDITION:
      return { ...state, current: action.payload };
    case UPDATE_5_DAYS_FORECAST:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
}
