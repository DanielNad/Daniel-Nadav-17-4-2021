import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuery, updateSuggestions } from "../actions/searchActions";
import {
  getCurrentConditions,
  get5DailyForecast,
  autoComplete,
} from "../middlewares/accuweatherApi";
import SuggestionList from "./SuggestionList";
import { Container, SearchContainer, Search, Button } from "./styles/Searchbar";

export default function SearchBar() {
  const { query, suggestions } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.trim()) {
      const timer = setTimeout(async () => {
        dispatch(autoComplete(query));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [query, dispatch]);

  const handleInputChange = (e) => {
    dispatch(updateQuery(e.target.value));
    dispatch(updateSuggestions([]));
  };

  const handleClick = () => {
    dispatch(getCurrentConditions());
    dispatch(get5DailyForecast());
  };

  return (
    <Container>
      <SearchContainer>
        <Search
          type="text"
          placeholder="Search Location..."
          value={query}
          onChange={handleInputChange}
        />
        <Button type="submit" onClick={handleClick}>
          Search
        </Button>
      </SearchContainer>
      {suggestions && suggestions.length > 0 && (
        <SuggestionList data={suggestions} />
      )}
    </Container>
  );
}
