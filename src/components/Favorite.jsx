import { useDispatch } from "react-redux";
import { getDefaultLocation } from "../middlewares/accuweatherApi";
import { Link } from "react-router-dom";
import { Image } from "./styles/Forecast";
import { Container, Button } from "./styles/Favorite";

export default function Favorite({ Key, name, weatherIcon, temp }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getDefaultLocation(Key, name));
  };
  return (
    <Container>
      <h3>{name}</h3>
      <Image
        src={`https://www.accuweather.com/images/weathericons/${weatherIcon}.svg`}
        alt="icon"
      />
      <h5>{temp.Metric}</h5>
      <Link to={"/"} onClick={handleClick}>
        <Button>Show Weather</Button>
      </Link>
    </Container>
  );
}
