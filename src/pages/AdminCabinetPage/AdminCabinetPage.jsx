import { Statistic } from '../../components/Statistic/Statistic';
import { SearchUsers } from '../../components/SearchUsers/SearchUsers';
import { Title, TitleTab } from './AdminCabinetPage.styled';

const AdminCabinetPage = () => {
  return <>
    <Title>Кабінет адміністратора</Title>
    <Statistic />
    <TitleTab>Чекають на  підтвердження (посилання):</TitleTab>
    <SearchUsers/>
  </>;
};

export default AdminCabinetPage;
