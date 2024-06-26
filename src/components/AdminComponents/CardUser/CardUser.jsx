import TabNavigation from "../../TabNavigation/TabNavigation";
import CardUserForm from "./CardUserForm";
import { Button } from "../../Button/Button";
import symbol from "../../../assets/symbol.svg";
import { useState, useEffect } from "react";
import { Modal } from "../../Modal/Modal";
import { useParams } from "react-router-dom";
import { Error500, ErrorNotFound } from "../../../components/Errors/Errors";
import {
  useGetUserByIdQuery,
  useDelUserByIdMutation,
  useUnblockUserByIdMutation,
  useGetUserByIdTrackCountQuery,
  useGetUserByIdPlaylistCountQuery,
  useSendMailUserByIdMutation,
} from "../../../redux/dataUsersSlice";
import {
  ButtonContainer,
  TextModal,
  ModalBtnContainer,
} from "./CardUser.styled";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../Loader/Loader";

const CardUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isUserDataDeleted, setIsUserDataDeleted] = useState(false);
  const {
    data: user,
    error,
    isLoading,
  } = useGetUserByIdQuery(id, {
    skip: isUserDataDeleted,
  });

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

  const [dispatchSendMail, { isLoading: isLoadingSendMail }] =
    useSendMailUserByIdMutation();
  const [dispatchDel, { isLoading: isLoadingDel }] = useDelUserByIdMutation();
  const [dispatchUnblock, { isLoading: isLoadingUnblock }] =
    useUnblockUserByIdMutation();

  const [disableSendMail, setDisableSendMail] = useState(
    user?.status && user?.access
  );
  useEffect(() => {
    // Вычисляем новое значение disableSendMail
    const updatedDisableSendMail = user?.status && user?.access;

    // Устанавливаем новое значение disableSendMail
    setDisableSendMail(updatedDisableSendMail);
  }, [user?.status, user?.access]);

  const [activeModal, setActiveModal] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const handleShowModal = (modalContent) => {
    setActiveModal(modalContent);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    document.body.classList.remove("modal-open");
    setActiveModal(null);
  };

  const handleDeleteUser = async () => {
    dispatchDel({ id: id })
      .unwrap()
      .then(() => {
        document.body.classList.remove("modal-open");
        setIsUserDataDeleted(true);
        setActiveModal("update");
        navigate("/admin/users");
      })
      .catch((e) => {
        let errorMessage = e.data?.message;
        setErrorMessage(errorMessage);
        setActiveModal("error");
      });
  };
  const handleSendEmail = async () => {
    await dispatchSendMail(id)
      .unwrap()
      .then(() => {
        window.scrollTo({
          top: 0,
          behavior: "instant",
        });
        setActiveModal("sendMail");
      })
      .catch((e) => {
        let errorMessage = e.data?.message;
        setErrorMessage(errorMessage);
        setActiveModal("error");
      });
  };

  const handleUnblockUser = async () => {
    dispatchUnblock(id)
      .unwrap()
      .then(() => {
        setActiveModal(null);
        const updatedDisableSendMail = user.status && user.access;
        setDisableSendMail(updatedDisableSendMail);
        document.body.classList.remove("modal-open");
      })
      .catch((e) => {
        let errorMessage = e.data?.message;
        setErrorMessage(errorMessage);
        setActiveModal("error");
      });
  };

  return (
    <>
      <TabNavigation />
      {error && <ErrorNotFound />}
      {error?.status === "500" && <Error500 />}
      {isLoading && <Loader />}
      {!isLoading && !isLoadingSongsCount && (
        <CardUserForm
          id={id}
          user={user}
          playlistCount={playlistCount}
          tracksCount={tracksCount?.count}
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
          disabled={!disableSendMail}
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
              ? `Підтвердіть заблокування користувача - ${
                  user.firstName || ""
                } ${user.lastName || ""} ${user.name || ""}`
              : `Підтвердіть розблокування користувача - ${
                  user.firstName || ""
                } ${user.lastName || ""} ${user.name || ""}`}
          </TextModal>
          <ModalBtnContainer>
            <Button
              type="button"
              padding="8px 24px"
              height="48px"
              showIcon={false}
              text="Назад"
              onClick={handleCloseModal}
            />
            <Button
              type="button"
              padding="8px 30px"
              showIcon={false}
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
              showIcon={false}
              onClick={handleDeleteUser}
            />
            <Button
              type="button"
              padding="8px 44px"
              height="48px"
              text="Ні"
              showIcon={false}
              marginleft="31px"
              onClick={handleCloseModal}
            />
          </ModalBtnContainer>
        </Modal>
      )}
      {activeModal === "sendMail" && (
        <Modal
          width={"664px"}
          padding={"138px 138px 74px"}
          onClose={handleCloseModal}
          showCloseButton={true}
          flexDirection="column"
        >
          <TextModal>Лист з даними доступу користувачу відправлено</TextModal>
        </Modal>
      )}

      {activeModal === "error" && (
        <Modal
          width={"520px"}
          padding={"24px 74px"}
          onClose={handleCloseModal}
          showCloseButton={true}
        >
          <TextModal> {errorMessage}</TextModal>
        </Modal>
      )}
    </>
  );
};
export default CardUser;
