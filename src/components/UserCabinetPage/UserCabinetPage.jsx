import {
  StatsListWrapper,
  StatItemEditor,
} from "../Statistic/Statistic.styled";

import {
  TitleSecond,
  DataUser,
  TitleFirst,
  FormContainer,
  InfoWrapper,
} from "./UserCabinetPage.styled";
import { useSelector } from "react-redux";
import { getUserState } from "../../redux/userSelectors";
import { AdminWriteForm } from "../../components/Form/AdminWriteForm";
import { ActForm } from "../../components/Form/ActForm";
import { ReportForm } from "./ReportForm";

const UserCabinetPage = () => {
  const user = useSelector(getUserState);
  // console.log("User", user);

  return (
    <>
      <TitleFirst>Кабінет</TitleFirst>
      <FormContainer>
        <InfoWrapper>
          <TitleSecond>Номер договору</TitleSecond>
          <DataUser>{user.contractNumber}</DataUser>
          <TitleSecond>Ідентифікаційний номер (код ЄДРПОУ)</TitleSecond>
          <DataUser>{user.taxCode}</DataUser>
          <TitleSecond>Остання оплата</TitleSecond>
          <DataUser>{user.lastPay}</DataUser>
          <TitleSecond>Наступна оплата</TitleSecond>
          <DataUser>{user.dateOfAccess}</DataUser>
        </InfoWrapper>
        <ReportForm user={user} />
      </FormContainer>
      <FormContainer>
        <AdminWriteForm user={user} />
        <ActForm user={user} />
      </FormContainer>
    </>
  );
};

export default UserCabinetPage;
