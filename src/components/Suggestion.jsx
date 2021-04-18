import { Container, Paragraph } from "./styles/Suggestion";
import { useDispatch } from "react-redux";
import { updateKey } from "../actionsCreators/forecastActions";
import { updateQuery } from "../actionsCreators/searchActions";

export default function Suggestion({ Key, city, country }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateQuery(`${city}, ${country}`));
    dispatch(updateKey(Key));
  };

  return (
    <Container onClick={handleClick}>
      <Paragraph>{`${city}, ${country}`}</Paragraph>
    </Container>
  );
}
