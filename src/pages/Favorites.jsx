import { useSelector } from "react-redux";
import Favorite from "../components/Favorite";
import { Container } from "./styles/Favorites";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  const renderFavorites = () => {
    return (
      <Container>
        {favorites.map((favorite) => (
          <Favorite
            key={favorite.key}
            Key={favorite.key}
            name={favorite.name}
            weatherIcon={favorite.WeatherIcon}
            temp={favorite.Temperature.Metric}
          />
        ))}
      </Container>
    );
  };

  return (
    <div>{favorites?.length > 0 ? renderFavorites() : <Container>No current Favorites</Container>}</div>
  );
}
