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
      <TitleFirst>Кабінет</TitleFirst>
      <FormContainer>
        <InfoWrapper>
          <TitleSecond>Номер договору</TitleSecond>
          <DataUser>
            {user.contractNumberDoc
              ? user.contractNumberDoc
              : user.contractNumber}
          </DataUser>
          <TitleSecond>Ідентифікаційний номер (код ЄДРПОУ)</TitleSecond>
          <DataUser>{user.taxCode}</DataUser>
          <TitleSecond>Дата договору</TitleSecond>
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
