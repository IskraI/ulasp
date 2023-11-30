import {
  StatsListWrapper,
  StatItemEditor,
} from "../Statistic/Statistic.styled";
import {
  useGetPlaylistsCountQuery,
  useGetTracksCountQuery,
} from "../../redux/statisticSlice";

import {TitleSecond, DataUser, TitleThird, } from './UserCabinetPage.styled'
import { useSelector } from "react-redux";
import { getUserState } from "../../redux/userSelectors";
import { AdminWriteForm } from '../../components/Form/AdminWriteForm';
import { ActForm } from '../../components/Form/ActForm';
import { ReportForm } from '../../components/Form/ReportForm';
const UserCabinetPage = () => {

 const user = useSelector(getUserState);
 console.log('User', user)
  // console.log("isSuccess", isSuccess);
  // console.log("isUninitialized", isUninitialized);
  return (
    <>
      <TitleSecond>Кабінет</TitleSecond>
      
      <TitleSecond>Номер договору</TitleSecond>
      <DataUser>{user.contractNumber}</DataUser>
      <TitleSecond>Ідентифікаційний номер (код ЄДРПОУ)</TitleSecond>
      <DataUser>{user.taxCode}</DataUser>
      <TitleSecond>Остання оплата</TitleSecond>
      <DataUser>{user.lastPay}</DataUser>
      <TitleSecond>Наступна оплата</TitleSecond>
      <DataUser>{user.dateOfAccess}</DataUser>

      <TitleThird>Написати адміністратору:</TitleThird>
      <AdminWriteForm/>
      <TitleThird>Запросити акт звірки:</TitleThird>
      <ActForm />
      <ReportForm/>
    </>
  );
};

export default UserCabinetPage;
