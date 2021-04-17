import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuery, updateSuggestions } from "../actions/searchActions";
import {
  getCurrentConditions,
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
        const results = await autoComplete(query);
        dispatch(updateSuggestions(results));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [query, dispatch]);

  return (
    <Container>
      <SearchContainer>
        <Search
          type="text"
          placeholder="Search Location..."
          value={query}
          onChange={(e) => dispatch(updateQuery(e.target.value))}
        />
        <Button type="submit" onClick={dispatch(getCurrentConditions())}>
          Search
        </Button>
      </SearchContainer>
      {suggestions.length > 0 && <SuggestionList data={suggestions} />}
    </Container>
  );
}
