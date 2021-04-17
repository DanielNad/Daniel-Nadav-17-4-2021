import accuweather from "../configs/api";
import {
  updateKey,
  updateCurrentCondition,
  update5DaysForecast,
} from "../actions/forecastActions";
import { updateQuery, updateSuggestions } from "../actions/searchActions";
import { updateError } from "../actions/errorActions";

// TODO: Error handling

const autoComplete = (cityName) => async (dispatch) => {
  try {
    const result = await accuweather("/locations/v1/cities/autocomplete", {
      params: {
        q: cityName,
      },
    });
    if (result.status !== 200 || !result?.data) throw new Error("Api error");
    dispatch(updateSuggestions(result.data));
  } catch (error) {
    dispatch(updateError(true, error.message));
  }
};

const getUserLocation = (position) => {
  return async (dispatch) => {
    try {
      const { latitude, longitude } = position?.coords;
      const result = await accuweather(
        "/locations/v1/cities/geoposition/search",
        {
          params: {
            q: `${latitude},${longitude}`,
          },
        }
      );
      const { Key, LocalizedName } = result.data;
      dispatch(updateKey(Key));
      dispatch(updateQuery(LocalizedName));
      dispatch(getCurrentConditions());
      dispatch(get5DailyForecast());
    } catch (error) {
      dispatch(updateError(true, error.message));
    }
  };
};

const getDefaultLocation = () => {
  return async (dispatch) => {
    dispatch(updateKey(215854));
    dispatch(updateQuery("Tel Aviv"));
    dispatch(getCurrentConditions());
    dispatch(get5DailyForecast());
  };
};

const getCurrentConditions = () => {
  return async (dispatch, getState) => {
    try {
      const { key } = getState().forecast;
      const { query } = getState().search;
      if (key === null) throw new Error("No key was provided");
      const result = await accuweather(`/currentconditions/v1/${key}`);
      if (result.status !== 200 || !result?.data) throw new Error("Api error");
      dispatch(updateCurrentCondition({ name: query, ...result.data[0] })); //TODO: Take what i'll need
    } catch (error) {
      dispatch(updateError(true, error.message));
    }
  };
};

const get5DailyForecast = () => {
  return async (dispatch, getState) => {
    try {
      const { key } = getState().forecast;
      if (key === null) throw new Error("No city was provided");
      const result = await accuweather(
        `forecasts/v1/daily/5day/${key}?metric=true`
      );
      if (result.status !== 200 || !result?.data) throw new Error("Api error.");
      dispatch(update5DaysForecast(result.data)); //TODO: Take what i'll need
    } catch (error) {
      dispatch(updateError(true, error.message));
    }
  };
};

export {
  autoComplete,
  getUserLocation,
  getDefaultLocation,
  getCurrentConditions,
  get5DailyForecast,
};
