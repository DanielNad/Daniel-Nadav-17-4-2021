import { Container } from "./styles/Suggestion";
import { useDispatch } from "react-redux";
import { updateKey } from "../actions/forecastActions";
import { updateQuery } from "../actions/searchActions";

export default function Suggestion({ Key, name }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateQuery(name));
    dispatch(updateKey(Key));
  };

  return <Container onClick={handleClick}>{name}</Container>;
}
