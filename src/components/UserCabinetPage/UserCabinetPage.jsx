import {
  StatsListWrapper,
  StatItemEditor,
} from "../Statistic/Statistic.styled";

import {
  TitleSecond,
  DataUser,
  TitleFirst,
  FormContainer,
} from "./UserCabinetPage.styled";
import { useSelector } from "react-redux";
import { getUserState } from "../../redux/userSelectors";
import { AdminWriteForm } from "../../components/Form/AdminWriteForm";
import { ActForm } from "../../components/Form/ActForm";
// import { ReportForm } from "../../components/Form/ReportForm";
const UserCabinetPage = () => {
  const user = useSelector(getUserState);
  // console.log("User", user);
  // console.log("isSuccess", isSuccess);
  // console.log("isUninitialized", isUninitialized);
  return (
    <>
      <TitleFirst>Кабінет</TitleFirst>

      <TitleSecond>Номер договору</TitleSecond>
      <DataUser>{user.contractNumber}</DataUser>
      <TitleSecond>Ідентифікаційний номер (код ЄДРПОУ)</TitleSecond>
      <DataUser>{user.taxCode}</DataUser>
      <TitleSecond>Остання оплата</TitleSecond>
      <DataUser>{user.lastPay}</DataUser>
      <TitleSecond>Наступна оплата</TitleSecond>
      <DataUser>{user.dateOfAccess}</DataUser>
      <FormContainer>
        <AdminWriteForm />
        <ActForm />
      </FormContainer>
      {/* <ReportForm /> */}
    </>
  );
};

export default UserCabinetPage;
