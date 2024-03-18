import { useState, useEffect, useMemo } from "react";
// import { useGetUsersListQuery } from "../../../redux/dataUsersSlice";

import {
  SearchUsersContainer,
  Input,
  TitleTab,
  TextLoader,
  TextInfo,
} from "./SearchUsers.styled";
import UsersTable from "../UsersTable/UsersTable";
import { SearchInput } from "./SearchInput";

export const SearchUsers = ({
  dataUsers,
  isLoading,
  titleDefault,
  visibleColumns,
  pageType,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [showNoResults, setShowNoResults] = useState(false);

  const isSearching = searchTerm.trim() !== "";
  const handleSearchTermChange = (value) => {
    setSearchTerm(value);
  };

  const title = isSearching
    ? searchResults.length > 0
      ? "Результати пошуку:"
      : "Результати пошуку:"
    : titleDefault;

  useEffect(() => {
    setSearchResults(dataUsers);
  }, [dataUsers]);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const filteredResults = dataUsers.filter((user) => {
        return (
          user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.contractNumber?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

      setSearchResults(filteredResults);
      setShowNoResults(filteredResults.length === 0);
    } else {
      setSearchResults(dataUsers);
      setShowNoResults(false);
    }
  }, [searchTerm, dataUsers]);

  return (
    <>
      <SearchUsersContainer>
        <TitleTab>{title}</TitleTab>
        <SearchInput
          onSearchTermChange={handleSearchTermChange}
          pageType={pageType}
        />
      </SearchUsersContainer>
      {isLoading ? (
        <TextLoader>Завантаження...</TextLoader>
      ) : searchResults.length === 0 && showNoResults ? (
        <>
          <TextInfo> не знайдено</TextInfo>
        </>
      ) : (
        <>
          <UsersTable users={searchResults} visibleColumns={visibleColumns} />
        </>
      )}
    </>
  );
};
