import moment from "moment";
import { Container } from "./styles/GridHeader";
export default function GridHeader({ index, day }) {
  return (
    <Container index={index}>{moment(day).format("dddd").toString()}</Container>
  );
}
