import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import DarkThemeProvider from "./components/DarkThemeProvider";
import store from "./store";
import Main from "./pages/Main";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
// import Error from "./components/Error";
// import Loading from "./components/Loading";
import { GlobalStyles } from "./themes.js";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <DarkThemeProvider theme={store.getState().style.theme}>
          <GlobalStyles />
          <Router>
            <Navbar />
            {/* <Error />
            <Loading /> */}
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
      </Provider>
    </div>
  );
}
