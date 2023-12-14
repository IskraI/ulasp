import {
    SearchUsersContainer,
    Input,
    TitleTab,
    TextLoader,
    TextInfo,
   
  } from "./SearchUsers.styled";
  import { useState, useEffect, useMemo } from "react";

export const SearchInput = ({onSearchTermChange, pageType}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
      onSearchTermChange(value); // Вызов функции обратного вызова при изменении значения ввода
    };
  
    return (
      <>
        <Input
        pageType={pageType}
          type="text"
          placeholder="Пошук користувачів"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </>
    );
  };