import { useGetEditorsListQuery } from "../../redux/dataUsersSlice";
import UserTable from "../UsersTable/UsersTable";

const ListEditors = () => {
    const { data, isLoading } = useGetEditorsListQuery();
 
  const visibleColumns = [
    { key: "firstName", label: "Ім’я", type: "name" },
   
    { key: "adminRole", label: "Тип админа", type: "string" },
    { key: "editorRole", label: "Тип админа", type: "string" },
  ];

  return (
    <>
       {!isLoading && (
        <UserTable users={data.allUsers} visibleColumns={visibleColumns} />
      )} 

      {!data.allUsers && <p> Користувачів ще не має</p>}
    </>
  );
};

export default ListEditors;
