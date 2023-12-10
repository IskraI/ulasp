import { useGetUsersListQuery } from "../../../redux/dataUsersSlice";
import UserTable from "../UsersTable/UsersTable";

import id from "date-fns/locale/id/index.js";

const ListUsers = () => {
  const { data, isLoading } = useGetUsersListQuery();


  const visibleColumns = [
    { key: "firstName", label: "Ім’я", type: "nameLink" },
    { key: "contractNumber", label: "№ договору", type: "string" },
    { key: "taxCode", label: "ИНН", type: "string" },
    { key: "status", label: "Статус", type: "status" }, // відкрито заблоковано
    { key: "lastPay", label: "Дата оплати", type: "string" },
    { key: "dateOfAccess", label: "Відкрито до", type: "string" },
    { key: "access", label: "Допуск", type: "access" }, // он - офф
  ];
 

  return (
    <>
      {!isLoading && (
        <UserTable users={data.allUsers} visibleColumns={visibleColumns} />
      )}

{!isLoading && data.allUsers.length === 0&&(
       <p> Користувачів ще не має</p> 
      )}
    </>
  );
};

export default ListUsers;
