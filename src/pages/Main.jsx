import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Forecast from "../components/Forecast";
import SearchBar from "../components/Searchbar";
import BackgroundImage from "../components/BackgroundImage";
import { Container } from "./styles/Main";
import {
  getUserLocation,
  getDefaultLocation,
} from "../middlewares/accuweatherApi";

export default function Main() {
  const dispatch = useDispatch();
  const { key } = useSelector((state) => state.forecast);

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
      <Forecast />
    </Container>
  );
}
