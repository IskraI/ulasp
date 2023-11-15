import TabNavigation from "../TabNavigation/TabNavigation";
import UserCardForm from "./CardUserForm";
import { Button } from "../Button/Button";
import symbol from "../../assets/symbol.svg";
import { useState } from "react";

import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../../redux/dataUsersSlice";
import {
  ButtonContainer,
  TextModal,
  ModalBtnContainer,
} from "./CardUser.styled";

const CardUser = () => {
  const { id } = useParams();

  const { data: user, error, isLoading } = useGetUserByIdQuery(id);
  const [activeModal, setActiveModal] = useState(null);
  const handleShowModal = (modalContent) => {
    setActiveModal(modalContent);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };
  return (
    <>
      <TabNavigation />
      {!isLoading && <UserCardForm user={user} />}
      <ButtonContainer>
        <Button
          type="button"
          padding="8px 63px"
          height="48px"
          display="block"
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
          display="block"
          height="48px"
          text="Відправити посилання"
          marginleft="50px"
        />
        <Button
          type="button"
          padding="8px 30px"
          display="block"
          height="48px"
          text="Розблокувати"
          marginleft={"auto"}
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
 {activeModal === 'unBlock' && (
      <Modal
        width={"664px"}
          padding={"138px 138px 74px"}
           onClose={handleCloseModal}
          showCloseButton={true}
          flexDirection="column"      
        >
        <TextModal>Користувач  - ${user.firstName} ${user.lastName} <br/>
          заблокован!</TextModal>
        <ModalBtnContainer>
        <Button
              type="button"
              padding ="8px 24px"
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
          text="Розблокувати"
           marginleft='31px' 
          />
          </ModalBtnContainer>
        </Modal>
    )}
    
     {activeModal === 'delUser' && (
      <Modal
        width={"664px"}
          padding={"138px 138px 74px"}
           onClose={handleCloseModal}
          showCloseButton={true}
          flexDirection="column"      
        >
          <TextModal>Ви впевнені, що хочете
видалити користувача?</TextModal>
        <ModalBtnContainer>
        <Button
              type="button"
              padding ="8px 37px"
      height="48px"
          display="block"
            text="Так"
            
                                  />
        <Button
              type="button"
        padding="8px 44px"
        display="block"
      height="48px"
          text="Ні"
            marginleft='31px' 
            onClick={handleCloseModal}
          />
          </ModalBtnContainer>
        </Modal>
      )}

    </>
  );
};
export default CardUser;
