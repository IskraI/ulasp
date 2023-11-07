import { Statistic } from '../../components/Statistic/Statistic';
import { SearchUsers } from '../../components/SearchUsers/SearchUsers';
import { Title} from './AdminCabinetPage.styled';


const AdminCabinetPage = () => {

  return <>
        <Title>Кабінет адміністратора</Title>
    <Statistic />
    <SearchUsers />
                    </>;
};

export default AdminCabinetPage;
