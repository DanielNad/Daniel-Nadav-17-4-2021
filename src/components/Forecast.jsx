import { useSelector } from "react-redux";
import { Container, Header } from "./styles/Forecast";
import moment from "moment";
import GridHeader from "./GridHeader";
import MainGridItem from "./MainGridItem";
import GridItem from "./GridItem";
import { Loading } from "./styles/Loading";

export default function Forecast() {
  const { fiveDaysForecast, currentCondition } = useSelector(
    (state) => state.forecast
  );
  const { hasError } = useSelector((state) => state.error);

  const data = fiveDaysForecast?.DailyForecasts?.slice(
    1,
    fiveDaysForecast.length
  );

  const render = fiveDaysForecast?.DailyForecasts?.length > 0;

  const renderHeaders = () => {
    return data.map((day, index) => (
      <GridHeader key={index++} index={index} day={day.Date} />
    ));
  };

  const renderItems = () => {
    return data.map((day, index) => (
      <GridItem
        key={index}
        index={index}
        minTemp={day?.Temperature?.Minimum?.Value}
        maxTemp={day?.Temperature?.Maximum?.Value}
        dayIcon={day?.Day?.Icon}
        nightIcon={day?.Night?.Icon}
      />
    ));
  };

  return fiveDaysForecast && currentCondition ? (
    <Container>
      <Header>
        <div>{moment().format("dddd")}</div>
        <div>{moment().format("MMM Do")}</div>
      </Header>
      {render && renderHeaders()}
      <MainGridItem />
      {render > 0 && renderItems()}
    </Container>
  ) : (
    <Loading hasError={hasError} />
  );
}
