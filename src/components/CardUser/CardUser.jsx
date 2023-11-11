import TabNavigation from "../TabNavigation/TabNavigation";
import UserCardForm from "./CardUserForm";
import { Button } from "../Button/Button";
import symbol from "../../assets/symbol.svg";
import { useParams } from 'react-router-dom';
import {useGetUserByIdQuery} from "../../redux/dataUsersSlice"

const CardUser = () => {
    const { id } = useParams();
    const { data: user, error, isLoading } = useGetUserByIdQuery(id );
//     console.log('user', user)
//   console.log('id', id)
  return <>
    {/* <TabNavigation /> */}
    <UserCardForm user = {user}/>
         <Button
              type="button"
              padding ="8px"
      height="48px"
      width="198px"
            text={
          <>
            <svg className="icon" width="24" height="24" style={{ marginRight: '8px' }}>
              <use href={`${symbol}#icon-analytics`}></use>
            </svg>
            Звіт
          </>
        }
      display="flex"
    />
    <Button
              type="button"
              padding ="8px"
      height="48px"
      width="310px"
     text="Відправити посилання"
    />
    <Button
              type="button"
              padding ="8px"
      height="48px"
      width="198px"
     text="Розблокувати"
    />
   <Button
              type="button"
              padding ="8px"
      height="48px"
      width="310px"
     text={
          <>
            <svg className="icon" width="24" height="24" style={{ marginRight: '8px' }}>
              <use href={`${symbol}#icon-del-basket`}></use>
            </svg>
            Видалити користувача
          </>
        }
      display="flex"
    />
    
    </>
                   
};
export default CardUser;