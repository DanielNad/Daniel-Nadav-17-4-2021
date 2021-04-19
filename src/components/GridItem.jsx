import { useSelector } from "react-redux";
import { Container } from "./styles/GridItem";
import { Image } from "./styles/Forecast";
import cToF from "../utils/cToF";
export default function GridItem({
  index,
  minTemp,
  maxTemp,
  dayIcon,
  nightIcon,
}) {
  const { temperature } = useSelector((state) => state);
  return (
    <Container index={index}>
      <Image
        src={`https://www.accuweather.com/images/weathericons/${dayIcon}.svg`}
        alt="day icon"
      />
      <h5>{cToF(maxTemp, temperature)}</h5>
      <Image
        src={`https://www.accuweather.com/images/weathericons/${nightIcon}.svg`}
        alt="night icon"
      />
      <h5>{cToF(minTemp, temperature)}</h5>
    </Container>
  );
}
