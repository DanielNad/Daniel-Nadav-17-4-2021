import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Forecast from "../components/Forecast";
import SearchBar from "../components/Searchbar";
import { Container } from "./styles/Main";
import {
  getUserLocation,
  getDefaultLocation,
} from "../middlewares/accuweatherApi";

// TODO: Must: Responsive, C to F, Dropdown, Refactor. 
// TODO: Extras: Dribble , Dropdown,, change light Colors.

export default function Main() {
  const dispatch = useDispatch();
  const { key } = useSelector((state) => state.forecast);
  const { images } = useSelector((state) => state);
  const [imageIndex, setImageIndex] = useState(2);

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

  useEffect(() => {
    setTimeout(() => {
      let newIndex = Math.floor(Math.random() * images?.length);
      setImageIndex(newIndex);
    }, 7000);
  }, [imageIndex, images]);

  return (
    <Container image={images[imageIndex]}>
      <SearchBar />
      <Forecast />
    </Container>
  );
}
