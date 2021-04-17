import { Image } from "./styles/Forecast";

export default function GridItem({ minTemp, maxTemp, dayIcon, nightIcon }) {
  return (
    <div>
      {maxTemp}
      <Image
        src={`https://www.accuweather.com/images/weathericons/${dayIcon}.svg`}
        alt="day icon"
      />
      {minTemp}
      <Image
        src={`https://www.accuweather.com/images/weathericons/${nightIcon}.svg`}
        alt="night icon"
      />
    </div>
  );
}
