import { useGetUsersListQuery } from "../../../redux/dataUsersSlice";
import UserTable from "../UsersTable/UsersTable";

const ListEditors = () => {
    const { data, isLoading } = useGetUsersListQuery(true);

  const visibleColumns = [
    { key: "firstName", label: "Ім’я", type: "nameLinkEditor" },
    { key: "login", label: "Логін", type: "string" },
    { key: "adminRole", label: "Тип админа", type: "string" },
    { key: "editorRole", label: "Тип админа", type: "string" },
  ];

  return (
    <>
    
       {!isLoading && (
        <UserTable users={data.result} visibleColumns={visibleColumns} />
      )} 

      {/* {!data.allAdmin && <p> Користувачів ще не має</p>} */}
    </>
  );
};

export default ListEditors;
