import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { SearchInput } from "./SearchTracks.styled";

const SearchTracks = ({
  handleSearchTracks,
  marginTop,
  marginLeft,
  marginRight,
  width,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const query = inputValue.trim();
      handleSearchTracks(query, isInputActive);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [handleSearchTracks, inputValue, isInputActive]);

  const handleTextChange = (e) => {
    e.preventDefault();
    const inputValue = e.currentTarget.value;
    setInputValue(inputValue);
  };

  return (
    <SearchInput
      type="text"
      placeholder="Пошук"
      value={inputValue}
      onChange={handleTextChange}
      onFocus={() => setIsInputActive(true)}
      onBlur={() => setIsInputActive(false)}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      width={width}
    />
  );
};

SearchTracks.propTypes = {
  handleSearchTracks: PropTypes.func,
  marginTop: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  width: PropTypes.string,
};

export default SearchTracks;
