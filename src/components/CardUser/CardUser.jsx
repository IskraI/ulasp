import TabNavigation from "../TabNavigation/TabNavigation";
import UserCardForm from "./CardUserForm";
import { Button } from "../Button/Button";
import symbol from "../../assets/symbol.svg";
import { Modal } from "../Modal/Modal";

import { useState } from "react";
import { useParams } from 'react-router-dom';
import {useGetUserByIdQuery} from "../../redux/dataUsersSlice"
import {ButtonContainer, TextModal, ModalBtnContainer} from "./CardUser.styled"

const CardUser = () => {
   
    const { id } = useParams();
    const { data: user, error, isLoading } = useGetUserByIdQuery(id );
    console.log('user', user)
  //   console.log('id', id)
  const [activeModal, setActiveModal] = useState(null);

  const handleShowModal = (modalContent) => {
    setActiveModal(modalContent);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    
  };

  return <>

    <TabNavigation />
    <UserCardForm  user = {user} />
    <ButtonContainer>

         <Button
              type="button"
              padding ="8px 63px"
      height="48px"
        display="block"
                  text={
          <>
            <svg className="icon" width="24" height="24" style={{ marginRight: '8px' }}>
              <use href={`${symbol}#icon-analytics`}></use>
            </svg>
            Звіт
          </>
        }
     onClick={() => handleShowModal('report')}
    />
    <Button
              type="button"
        padding="8px 45px"
        display="block"
      height="48px"
                     text="Відправити посилання"
        marginleft='50px' 
        onClick={() => handleShowModal('sendLink')}
    />
    <Button
              type="button"
        padding="8px 30px"
        display="block"
      height="48px"
             text="Розблокувати"
        marginleft={"auto"}
        onClick={() => handleShowModal('unBlock')}
      />
      </ButtonContainer>
   <Button
      type="button"
      display="block"
              padding ="8px 27px"
      height="48px"
      marginleft={"auto"}
       margintop={"16px"}
     text={
          <>
            <svg className="icon" width="24" height="24" style={{ marginRight: '8px' }}>
              <use href={`${symbol}#icon-del-basket`}></use>
            </svg>
            Видалити користувача
          </>
        }
      onClick={() => handleShowModal('delUser')}
    />

    {activeModal === 'unBlock' && (
      <Modal
        width={"664px"}
          padding={"138px 138px 74px"}
           onClose={handleCloseModal}
          showCloseButton={true}
          flexDirection="column"      
        >
          <TextModal>Користувач  - Евген Клопотенко 
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

    
    </>
                   
};
export default CardUser;