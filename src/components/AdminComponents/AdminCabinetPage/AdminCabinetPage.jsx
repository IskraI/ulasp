import { Statistic } from '../../Statistic/Statistic';
import { SearchUsers } from '../SearchUsers/SearchUsers';
import { Title} from './AdminCabinetPage.styled';


const AdminCabinetPage = () => {

  return <>
        <Title>Кабінет адміністратора</Title>
    <Statistic />
    <SearchUsers />
                    </>;
};

export default AdminCabinetPage;
