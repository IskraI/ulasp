import {
  SearchInputWrapper,
  UsersContainer,
} from "../SearchUsers/SearchUsers.styled";

import { SearchUsers } from "../SearchUsers/SearchUsers";
import { Title } from "../AdminCabinetPage/AdminCabinetPage.styled";
import { useState, useEffect, useMemo } from "react";
import { useGetUsersListQuery } from "../../../redux/dataUsersSlice";

const OnlineUsers = () => {
  const { data, isLoading, refetch } = useGetUsersListQuery();
  useEffect(() => {
    refetch(); // Выполнить запрос при монтировании компонента
  }, [refetch]);
  // const filteredUsers = useMemo(() => {
  //   const users = data ? data.allUsers : [];
  //   if (users) {
  //     return users.filter((user) => user.online === true);
  //   }
  //   return [];
  // }, [data]);
  // const filteredUsers = useMemo(() => {
  //   const users = data ? data.allUsers : [];
  //   if (users) {
  //     return users.filter((user) => user.online === true);
  //   }
  //   return [];
  // }, [data]);

  // const visibleColumns = [
  //   { key: "firstName", label: "Ім’я", type: "nameLink" },
  //   { key: "contractNumber", label: "№ договору", type: "string" },
  //   { key: "taxCode", label: "ИНН", type: "string" },
  //   { key: "status", label: "Статус", type: "status" }, // відкрито заблоковано
  //   { key: "lastPay", label: "Дата оплати", type: "string" },
  //   { key: "dateOfAccess", label: "Відкрито до", type: "string" },
  //   { key: "access", label: "Допуск", type: "access" }, // он - офф
  // ];
  const visibleColumns = [
    { key: "firstName", label: "Ім’я", type: "nameLink" },

    { key: "contractNumber", label: "Логін", type: "string" },
    { key: "taxCode", label: "ІНН", type: "string" },

    { key: "contractNumberDoc", label: "№ договору", type: "string" },
    { key: "dateOfAccess", label: "Дата договору", type: "string" },
    // { key: "lastPay", label: "Дата оплати", type: "string" },
    { key: "status", label: "Статус", type: "status" }, // відкрито заблоковано
    { key: "access", label: "Допуск", type: "access" }, // он - офф
  ];

  return (
    <>
      <UsersContainer>
        <Title>Користувачі онлайн</Title>

        <SearchInputWrapper />
      </UsersContainer>

      {data && (
        <SearchUsers
          dataUsers={data.allUsers.filter((user) => user.online === true)}
          isLoading={isLoading}
          // titleDefault={"Чекають на підтвердження (посилання):"}
          visibleColumns={visibleColumns}
          pageType={"list"}
        />
      )}
    </>
  );
};

export default OnlineUsers;
