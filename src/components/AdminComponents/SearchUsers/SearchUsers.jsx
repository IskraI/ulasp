import { useState, useMemo } from 'react';
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
import SortUsers from '../SortUsers/SortUsers';

export const SearchUsers = ({
  dataUsers,
  isLoading,
  titleDefault,
  visibleColumns,
  pageType,
  showSortOptions = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(dataUsers || []);
  const [sortedData, setSortedData] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);

  const handleSearchTermChange = (value) => {
    setSearchTerm(value);
  };

  useMemo(() => {
    if (searchTerm.trim() !== '') {
      const filtered = dataUsers.filter((user) =>
        [user.name, user.firstName, user.lastName, user.contractNumber]
          .filter(Boolean)
          .some((field) =>
            field.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
      setFilteredData(filtered);
      setShowNoResults(filtered.length === 0);
    } else {
      setFilteredData(dataUsers);
      setShowNoResults(false);
    }
  }, [searchTerm, dataUsers]);

  const sortOptions = [
    { key: 1, value: 'defaultValue', title: 'По замовчуванню' },
    { key: 2, value: 'asc', title: 'Кількість прослуховувань (від меншого)' },
    { key: 3, value: 'desc', title: 'Кількість прослуховувань (від більшого)' }
  ];

  return (
    <>
      <SearchUsersContainer>
        <SortUsers
          handleChange={setSortedData}
          data={filteredData}
          showSortOptions={showSortOptions}
          options={sortOptions}
          field={'listenCount'}
        />
        <TitleTab>
          {searchTerm.trim() !== '' ? 'Результати пошуку:' : titleDefault}
        </TitleTab>
        <SearchInput
          onSearchTermChange={handleSearchTermChange}
          pageType={pageType}
        />
      </SearchUsersContainer>

      {isLoading ? (
        <TextLoader>Завантаження...</TextLoader>
      ) : sortedData.length === 0 && showNoResults ? (
        <TextInfo>не знайдено</TextInfo>
      ) : (
        <UsersTable users={sortedData} visibleColumns={visibleColumns} />
      )}
    </>
  );
};
