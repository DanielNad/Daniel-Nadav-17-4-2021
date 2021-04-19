import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Header,
  ToggleContainer,
  Grid,
  CheckBox,
  CheckBoxLabel,
} from "./styles/Forecast";
import moment from "moment";
import GridHeader from "./GridHeader";
import MainGridItem from "./MainGridItem";
import GridItem from "./GridItem";
import { Loading } from "./styles/Loading";
import { toggleMetric } from "../actionsCreators/cToFActions";

export default function Forecast() {
  const { fiveDaysForecast, currentCondition } = useSelector(
    (state) => state.forecast
  );
  const { hasError } = useSelector((state) => state.error);
  const { temperature } = useSelector((state) => state);
  const dispatch = useDispatch();

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

  const handleClick = () => {
    dispatch(toggleMetric(!temperature));
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
      <ToggleContainer>
        <h6>Celsius</h6>
        <CheckBox
          id="CtoF"
          type="checkbox"
          isCelsius={temperature}
          onClick={handleClick}
          defaultChecked={!temperature}
        />
        <CheckBoxLabel htmlFor="CtoF" />
        <h6>Fahrenheit</h6>
      </ToggleContainer>
      <Grid>
        <Header>
          <div>{moment().format("dddd")}</div>
          <div>{moment().format("MMM Do")}</div>
        </Header>
        {render && renderHeaders()}
        <MainGridItem />
        {render > 0 && renderItems()}
      </Grid>
    </Container>
  ) : (
    <Loading hasError={hasError} />
  );
}
