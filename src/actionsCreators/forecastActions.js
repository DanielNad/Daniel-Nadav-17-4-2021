import {
  UPDATE_KEY,
  UPDATE_CURRENT_CONDITION,
  UPDATE_5_DAYS_FORECAST,
} from "../constants/forecastActionTypes";

const updateKey = (key) => ({
  type: UPDATE_KEY,
  payload: key,
});

const updateCurrentCondition = (currentCondition) => ({
  type: UPDATE_CURRENT_CONDITION,
  payload: currentCondition,
});

const update5DaysForecast = (fiveDaysForecast) => ({
  type: UPDATE_5_DAYS_FORECAST,
  payload: fiveDaysForecast,
});

export { updateKey, updateCurrentCondition, update5DaysForecast };
