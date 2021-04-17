import { useSelector } from "react-redux";
import Suggestion from "./Suggestion";
import { Suggestions } from "./styles/SuggestionList";

export default function SuggestionList({ data }) {
  const { suggestions } = useSelector((state) => state.search);

  const renderSuggestions = () => {
    return (
      <Suggestions>
        {data.map((suggestion) => (
          <Suggestion
            key={suggestion.Key}
            Key={suggestion.Key}
            city={suggestion.LocalizedName}
            country={suggestion.Country.LocalizedName}
          />
        ))}
      </Suggestions>
    );
  };

  return suggestions?.length > 0 && renderSuggestions();
}
