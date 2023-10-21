import { ContactInfo } from '../../components/ContactInfo/ContactInfo';
import { NavMenu } from '../../components/NavMenu/NavMenu'
import symbol from '../../assets/symbol.svg'
import {
  LogOutLink,
  Exit
} from './AdminPage.styled'

const AdminPage = () => {
  console.log("AdminUsersPage");
  return( <>
    <NavMenu />
    <ContactInfo />
     <Exit><svg className="icon" width="24" height="24" >
            <use  href={`${symbol}#icon-exit`}></use> </svg>
    <LogOutLink href="/admin/signin"> Вихід </LogOutLink></Exit>
  </>);
};

export default AdminPage;
