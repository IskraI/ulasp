import { useGetUsersListQuery } from "../../../redux/dataUsersSlice";
import UserTable from "../UsersTable/UsersTable";
import { SearchUsers } from "../SearchUsers/SearchUsers";

const ListEditors = ({ searchTerm }) => {
  const { data, isLoading } = useGetUsersListQuery(true);
  console.log("data", data);
  const visibleColumns = [
    { key: "firstName", label: "Ім’я", type: "nameLinkEditor" },
    { key: "login", label: "Логін", type: "string" },
    {
      key: "adminRole" || "editorRole",
      label: "Тип адміністратора",
      type: "typeEditor",
    },
    { key: "telNumber", label: "Контакт", type: "string" },
    { key: "email", label: "Email", type: "string" },
    { key: "status", label: "Доступ", type: "status" },

    // { key: "editorRole", label: "Тип админа", type: "string" },
  ];

  return (
    <>
      {!isLoading && (
        <SearchUsers
          searchTerm={searchTerm}
          dataUsers={data.result}
          isLoading={isLoading}
          visibleColumns={visibleColumns}
          pageType={"list"}
        />
      )}
      {!isLoading && data.result.length === 0 && (
        <p> Адміністраторів та редакторів ще немає</p>
      )}
    </>
  );
};

export default ListEditors;
