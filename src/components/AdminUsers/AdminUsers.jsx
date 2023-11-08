import { useGetUsersListQuery } from "../../redux/dataUsersSlice";
import UserTable from "../Users/UsersTable";
import { useState, useEffect, useRef } from "react";
import { Modal } from "../Modal/Modal";
import {
  SearchUsersContainer,
  Input,
  Table,
  TableRow,
  TableCell,
  RowTitle,
  TitleTab,
  TextLoader,
  TextInfo,
} from "../SearchUsers/SearchUsers.styled";
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
      <Title>Користувачі</Title>
      <SearchUsersContainer>
        <button type="button" onClick={handleShowModal}>
          Додати
        </button>
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
