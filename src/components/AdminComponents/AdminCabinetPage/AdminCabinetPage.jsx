import { Statistic } from "../../Statistic/Statistic";
import { SearchUsers } from "../SearchUsers/SearchUsers";
import { Title } from "./AdminCabinetPage.styled";
import { useState, useEffect, useMemo } from "react";
import { useGetUsersListQuery } from "../../../redux/dataUsersSlice";

const AdminCabinetPage = () => {
  const { data, isLoading } = useGetUsersListQuery();

  //чекають на підтвердження ті у кого статус- status та доступ - access false
  const filteredUsers = useMemo(() => {
    const users = data ? data?.allUsers : [];
    if (users) {
      return users.filter(
        (user) => user.status === false && user.access === false
      );
    }
    return [];
  }, [data]);
  const visibleColumns = [
    { key: "firstName", label: "Ім’я", type: "name" },
    { key: "contractNumber", label: "№ договору", type: "string" },
    { key: "createdAt", label: "Дата заявки", type: "date" },
    { key: "details", label: "Детальніше", type: "link" },
    { key: "sendEmail", label: "", type: "button" },
  ];

  return (
    <>
      <Title>Кабінет адміністратора</Title>
      <Statistic />
      <SearchUsers
        dataUsers={filteredUsers}
        isLoading={isLoading}
        titleDefault={"Чекають на підтвердження (посилання):"}
        visibleColumns={visibleColumns}
      />
    </>
  );
};

export default AdminCabinetPage;
