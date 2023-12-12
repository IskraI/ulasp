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
const user = {
  _id: {
    $oid: "653d71507a484cf7a52cb57a",
  },
  firstName: "Про",
  lastName: "Про",
  taxCode: "$2b$10$8uCq8.7EazWa4kIHllsDVuiCNO9QrSui.koMET3ycZ0oi2umWrtBy",
  dayOfBirthday: "10.10.2010",
  contractNumber: "TEST234459",
  accessToken: "",
  refreshToken: "",
  avatarURL: null,
  userFop: true,
  telNumber: "+380501413134",
  email: "iw2@ua.com",
  contactFace: "Юзер4 Юзеров4",
  taxCodeContactFace: "9308797531",
  telNumberContactFace: "+380303154404",
  emailContactFace: "ia4@ua.com",
  status: "false",
  dateOfAccess: "0",
  lastPay: "10.10.2020",
  quantityPlaylists: 0,
  quantitySongs: 0,
  kind: "fop",
  createdAt: {
    $date: "2023-10-28T20:38:40.906Z",
  },
  updatedAt: {
    $date: "2023-10-28T20:38:40.906Z",
  },
};

export const SearchUsers = ({dataUsers, isLoading, titleDefault, visibleColumns, pageType}) => {
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
              
        return (user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
        <SearchInput onSearchTermChange={handleSearchTermChange} pageType={pageType} />
      
      </SearchUsersContainer>
      {isLoading ? (
        <TextLoader>Завантаження...</TextLoader>
      ) : searchResults.length === 0 && showNoResults ? (
        <>
          <TextInfo> не знайдено</TextInfo>
        </>
      ) : (
                <UsersTable users={searchResults} visibleColumns={visibleColumns} />
   
      )}
    </>
  );
};
