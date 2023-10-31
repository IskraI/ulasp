import {useGetUsersListQuery} from "../../redux/dataUsersSlice"
import UserTable from "../Users/UsersTable"

const AdminUsers = () => {
    const { data, isLoading } = useGetUsersListQuery();
    // console.log('data', data)
    // console.log('isLoading', isLoading)
    return <>

      Користувачі
      <button type="button" onClick={() =>console.log("showModal")}>
        Додати
      </button>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Пошук користувача"
      ></input>
    {!isLoading && <UserTable users ={data}/> }

 
    </>;
  };
  
  export default AdminUsers;
  