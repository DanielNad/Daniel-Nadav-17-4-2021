import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import DarkThemeProvider from "./components/DarkThemeProvider";
import store from "./store";
import Main from "./pages/Main";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import { GlobalStyles } from "./themes.js";

export default function App() {
  const { hasError, message } = useSelector((state) => state.error);
  return (
    <div>
      <DarkThemeProvider theme={store.getState().style.theme}>
        <GlobalStyles />
        <Router>
          {hasError && message && <Error message={message} />}
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
          </Switch>
        </Router>
      </DarkThemeProvider>
    </div>
  );
}
