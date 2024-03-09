import TabNavigation from "../../TabNavigation/TabNavigation";
import EditorCardForm from "./CardEditorForm";
import { Button } from "../../Button/Button";
import symbol from "../../../assets/symbol.svg";
import { useState } from "react";
import { Modal } from "../../Modal/Modal";
import { useParams } from "react-router-dom";
import {
  useGetAdminByIdQuery,
  useDelUserByIdMutation,
  useUnblockEditorByIdMutation,
} from "../../../redux/dataUsersSlice";
import {
  ButtonContainer,
  TextModal,
  ModalBtnContainer,
} from "../CardUser/CardUser.styled";
import { useNavigate } from "react-router-dom";
import EditorLoginForm from "../UserForm/EditorLoginForm";

const CardEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: user, error, isLoading } = useGetAdminByIdQuery(id);

  const [dispatchDel, { isLoading: isLoadingDel }] = useDelUserByIdMutation();
  const [dispatchUnblock, { isLoading: isLoadingUnblock }] =
    useUnblockEditorByIdMutation();
  const [activeModal, setActiveModal] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const handleShowModal = (modalContent) => {
    setActiveModal(modalContent);
    document.body.classList.add("modal-open");
  };
  // console.log('user edit', user)

  const handleCloseModal = () => {
    document.body.classList.remove("modal-open");
    setActiveModal(null);
  };

  const handleDeleteUser = async () => {
    dispatchDel({ id: id, admin: true })
      .unwrap()
      .then(() => {
        navigate("/admin/users/editors");
      })
      .catch((e) => {
        let errorMessage = e.data?.message;
        setErrorMessage(errorMessage);
        handleShowModal();
      });
  };

  const handleUnblockUser = async () => {
    dispatchUnblock(id)
      .unwrap()
      .then(() => {
        // navigate("/admin/users/editors");
        setActiveModal(null);
        document.body.classList.remove("modal-open");
      })
      .catch((e) => {
        let errorMessage = e.data?.message;
        setErrorMessage(errorMessage);
        handleShowModal();
      });
  };

  return (
    <>
      <TabNavigation />
      {!isLoading && <EditorCardForm user={user} />}
      {!isLoading && <EditorLoginForm user={user} />}
      <ButtonContainer>
        <Button
          type="button"
          padding="8px 30px"
          display="block"
          height="48px"
          text={user && user.status === true ? "Заблокувати" : "Розблокувати"}
          marginleft={"auto"}
          onClick={() => handleShowModal("unBlock")}
        />
      </ButtonContainer>
      <Button
        type="button"
        display="block"
        padding="8px 27px"
        height="48px"
        marginleft={"auto"}
        margintop={"16px"}
        text={
          <>
            <svg
              className="icon"
              width="24"
              height="24"
              style={{ marginRight: "8px" }}
            >
              <use href={`${symbol}#icon-del-basket`}></use>
            </svg>
            Видалити користувача
          </>
        }
        onClick={() => handleShowModal("delUser")}
      />
      {activeModal === "unBlock" && (
        <Modal
          width={"664px"}
          padding={"138px 138px 74px"}
          onClose={handleCloseModal}
          showCloseButton={true}
          flexDirection="column"
        >
          <TextModal>
            {user.status === true
              ? `Підтвердіть заблокування користувача - ${user.firstName} ${user.lastName}`
              : `Підтвердіть розблокування користувача - ${user.firstName} ${user.lastName}`}
          </TextModal>
          <ModalBtnContainer>
            <Button
              type="button"
              padding="8px 24px"
              height="48px"
              display="block"
              text="Назад"
              onClick={handleCloseModal}
            />
            <Button
              type="button"
              padding="8px 30px"
              display="block"
              height="48px"
              text={
                user && user.status === true ? "Заблокувати" : "Розблокувати"
              }
              marginleft="31px"
              onClick={handleUnblockUser}
            />
          </ModalBtnContainer>
        </Modal>
      )}

      {activeModal === "delUser" && (
        <Modal
          width={"664px"}
          padding={"138px 138px 74px"}
          onClose={handleCloseModal}
          showCloseButton={true}
          flexDirection="column"
        >
          <TextModal>Ви впевнені, що хочете видалити ?</TextModal>
          <ModalBtnContainer>
            <Button
              type="button"
              padding="8px 37px"
              height="48px"
              display="block"
              text="Так"
              onClick={handleDeleteUser}
            />
            <Button
              type="button"
              padding="8px 44px"
              display="block"
              height="48px"
              text="Ні"
              marginleft="31px"
              onClick={handleCloseModal}
            />
          </ModalBtnContainer>
        </Modal>
      )}
    </>
  );
};
export default CardEditor;
