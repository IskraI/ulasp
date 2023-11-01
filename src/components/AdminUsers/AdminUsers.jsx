import {useGetUsersListQuery} from "../../redux/dataUsersSlice"
import UserTable from "../Users/UsersTable"
import { useState, useEffect, useRef } from 'react';
import UserCreateModal from "../UserCreateModal/UserCreateModal"

const AdminUsers = () => {
    const { data, isLoading } = useGetUsersListQuery();

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
      // document.activeElement.blur();
      setShowModal(prev => !prev)
      console.log('showModal', showModal)
    };
  
    // console.log('data', data)
    // console.log('isLoading', isLoading)
    return <>

      Користувачі
      <button type="button"  onClick={handleShowModal}>
        Додати
      </button>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Пошук користувача"
      ></input>
    {!isLoading && <UserTable users ={data}/> }
    
{showModal&& <UserCreateModal showModal={handleShowModal}  />}
 
    </>;
  };
  
  export default AdminUsers;
  