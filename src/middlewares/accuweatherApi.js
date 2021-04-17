import accuweather from "../configs/api";
import {
  updateCurrentCondition,
  update5DaysForecast,
} from "../actions/forecastActions";

// TODO: Error handling

const autoComplete = async (cityName) => {
  try {
    const result = await accuweather("/locations/v1/cities/autocomplete", {
      params: {
        q: cityName,
      },
    });
    if (result.status !== 200 || !result?.data) throw new Error("Api error");
    return result.data;
  } catch (error) {}
};

const getCurrentConditions = () => {
  return async (dispatch, getState) => {
    try {
      const { key } = getState().forecast;
      if (key === null) throw new Error("No key was provided");
      const result = await accuweather(`/currentconditions/v1/${key}`);
      if (result.status !== 200 || !result?.data) throw new Error("Api error");
      dispatch(updateCurrentCondition(result.data)); //TODO: Take what i'll need
    } catch (error) {}
  };
};

const get5DailyForecast = () => {
  return async (dispatch, getState) => {
    try {
      const { forecast } = getState();
      if (forecast.current === null) throw new Error("No city was provided");
      const result = await forecast(`forecasts/v1/daily/5day/${forecast.id}`);
      if (result.status !== 200 || !result?.data) throw new Error("Api error.");
      dispatch(update5DaysForecast(result.data)); //TODO: Take what i'll need
    } catch (error) {}
  };
};

export { autoComplete, getCurrentConditions, get5DailyForecast };
