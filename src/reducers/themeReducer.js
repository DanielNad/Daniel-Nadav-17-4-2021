import { TOGGLE_THEME } from "../constants/themeActionTypes";
import { lightTheme, darkTheme } from "../themes";

const initialState = {
  theme: lightTheme,
};

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return { theme: state.theme === lightTheme ? darkTheme : lightTheme };
    default:
      return state;
  }
}
