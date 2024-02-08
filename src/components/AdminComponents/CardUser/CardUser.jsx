import TabNavigation from "../../TabNavigation/TabNavigation";
import CardUserForm from "./CardUserForm";
import { Button } from "../../Button/Button";
import symbol from "../../../assets/symbol.svg";
import { useState } from "react";
import { Modal } from "../../Modal/Modal";
import { useParams } from "react-router-dom";
import {
  useGetUserByIdQuery,
  useDelUserByIdMutation,
  useUnblockUserByIdMutation,
  useGetUserByIdTrackCountQuery,
  useGetUserByIdPlaylistCountQuery,
} from "../../../redux/dataUsersSlice";
import {
  ButtonContainer,
  TextModal,
  ModalBtnContainer,
} from "./CardUser.styled";
import { useNavigate } from "react-router-dom";

const CardUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: user, error, isLoading } = useGetUserByIdQuery(id);
  const {
    data: playlistCount,
    error: errorPlaylistCount,
    isLoading: isLoadingPlaylistCount,
  } = useGetUserByIdPlaylistCountQuery(id);
  const {
    data: tracksCount,
    error: errorSongsCount,
    isLoading: isLoadingSongsCount,
  } = useGetUserByIdTrackCountQuery(id);

  const [dispatchDel, { isLoading: isLoadingDel }] = useDelUserByIdMutation();
  const [dispatchUnblock, { isLoading: isLoadingUnblock }] =
    useUnblockUserByIdMutation();
  const [activeModal, setActiveModal] = useState(null);
  const handleShowModal = (modalContent) => {
    setActiveModal(modalContent);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    document.body.classList.remove("modal-open");
  };

  const handleDeleteUser = async () => {
    dispatchDel({ id: id })
      .unwrap()
      .then(() => {
        navigate("/admin/users");
      })
      .catch((error) => console.log(error.data.message));
  };
  const handleSendEmail = async () => {
    alert("send email");
  };

  const handleUnblockUser = async () => {
    dispatchUnblock(id)
      .unwrap()
      .then(() => {
        setActiveModal(null);
        document.body.classList.remove("modal-open");
      })
      .catch((error) => console.log(error.data.message));
  };

  return (
    <>
      <TabNavigation />
      {!isLoading && !isLoadingSongsCount && (
        <CardUserForm
          user={user}
          playlistCount={playlistCount}
          tracksCount={tracksCount}
        />
      )}
      <ButtonContainer>
        <Button
          type="button"
          padding="8px 63px"
          height="48px"
          display="none"
          onClick={() => navigate(`/admin/users/carduser/${user._id}/data`)}
          text={
            <>
              <svg
                className="icon"
                width="24"
                height="24"
                style={{ marginRight: "8px" }}
              >
                <use href={`${symbol}#icon-analytics`}></use>
              </svg>
              Звіт
            </>
          }
        />
        <Button
          type="button"
          padding="8px 45px"
          display="none"
          height="48px"
          text="Відправити посилання"
          marginleft="50px"
          onClick={() => handleSendEmail()}
        />
        <Button
          type="button"
          padding="8px 30px"
          display="none"
          height="48px"
          text={user && user.status === true ? "Заблокувати" : "Розблокувати"}
          marginleft={"auto"}
          onClick={() => handleShowModal("unBlock")}
        />
      </ButtonContainer>
      <Button
        type="button"
        display="none"
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
              display="none"
              text="Назад"
              onClick={handleCloseModal}
            />
            <Button
              type="button"
              padding="8px 30px"
              display="none"
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
          <TextModal>Ви впевнені, що хочете видалити користувача?</TextModal>
          <ModalBtnContainer>
            <Button
              type="button"
              padding="8px 37px"
              height="48px"
              text="Так"
              display="none"
              onClick={handleDeleteUser}
            />
            <Button
              type="button"
              padding="8px 44px"
              height="48px"
              text="Ні"
              display="none"
              marginleft="31px"
              onClick={handleCloseModal}
            />
          </ModalBtnContainer>
        </Modal>
      )}
    </>
  );
};
export default CardUser;
