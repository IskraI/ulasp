import { StatsListWrapper,StatItem } from './Statistic.styled';

export const Statistic = () => {
    return (<StatsListWrapper>
        <StatItem>
            {/* `${количество - новых - пользователей}`/`${количество - всех - пользователей}` */}
            Нових користувачів</StatItem>
        <StatItem>
           + {/* `${количество - новых - пользователей}`*/}
            Користувачів за вересень</StatItem>
        <StatItem>
            {/* `${количество - добавленных - песен}`*/}
           Доданих пісень</StatItem>
        <StatItem>
            {/* `${количество - онлайн - пользователей}` */}
Онлайн користувачів
</StatItem>
        </StatsListWrapper>);

};
