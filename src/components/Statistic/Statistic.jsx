import {
  useGetNewClientsCountQuery,
  useGetTracksCountAdminQuery,
  useGetOnlineClientsCountQuery,
  useGetNewClientsByMonthCountQuery,
  useGetClientsCountQuery
} from '../../redux/statisticSlice';

import { StatsListWrapper, StatItem } from './Statistic.styled';

export const Statistic = () => {
  const {
    data: tracksCount,
    error: isErrorTracksCount,
    isFetching: isFetchingTracksCount
  } = useGetTracksCountAdminQuery(undefined, {
    refetchOnMountOrArgChange: true
  });
  const {
    data: newClientsCount,
    error: isErrorNewClients,
    isFetching: isFetchingNewClients
  } = useGetNewClientsCountQuery(undefined, {
    refetchOnMountOrArgChange: true
  });
  const {
    data: onlineClientsCount,
    error: isErrorOnlineClients,
    isFetching: isFetchingOnlineClients
  } = useGetOnlineClientsCountQuery(undefined, {
    pollingInterval: 60000,
    refetchOnMountOrArgChange: true
  });
  const {
    data: newClientsByMonthCount,
    error: isErrorNewClientsByMonthCount,
    isFetching: isFetchingNewClientsByMonthCount
  } = useGetNewClientsByMonthCountQuery(undefined, {
    refetchOnMountOrArgChange: true
  });

  const {
    data: clientsCount,
    error: isErrorClientsCount,
    isFetching: isFetchingClientsCount
  } = useGetClientsCountQuery(undefined, {
    refetchOnMountOrArgChange: true
  });

  const getCurrentMonth = () => {
    const currentDate = new Date();

    const options = { month: 'long' };
    const currentMonthStringUA = currentDate.toLocaleString('uk-UA', options);

    return currentMonthStringUA;
  };

  return (
    <StatsListWrapper>
      <StatItem>
        {!isFetchingNewClients &&
          !isErrorNewClients &&
          !isErrorClientsCount &&
          !isFetchingClientsCount &&
          `${newClientsCount.countNewClients} / ${clientsCount.countClients}`}
        <br />
        {/* `${количество - новых - пользователей}`/`${количество - всех - пользователей}` */}
        Нових користувачів
      </StatItem>
      <StatItem>
        {!isFetchingNewClientsByMonthCount &&
          !isErrorNewClientsByMonthCount &&
          newClientsByMonthCount.countNewClientsByMonth}
        <br />
        Користувачів за {getCurrentMonth()}
      </StatItem>
      <StatItem>
        {/* `${количество - добавленных - песен}`*/}
        {!isFetchingTracksCount &&
          !isErrorTracksCount &&
          tracksCount.countTracks}
        <br />
        Доданих пісень
      </StatItem>
      <StatItem>
        {!isFetchingOnlineClients &&
          !isErrorOnlineClients &&
          onlineClientsCount.countOnlineClients}
        <br />
        Онлайн користувачів
      </StatItem>
    </StatsListWrapper>
  );
};
