import { TOGGLE_METRIC } from "../constants/cToFActionType";

const toggleMetric = (isCelsius) => ({
  type: TOGGLE_METRIC,
  payload: isCelsius,
});

export { toggleMetric };
