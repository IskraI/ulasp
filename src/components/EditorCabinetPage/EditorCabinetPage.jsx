import {
  StatsListWrapper,
  StatItemEditor,
} from "../Statistic/Statistic.styled";
import {
  useGetPlaylistsCountQuery,
  useGetTracksCountQuery,
} from "../../redux/statisticSlice";
import { useGetAllTracksQuery } from "../../redux/tracksSlice";
import TracksTable from "../TracksTable/TracksTable";
import { EditorText } from "./EditorCabinetPage.styled";

const EditorCabinetPage = () => {
  const {
    data: playlistCount,
    error: errorPlaylistCount,
    isLoading: isLoadingPlaylists,
  } = useGetPlaylistsCountQuery();

  const {
    data: tracksCount,
    error: isError,
    isFetching: isFetchingTracksCount,
  } = useGetTracksCountQuery();
  const {
    data: allTracks,
    isLoading: isLoadingAllTracks,
    error: errorLoadingAllTracks,
    isFetching: isFetchingAllTracks,
    isSuccess,
    isUninitialized,
  } = useGetAllTracksQuery();

  // console.log("isSuccess", isSuccess);
  // console.log("isUninitialized", isUninitialized);
  return (
    <>
      <EditorText> Кабінет редактора</EditorText>

      <StatsListWrapper>
        <StatItemEditor>
          {!isFetchingTracksCount && !isError && tracksCount.countTracks}
          <br /> Доданої музики
        </StatItemEditor>
        <StatItemEditor>
          {!isLoadingPlaylists &&
            !errorPlaylistCount &&
            playlistCount.countPlaylists}
          <br /> Створених плейлистів
        </StatItemEditor>
      </StatsListWrapper>
      {isFetchingAllTracks && <p>Загружаемся.....</p>}
      {!isFetchingAllTracks && !errorLoadingAllTracks && (
        <TracksTable
          tracks={allTracks}
          isLoading={isLoadingAllTracks}
          error={errorLoadingAllTracks}
          isFetching={isFetchingAllTracks}
        />
      )}
    </>
  );
};

export default EditorCabinetPage;