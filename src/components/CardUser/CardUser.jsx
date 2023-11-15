import TabNavigation from "../TabNavigation/TabNavigation";
import UserCardForm from "./CardUserForm";
import { Button } from "../Button/Button";
import symbol from "../../assets/symbol.svg";


import { useParams } from 'react-router-dom';
import {useGetUserByIdQuery} from "../../redux/dataUsersSlice"
import {ButtonContainer} from "./CardUser.styled"

const CardUser = () => {
    const { id } = useParams();

    const { data:user, error, isLoading } = useGetUserByIdQuery(id );
    
  return <>

    <TabNavigation />
    {!isLoading && <UserCardForm  user = {user} />} 
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
     
    />
    <Button
              type="button"
        padding="8px 45px"
        display="block"
      height="48px"
                     text="Відправити посилання"
        marginleft='50px' 
    />
    <Button
              type="button"
        padding="8px 30px"
        display="block"
      height="48px"
             text="Розблокувати"
         marginleft = {"auto"}
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
      
    />
    
    </>
                   
};
export default CardUser;