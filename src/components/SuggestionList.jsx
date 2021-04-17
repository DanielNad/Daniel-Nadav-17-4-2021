import Suggestion from "./Suggestion";
import { Suggestions } from "./styles/SuggestionList";

export default function SuggestionList({ data }) {
  const renderSuggestions = () => {
    return data.map((suggestion) => (
      <Suggestion
        key={suggestion.Key}
        Key={suggestion.Key}
        name={suggestion.LocalizedName}
      />
    ));
  };

  return <Suggestions>{renderSuggestions()}</Suggestions>;
}
