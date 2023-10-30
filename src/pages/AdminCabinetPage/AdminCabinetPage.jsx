import { Statistic } from '../../components/Statistic/Statistic';
import {Title, TitleTab } from './AdminCabinetPage.styled'

const AdminCabinetPage = () => {
  return <>
    <Title>Кабінет адміністратора</Title>
    <Statistic />
  <TitleTab>Чекають на  підтвердження (посилання):</TitleTab>
  </>;
};

export default AdminCabinetPage;
