import { useGetUsersListQuery } from "../../redux/dataUsersSlice";
import UserTable from "../Users/UsersTable";
import { useState, useEffect, useRef } from "react";
import { Modal } from "../Modal/Modal";
import {
  SearchUsersContainer,
  Input,

} from "../SearchUsers/SearchUsers.styled";
import {Button} from "../../components/Button/Button"
import { Title } from "../../pages/AdminCabinetPage/AdminCabinetPage.styled";
import UserCreateForm from "../UserCreateModal/UserCreateForm";

const AdminUsers = () => {
  const { data, isLoading } = useGetUsersListQuery();

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
      
             <Button type="button" padding={"12px 46px"} onClick={handleShowModal} text = {"Додати"} ariaLabel ={"  Додати користувача"}>
              </Button>
        <Input
          type="text"
          id="search"
          name="search"
          placeholder="Пошук користувача"
        />
      </SearchUsersContainer>
      {!isLoading && <UserTable users={data.allUsers} />}

      {showModal && (
        <Modal width={"898px"} padding={"24px"} onClose={handleCloseModal}>
      
                 <UserCreateForm  onCloseModal={handleCloseModal}/>
        </Modal>
      )}
    </>
  );
};

export default AdminUsers;
