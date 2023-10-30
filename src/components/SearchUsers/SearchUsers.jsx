import { useState, useEffect } from 'react';
import {SearchUsersContainer, Input, Table, TableRow, TableCell, RowTitle,TitleTab  } from './SearchUsers.styled';

export const SearchUsers=()=> {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showNoResults, setShowNoResults] = useState(false);

  useEffect(() => {
   
    if (searchTerm.trim() !== '') {
      setIsLoading(true);
      // Здесь вы можете выполнить поиск пользователей и установить результаты в setSearchResults
      // Например, отправить запрос на сервер и обработать полученные данные
      // const fetchData = async () => {
      //   const response = await fetch(`/api/searchUsers?query=${searchTerm}`);
      //   const data = await response.json();
      //   setSearchResults(data);
      //   setIsLoading(false);
        // };
         setShowNoResults(false);
    } else {
      // Сбрасываем результаты поиска, если поле ввода пустое
        setSearchResults([]);
         setIsLoading(false);
      setShowNoResults(false);
    }
  }, [searchTerm]);

    return (<>
        <SearchUsersContainer>
       <TitleTab>Чекають на  підтвердження (посилання):</TitleTab>
           <Input
        type="text"
        placeholder="Пошук користувачів"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
  </SearchUsersContainer>
      <Table>
        <thead>
          <TableRow>
            <RowTitle style={{ marginRight: '243px' }}>Ім’я</RowTitle>
            <RowTitle style={{ marginRight: '94px' }}>№ договору</RowTitle>
            <RowTitle style={{ marginRight: '102px' }}>Дата заявки</RowTitle>
            <RowTitle>Детальніше</RowTitle>
          </TableRow>
        </thead>
        <tbody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan="3">Завантаження...</TableCell>
            </TableRow>
          ) : searchResults.length === 0 && showNoResults ? (
            <TableRow>
              <TableCell colSpan="4">Результати пошуку: не знайдено</TableCell>
            </TableRow>
          ) : (
            searchResults.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.firstName} {user.lastName}</TableCell>
                <TableCell>{user.contractNumber}</TableCell>
                <TableCell>{user.createdAt}</TableCell>
                <TableCell><button>картка</button></TableCell>
              </TableRow>
            ))
          )}
        </tbody>
      </Table>
      
        </>
  );
}

