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
    data: allTracks,
    isLoading: isLoadingAllTracks,
    error: errorLoadingAllTracks,
  } = useGetAllTracksQuery();

  return (
    <>
      <EditorText> Кабінет редактора</EditorText>

      <StatsListWrapper>
        <StatItemEditor>
          {/* {!isLoadingTracks && tracksCount.countTracks} */}
          {!isLoadingAllTracks && allTracks.length}
          <br /> Доданої музики
        </StatItemEditor>
        <StatItemEditor>
          {!isLoadingPlaylists &&
            !errorPlaylistCount &&
            playlistCount.countPlaylists}
          <br /> Створених плейлистів
        </StatItemEditor>
      </StatsListWrapper>
      {!isLoadingAllTracks && (
        <TracksTable
          tracks={allTracks}
          // visibleColumns={visibleColumns}
          isLoading={isLoadingAllTracks}
          error={errorLoadingAllTracks}
        />
      )}
    </>
  );
};

export default EditorCabinetPage;
