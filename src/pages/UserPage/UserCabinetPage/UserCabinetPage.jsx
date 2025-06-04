// import {
//   StatsListWrapper,
//   StatItemEditor,
// } from "../../../components/Statistic/Statistic.styled";

import {
  UserCabinetContainer,
  TitleSecond,
  DataUser,
  TitleFirst,
  FormContainer,
  InfoWrapper
} from './UserCabinetPage.styled';

import { userCabinetVars } from './userCabinetVars';

import { useSelector } from 'react-redux';
import { getUserState } from '../../../redux/userSelectors';
import { AdminWriteForm } from '../../../components/Form/AdminWriteForm';
import { ActForm } from '../../../components/Form/ActForm';
import { ReportForm } from '../../../components/ReportForm/ReportForm';

const UserCabinetPage = () => {
  const user = useSelector(getUserState);
  // console.log("User", user);

  return (
    <>
      <TitleFirst>{userCabinetVars.cabinet}</TitleFirst>
      <FormContainer>
        <InfoWrapper>
          <TitleSecond>{userCabinetVars.contractNumberDoc}</TitleSecond>
          <DataUser>
            {user.contractNumberDoc
              ? user.contractNumberDoc
              : user.contractNumber}
          </DataUser>
          <TitleSecond>{userCabinetVars.taxCode}</TitleSecond>
          <DataUser>{user.taxCode}</DataUser>
          <TitleSecond>{userCabinetVars.accessDate}</TitleSecond>
          <DataUser>{user.dateOfAccess}</DataUser>
        </InfoWrapper>
        <ReportForm user={user} userpage={true} />
      </FormContainer>

      <FormContainer>
        <AdminWriteForm user={user} />
        <ActForm user={user} />
      </FormContainer>
    </>
  );
};

export default UserCabinetPage;
