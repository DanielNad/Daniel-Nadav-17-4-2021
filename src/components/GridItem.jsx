import { Container } from "./styles/GridItem";
import { Image } from "./styles/Forecast";

export default function GridItem({
  index,
  minTemp,
  maxTemp,
  dayIcon,
  nightIcon,
}) {
  return (
    <Container index={index}>
      <Image
        src={`https://www.accuweather.com/images/weathericons/${dayIcon}.svg`}
        alt="day icon"
      />
      <h5>{maxTemp + ", C"}</h5>
      <Image
        src={`https://www.accuweather.com/images/weathericons/${nightIcon}.svg`}
        alt="night icon"
      />
      <h5>{minTemp + ", C"}</h5>
    </Container>
  );
}
