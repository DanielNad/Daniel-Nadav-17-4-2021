import { accuweather, unsplash } from "../configs/api";
import {
  updateKey,
  updateCurrentCondition,
  update5DaysForecast,
} from "../actionsCreators/forecastActions";
import {
  updateQuery,
  updateSuggestions,
} from "../actionsCreators/searchActions";
import { setImages } from "../actionsCreators/backgroundImageActions";
import { updateError } from "../actionsCreators/errorActions";

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
      const { Key, LocalizedName, Country } = result.data;
      dispatch(updateKey(Key));
      dispatch(updateQuery(`${LocalizedName}, ${Country.LocalizedName}`));
      dispatch(getCurrentConditions());
      dispatch(get5DailyForecast());
      dispatch(getBackgroundImages());
    } catch (error) {
      dispatch(updateError(true, error.message));
    }
  };
};

const getDefaultLocation = (key, name) => {
  return async (dispatch) => {
    dispatch(updateKey(key));
    dispatch(updateQuery(name));
    dispatch(getCurrentConditions());
    dispatch(get5DailyForecast());
    dispatch(getBackgroundImages());
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
      dispatch(updateCurrentCondition({ name: query, ...result.data[0] }));
      dispatch(getBackgroundImages());
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
      dispatch(update5DaysForecast(result.data));
    } catch (error) {
      dispatch(updateError(true, error.message));
    }
  };
};

const getBackgroundImages = () => async (dispatch, getState) => {
  try {
    let city = getState().search.query;
    city = city?.substr(city?.indexOf(","), city?.length);
    if (!city) throw new Error("City not provided");
    const result = await unsplash({
      params: {
        query: city,
        per_page: "10",
      },
    });
    if (result.status !== 200 || !result?.data?.results)
      throw new Error("Api error");
    const data = result.data.results.map((image) => image.urls.full);
    dispatch(setImages(data));
  } catch (error) {
    dispatch(updateError(true, error.message));
  }
};

export {
  autoComplete,
  getUserLocation,
  getDefaultLocation,
  getCurrentConditions,
  get5DailyForecast,
  getBackgroundImages,
};
