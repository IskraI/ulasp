import { useGetUsersListQuery } from "../../redux/dataUsersSlice";
import UserTable from "../UsersTable/UsersTable";
import { useState, useEffect, useRef } from "react";
import { Modal } from "../Modal/Modal";
import { SearchUsersContainer, Input, UsersContainer, Link } from "../SearchUsers/SearchUsers.styled";
import {

  SectionUser,
} from "../UserForm/UserCreateForm.styled";
import { Button } from "../../components/Button/Button";
import { Title } from "../AdminCabinetPage/AdminCabinetPage.styled";
import UserCreateForm from "../UserForm/UserCreateForm";

import { NavLink, Outlet } from "react-router-dom";
import { useNavigate, Route, Routes } from 'react-router-dom';

const AdminUsers = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // При первой загрузке перенаправляем пользователя на маршрут "allusers"
  //   navigate('/allusers');
  // }, [navigate]);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <>
      <UsersContainer>
        <Title>Користувачі</Title>

        <Button
          type="button"
          padding={"12px 46px"}
          onClick={handleShowModal}
          marginright =  {"24px" }
          marginleft={"auto"}
          text={"Додати"}
          ariaLabel={"  Додати користувача"}
        ></Button>
        <Input
          type="text"
          id="search"
          name="search"
          placeholder="Пошук користувача"
        />
      </UsersContainer>
      <SectionUser>
        <Link to="allusers" activeclassname="active" >Усі користувачі</Link>
        <Link to="editors" activeclassname="active">Музичні редактори та адміністратори</Link>
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
