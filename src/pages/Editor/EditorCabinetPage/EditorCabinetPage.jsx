import { useState } from "react";

import FreeDiskSpace from "../../../components/EditorComponents/FreeDiskSpace/FreeDiskSpace";

import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";

import { Loader } from "../../../components/Loader/Loader";
import { Error500, ErrorNotFound } from "../../../components/Errors/Errors";
import RowsTitle from "./RowsTitleEditorCabinetPage";

import { useGetAllTracksQuery } from "../../../redux/tracksSlice";

import { EditorText } from "./EditorCabinetPage.styled";
import {
  StatsListWrapper,
  StatItemEditor,
} from "../../../components/Statistic/Statistic.styled";

const EditorCabinetPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const {
    data: allTracks,
    error: errorLoadingAllTracks,
    isFetching: isFetchingAllTracks,
    isSuccess: isSuccessAllTracks,
    isLoading: isLoadingAllTracks,
  } = useGetAllTracksQuery({
    page: currentPage,
    limit: pageSize,
    sort: -1,
    forceRefetch: true,
  });

  const onPageChange = (page) => setCurrentPage(page);
  const onPageSizeChange = (size) => setPageSize(size);
  return (
    <>
      {isFetchingAllTracks && !isSuccessAllTracks && <Loader />}
      {errorLoadingAllTracks?.status === "500" && <Error500 />}
      {errorLoadingAllTracks && <ErrorNotFound />}

      {isSuccessAllTracks && !errorLoadingAllTracks && (
        <>
          <EditorText> Кабінет редактора</EditorText>
          <StatsListWrapper>
            <StatItemEditor>
              {allTracks.totalTracks}
              <br /> Доданої музики
            </StatItemEditor>
            <StatItemEditor>
              {allTracks.totalPlaylists}
              <br /> Створених плейлистів
            </StatItemEditor>
            <FreeDiskSpace />
          </StatsListWrapper>
          <TracksTable
            title={"Остання додана музика"}
            marginTopWrapper={"24px"}
            showTitle={true}
            tracks={allTracks.latestTracks}
            tracksSRC={allTracks.tracksSRC}
            totalTracks={allTracks.totalTracks}
            isLoading={isLoadingAllTracks}
            error={errorLoadingAllTracks}
            isFetching={isFetchingAllTracks}
            isSuccess={isSuccessAllTracks}
            rows={RowsTitle}
            isInPlayList={false}
            onChangeCurrentPage={onPageChange}
            onChangeSizePage={onPageSizeChange}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={allTracks.totalPages}
            deleteButton={false}
          />
        </>
      )}
    </>
  );
};

export default EditorCabinetPage;
