import { useState, useEffect } from 'react';

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

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук користувачів"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table>
        <thead>
          <tr>
                     <th>Ім’я</th>
                      <th>№ договору</th>
                      <th>Дата заявки</th> 
                       <th>Детальніше</th> 
                     </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="3">Завантаження...</td>
            </tr>
          ) : searchResults.length === 0&& showNoResults ? (
            <tr>
              <td colSpan="3">Результати пошуку: не знайдено</td>
            </tr>
          ) : (
            searchResults.map((user) => (
              <tr key={user.id}>
                 <td>{user.firstName} {user.lastName}</td>
                <td>{user.contractNumber}</td>
                    <td>{user.createdAt}</td>
                    <td><button>картка</button></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

