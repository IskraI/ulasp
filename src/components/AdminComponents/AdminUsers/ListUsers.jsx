import { useGetUsersListQuery } from "../../../redux/dataUsersSlice";
import UserTable from "../UsersTable/UsersTable";
import { SearchUsers } from "../SearchUsers/SearchUsers";

import { Loader } from "../../Loader/Loader";

const ListUsers = ({ searchTerm }) => {
  const { data, isLoading } = useGetUsersListQuery();

  const visibleColumns = [
    { key: "firstName", label: "Ім’я", type: "nameLink" },

    { key: "contractNumber", label: "Логін", type: "string" },
    { key: "taxCode", label: "ИНН", type: "string" },

    { key: "contractNumberDoc", label: "№ договору", type: "string" },
    { key: "dateOfAccess", label: "Дата договору", type: "string" },
    // { key: "lastPay", label: "Дата оплати", type: "string" },
    { key: "status", label: "Статус", type: "status" }, // відкрито заблоковано
    { key: "access", label: "Допуск", type: "access" }, // он - офф
  ];

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <SearchUsers
          pageType={"list"}
          searchTerm={searchTerm}
          dataUsers={data?.allUsers}
          isLoading={isLoading}
          visibleColumns={visibleColumns}
        />
      )}

      {!isLoading && data.allUsers.length === 0 && (
        <p> Користувачів ще не має</p>
      )}
    </>
  );
};

export default ListUsers;
