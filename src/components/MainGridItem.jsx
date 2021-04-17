import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../actions/favoritesActions";
import { Image } from "./styles/Forecast";
import { Button } from "./styles/MainGridItem";

export default function MainGridItem() {
  const { key, currentCondition } = useSelector((state) => state?.forecast);
  const { name, Temperature, WeatherIcon } = currentCondition;
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    let seen = false;
    favorites.forEach((favorite) => {
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
    <div>
      <Button onClick={handleClick} show={isFavorite} />
      {name},{Temperature?.Metric?.Value}
      {WeatherIcon && (
        <Image
          src={`https://www.accuweather.com/images/weathericons/${WeatherIcon}.svg`}
          alt="icon"
        />
      )}
    </div>
  );
}
