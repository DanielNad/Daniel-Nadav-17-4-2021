import { Container } from "./styles/Suggestion";
import { useDispatch } from "react-redux";
import { updateKey } from "../actions/forecastActions";
import { updateQuery } from "../actions/searchActions";

export default function Suggestion({ Key, city, country }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateQuery(city));
    dispatch(updateKey(Key));
  };

  return (
    <Container onClick={handleClick}>
      {city} , {country}
    </Container>
  );
}
