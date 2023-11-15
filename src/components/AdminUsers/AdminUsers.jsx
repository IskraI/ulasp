import { useGetUsersListQuery } from "../../redux/dataUsersSlice";
import UserTable from "../UsersTable/UsersTable";
import { useState, useEffect, useRef } from "react";
import { Modal } from "../Modal/Modal";
import { SearchUsersContainer, Input } from "../SearchUsers/SearchUsers.styled";
import {

  SectionUser,
} from "../UserForm/UserCreateForm.styled";
import { Button } from "../../components/Button/Button";
import { Title } from "../AdminCabinetPage/AdminCabinetPage.styled";
import UserCreateForm from "../UserForm/UserCreateForm";

import { NavLink, Outlet } from "react-router-dom";


const AdminUsers = () => {
  

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <>
      <SearchUsersContainer>
        <Title>Користувачі</Title>

        <Button
          type="button"
          padding={"12px 46px"}
          onClick={handleShowModal}
          text={"Додати"}
          ariaLabel={"  Додати користувача"}
        ></Button>
        <Input
          type="text"
          id="search"
          name="search"
          placeholder="Пошук користувача"
        />
      </SearchUsersContainer>
      <SectionUser>
        <NavLink to="allusers">Усі користувачі</NavLink>
        <NavLink to="editors">Музичні редактори та адміністратори</NavLink>
      </SectionUser>
      <Outlet/>
      
     

      {showModal && (
        <Modal
          width={"898px"}
          padding={"24px"}
          onClose={handleCloseModal}
          showCloseButton={true}
        >
          <UserCreateForm onCloseModal={handleCloseModal}  typeOfPage={"modal"}/>
        </Modal>
      )}
    </>
  );
};

export default AdminUsers;
