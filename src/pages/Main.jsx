import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Forecast from "../components/Forecast";
import SearchBar from "../components/Searchbar";
import { Container } from "./styles/Main";
import {
  getUserLocation,
  getDefaultLocation,
} from "../middlewares/accuweatherApi";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!navigator.geolocation) {
      getDefaultLocation();
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => dispatch(getUserLocation(position)),
        () => dispatch(getDefaultLocation())
      );
    }
  }, [dispatch]);

  return (
    <Container>
      <SearchBar />
      <Forecast />
    </Container>
  );
}
