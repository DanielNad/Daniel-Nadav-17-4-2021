import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Forecast from "../components/Forecast";
import SearchBar from "../components/Searchbar";
import BackgroundImage from "../components/BackgroundImage";
import { Container, ToggleContainer } from "./styles/Main";
import { CheckBox, CheckBoxLabel } from "../components/styles/Navbar";
import {
  getUserLocation,
  getDefaultLocation,
} from "../middlewares/accuweatherApi";
import { toggleMetric } from "../actionsCreators/cToFActions";

export default function Main() {
  const dispatch = useDispatch();
  const { key } = useSelector((state) => state.forecast);
  const { temperature } = useSelector((state) => state);

  const handleClick = () => {
    dispatch(toggleMetric(!temperature));
  };

  useEffect(() => {
    if (!key) {
      if (!navigator.geolocation) {
        getDefaultLocation(215854, "Tel Aviv");
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => dispatch(getUserLocation(position)),
          () => dispatch(getDefaultLocation(215854, "Tel Aviv"))
        );
      }
    }
  }, [dispatch, key]);

  return (
    <Container>
      <BackgroundImage />
      <SearchBar />
      <ToggleContainer>
        <h6>Celsius</h6>
        <CheckBox id="CtoF" type="checkbox" onClick={handleClick} />
        <CheckBoxLabel htmlFor="CtoF" />
        <h6>Fahrenheit</h6>
      </ToggleContainer>
      <Forecast />
    </Container>
  );
}
