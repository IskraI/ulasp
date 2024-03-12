import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { SearchInput } from "./SearchTracks.styled";

const SearchTracks = ({ handleSearchTracks }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const query = inputValue.trim();
      handleSearchTracks(query);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [handleSearchTracks, inputValue]);

  const handleTextChange = (e) => {
    const inputValue = e.currentTarget.value;
    setInputValue(inputValue);
  };

  return (
    <SearchInput
      type="text"
      placeholder="Пошук"
      value={inputValue}
      onChange={handleTextChange}
    />
  );
};

SearchTracks.propTypes = {
  handleSearchTracks: PropTypes.func,
};

export default SearchTracks;
