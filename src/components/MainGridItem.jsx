import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../actionsCreators/favoritesActions";
import { Image } from "./styles/Forecast";
import {
  Container,
  InnerContainer,
  Button,
  HeartImage,
} from "./styles/MainGridItem";

export default function MainGridItem() {
  const { key, currentCondition } = useSelector((state) => state?.forecast);
  const favorites = useSelector((state) => state.favorites);
  const { name, Temperature, WeatherIcon } = currentCondition;
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    let seen = false;
    favorites?.forEach((favorite) => {
      if (favorite.key === key) {
        seen = true;
        return;
      }
    });
    setIsFavorite(seen);
  }, [key, favorites]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleClick = () => {
    if (isFavorite) dispatch(removeFavorite(key));
    else dispatch(addFavorite(key, { name, Temperature, WeatherIcon }));
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <Container>
      <InnerContainer>
        <h3>{name}</h3>
        <Button onClick={handleClick} show={isFavorite}>
          <HeartImage alt="heart" isFavorite={isFavorite} />
        </Button>
      </InnerContainer>
      <InnerContainer>
        {WeatherIcon && (
          <Image
            src={`https://www.accuweather.com/images/weathericons/${WeatherIcon}.svg`}
            alt="icon"
          />
        )}
        <h5>{Temperature?.Metric?.Value + ", C"}</h5>
      </InnerContainer>
    </Container>
  );
}
