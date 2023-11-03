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
  DetailsBtn
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
  // const [searchResults, setSearchResults] = useState([user]);
  const [isLoading1, setIsLoading] = useState(false);
  const [showNoResults, setShowNoResults] = useState(false);
 const { data: users, isLoading } = useGetUsersListQuery();
  
  console.log(users);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      setIsLoading(true);
      // Здесь вы можете выполнить поиск пользователей и установить результаты в setSearchResults
      // Например, отправить запрос на сервер и обработать полученные данные
      // const fetchData = async () => {
      //   const response = await fetch(`/api/searchUsers?query=${searchTerm}`);
      //   const data = await response.json();
      //   setSearchResults(data);
      //   setIsLoading(false);
      // };
      // setSearchResults([user]);

      setIsLoading(false);
      setShowNoResults(false);
    } else {
      // Сбрасываем результаты поиска, если поле ввода пустое
      // setSearchResults([user]);
      setIsLoading(false);
      setShowNoResults(false);
    }
  }, [searchTerm]);




  return (
    <>
      <SearchUsersContainer>
        <TitleTab>Чекають на підтвердження (посилання):</TitleTab>
        <Input
          type="text"
          placeholder="Пошук користувачів"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchUsersContainer>
      {isLoading ? (
        <TextLoader>Завантаження...</TextLoader>
      ) : users.length === 0 && showNoResults ? (
        <TextInfo>Результати пошуку: не знайдено</TextInfo>
      ) : (
        <Table>
          <thead>
            <TableRow>
              <RowTitle >Ім’я</RowTitle>
              <RowTitle >№ договору</RowTitle>
              <RowTitle >Дата заявки</RowTitle>
              <RowTitle>Детальніше</RowTitle>
              <RowTitle></RowTitle>
            </TableRow>
          </thead>
          <tbody>
               {users.map((user, index) => {
              const date = new Date(user.createdAt);
              const year = date.getFullYear();
              const month = String(date.getMonth() + 1).padStart(2, "0");
              const day = String(date.getDate()).padStart(2, "0");
              const formattedDate = `${year}/${month}/${day}`;

              return (
                <TableRow key={index}>
                  <TableCell>
                    {user.firstName} {user.lastName}
                  </TableCell>
                  <TableCell>{user.contractNumber}</TableCell>
                  <TableCell>{formattedDate}</TableCell>
                  <TableCell>
                    <DetailsBtn>картка</DetailsBtn>
                  </TableCell>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};


