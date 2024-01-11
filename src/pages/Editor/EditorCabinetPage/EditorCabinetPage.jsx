import {
  StatsListWrapper,
  StatItemEditor,
} from "../../../components/Statistic/Statistic.styled";

import {
  useGetPlaylistsCountQuery,
  useGetTracksCountQuery,
} from "../../../redux/statisticSlice";
import { useGetAllTracksQuery } from "../../../redux/tracksSlice";

import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import { EditorText } from "./EditorCabinetPage.styled";

import { Loader } from "../../../components/Loader/Loader";
import Player from "../../../components/Player/Player";

const RowsTitle = [
  "",
  "Назва пісні",
  "Виконавець",
  "Тривалість",
  "Жанр",
  "Плейлист",
  "",
];

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
    isSuccess: isSuccessAllTracks,
  } = useGetAllTracksQuery();

  return (
    <>
      {isFetchingAllTracks && !isSuccessAllTracks && <Loader />}

      <EditorText> Кабінет редактора</EditorText>

      {isSuccessAllTracks && !errorLoadingAllTracks && (
        <>
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
          <TracksTable
            title={"Остання додана музика"}
            showTitle={true}
            tracks={allTracks}
            isLoading={isLoadingAllTracks}
            error={errorLoadingAllTracks}
            isFetching={isFetchingAllTracks}
            isSuccess={isSuccessAllTracks}
            rows={RowsTitle}
            isInPlayList={false}
          />
          <Player tracks={allTracks} />
        </>
      )}
    </>
  );
};

export default EditorCabinetPage;
