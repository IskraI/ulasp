import { useGetUsersListQuery } from "../../redux/dataUsersSlice";
import UserTable from "../UsersTable/UsersTable";

const ListUsers = () => {
    const { data, isLoading } = useGetUsersListQuery();

  const visibleColumns = [
    { key: "firstName", label: "Ім’я", type: "name" },
    { key: "contractNumber", label: "№ договору", type: "string" },
    { key: "taxCode", label: "ИНН", type: "string" },
    { key: "status", label: "Статус", type: "boolean" },
    { key: "lastPay", label: "Дата оплати", type: "string" },
    { key: "dateOfAccess", label: "Відкрито до", type: "string" },
    { key: "acces", label: "Допуск", type: "string" },
  ];

  return (
    <>
        {!isLoading && (
        <UserTable users={data.allUsers} visibleColumns={visibleColumns} />
      )}  

      {/* {!data.allUsers && <p> Користувачів ще не має</p>} */}
    </>
  );
};

export default ListUsers;
