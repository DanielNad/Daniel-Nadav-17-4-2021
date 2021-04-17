import {
  UPDATE_KEY,
  UPDATE_CURRENT_CONDITION,
  UPDATE_5_DAYS_FORECAST,
} from "../constants/forecastActionTypes";

const initialState = {
  key: "",
  currentCondition: { name: "Tel Aviv" },
  fiveDaysForecast: null,
};

export default function forecastReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_KEY:
      return { ...state, key: action.payload };
    case UPDATE_CURRENT_CONDITION:
      return { ...state, currentCondition: action.payload };
    case UPDATE_5_DAYS_FORECAST:
      return { ...state, fiveDaysForecast: action.payload };
    default:
      return state;
  }
}
