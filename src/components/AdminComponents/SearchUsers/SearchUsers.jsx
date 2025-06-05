import { useState, useEffect, useMemo } from 'react';
// import { useGetUsersListQuery } from "../../../redux/dataUsersSlice";

import {
  SearchUsersContainer,
  Input,
  TitleTab,
  TextLoader,
  TextInfo
} from './SearchUsers.styled';
import UsersTable from '../UsersTable/UsersTable';
import { SearchInput } from './SearchInput';

export const SearchUsers = ({
  dataUsers,
  isLoading,
  titleDefault,
  visibleColumns,
  pageType
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [showNoResults, setShowNoResults] = useState(false);

  const isSearching = searchTerm.trim() !== '';
  const handleSearchTermChange = (value) => {
    setSearchTerm(value);
  };

  const title = isSearching
    ? searchResults.length > 0
      ? 'Результати пошуку:'
      : 'Результати пошуку:'
    : titleDefault;

  useEffect(() => {
    setSearchResults(dataUsers);
  }, [dataUsers]);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
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

  const [sortOrder, setSortOrder] = useState();

  const handleChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);

    if (value === 'asc') {
      const sorted = [...dataUsers].sort(
        (a, b) => (a.listenCount || 0) - (b.listenCount || 0)
      );
      setSearchResults(sorted);
    } else if (value === 'desc') {
      const sorted = [...dataUsers].sort(
        (a, b) => (b.listenCount || 0) - (a.listenCount || 0)
      );
      setSearchResults(sorted);
    } else {
      setSearchResults(dataUsers);
    }
  };

  return (
    <>
      <SearchUsersContainer>
        <label htmlFor="sortOrder">Сортировка:</label>
        <select name="sortOrder" value={sortOrder} onChange={handleChange}>
          <option value="" selected>
            По замовчуванню
          </option>
          <option value="asc">Кількість прослуховувань (від меншого)</option>
          <option value="desc">Кількість прослуховувань (від більшого)</option>
        </select>
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
