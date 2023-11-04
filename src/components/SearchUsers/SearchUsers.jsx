
import { useState, useEffect } from "react";
 import { useGetUsersListQuery } from "../../redux/dataUsersSlice";

import {
  SearchUsersContainer,
  Input,
  Table,
  TableRow,
  TableCell,
  RowTitle,
  TitleTab,
  TextLoader,
  TextInfo,
} from "./SearchUsers.styled";


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

export const SearchUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading1, setIsLoading] = useState(false);
  const [showNoResults, setShowNoResults] = useState(false);
  const { data: users, isLoading } = useGetUsersListQuery();
 
  
  console.log(users);

 const filteredUsers = useMemo(() => {
    if (users) {
      return users.filter((user) => user.status === 'false');
    }
    return [];
 }, [users]);
  
  const isSearching = searchTerm.trim() !== "";
  
  const title = isSearching
    ? searchResults.length > 0
      ? "Результати пошуку:"
      : ""
    : "Чекають на підтвердження (посилання):";

  useEffect(() => {
    setSearchResults(filteredUsers);
  }, [filteredUsers]);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const filteredResults = filteredUsers.filter((user) => {
        return (
          user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.contractNumber.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

      setSearchResults(filteredResults);
      setShowNoResults(filteredResults.length === 0);
    } else 
      setSearchResults(filteredUsers);
     setShowNoResults(false);
    }
  }, [searchTerm, filteredUsers]);

//   const renderTitle = () => {
//   if (isSearching && searchResults.length > 0) {
//     return "Результати пошуку:";
//   } else if (isSearching && searchResults.length === 0) {
//     return "Результати пошуку: не знайдено";
//   } else {
//     return "Чекають на підтвердження (посилання):";
//   }
// };



  return (
    <>
      <SearchUsersContainer>
        <TitleTab>{title}</TitleTab>
        {/* {(searchTerm === "" || (searchTerm === "" && filteredUsers.length > 0)) && (
          <TitleTab>{renderTitle()}</TitleTab>
        )} */}
        <Input
          type="text"
          placeholder="Пошук користувачів"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchUsersContainer>
      {isLoading1 ? (
        <TextLoader>Завантаження...</TextLoader>
      ) : searchResults.length === 0 && showNoResults ? (
        <TextInfo>Результати пошуку: не знайдено</TextInfo>
      ) : (
        <Table>
          {/* <thead>
            <TableRow>
              <RowTitle style={{ marginRight: "243px" }}>Ім’я</RowTitle>
              <RowTitle style={{ marginRight: "94px" }}>№ договору</RowTitle>
              <RowTitle style={{ marginRight: "102px" }}>Дата заявки</RowTitle>
              <RowTitle>Детальніше</RowTitle>
              <RowTitle></RowTitle>
            </TableRow>
          </thead>

          <tbody>
               {searchResults.map((user, index) => {
              const date = new Date(user.createdAt);
              const year = date.getFullYear();
              const month = String(date.getMonth() + 1).padStart(2, "0");
              const day = String(date.getDate()).padStart(2, "0");
              const formattedDate = `${year}/${month}/${day}`;


              <th>Day </th>
              <th>Tel Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              users.map((user, index) => {
                const date = new Date(user.createdAt);
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, "0");
                const day = String(date.getDate()).padStart(2, "0");
                const formattedDate = `${year}-${month}-${day}`;
                return (
                  <tr key={index}>
                    <td>{user.firstName}</td>
                    <td>
                      {user.lastName} {user.fatherName}
                    </td>
                    <td>{formattedDate}</td>
                    <td>{user.telNumber}</td>
                    <td>{user.email}</td>
                  </tr>
                );
              })}
            {/* {searchResults.map((user) => (
              <TableRow key={user._id.$oid}>
                <TableCell>
                  {user.firstName} {user.lastName}
                </TableCell>
                <TableCell>{user.contractNumber}</TableCell>
                <TableCell>{user.createdAt.$date}</TableCell>
                <TableCell>
                  <button>картка</button>
                </TableCell>
              </TableRow>
            ))} */}
          </tbody>
        </Table>
      )}
    </>
  );
};
