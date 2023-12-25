import { StatsListWrapper, StatItem } from "./Statistic.styled";
import {
  useGetNewClientsCountQuery,
  useGetTracksCountQuery,
  useGetOnlineClientsCountQuery,
  useGetNewClientsByMonthCountQuery
} from "../../redux/statisticSlice";
import { useState, useEffect, useMemo } from "react";

export const Statistic = () => {

  const {
    data: tracksCount,
    error: isErrorTracksCount,
    isFetching: isFetchingTracksCount,
  } = useGetTracksCountQuery();
  const {
    data: newClientsCount,
    error: isErrorNewClients,
    isFetching: isFetchingNewClients,
    refetch: refetchNewClientsCount,
  } = useGetNewClientsCountQuery();
  const {
    data: onlineClientsCount,
    error: isErrorOnlineClients,
    isFetching: isFetchingOnlineClients,
    refetch: refetchOnlineClients,
  } = useGetOnlineClientsCountQuery();
  const {
    data: newClientsByMonthCount,
    error: isErrorNewClientsByMonthCount,
    isFetching: isFetchingNewClientsByMonthCount,
  } = useGetNewClientsByMonthCountQuery();
  useEffect(() => {
    refetchOnlineClients(); 
    refetchNewClientsCount();
    // Выполнить запрос при монтировании компонента
  }, [refetchOnlineClients, refetchNewClientsCount]); 

  const getCurrentMonth = () =>{
   
    const currentDate = new Date();
   
    const options = { month: 'long' };
    const currentMonthStringUA = currentDate.toLocaleString('uk-UA', options);
   
    return  currentMonthStringUA; 
  }

 

  return (
    <StatsListWrapper>
      <StatItem>
      {!isFetchingNewClients &&
          !isErrorNewClients &&
          newClientsCount.countNewClients}
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
