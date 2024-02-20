import { useState } from "react";
import {
  StatsListWrapper,
  StatItemEditor,
} from "../../../components/Statistic/Statistic.styled";

import { useGetAllTracksQuery } from "../../../redux/tracksSlice";

import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import { EditorText } from "./EditorCabinetPage.styled";

import { Loader } from "../../../components/Loader/Loader";
import { Error500, ErrorNotFound } from "../../../components/Errors/Errors";

const RowsTitle = [
  {
    title: "",
    type: "input",
    titleSize: "1%",
    showData: false,
  },
  {
    title: "",
    type: "button",
    titleSize: "2%",
    showData: true,
  },
  {
    title: "",
    type: "image",
    titleSize: "10%",
    showData: true,
  },
  {
    title: "Назва пісні",
    type: "text",
    titleSize: "20%",
    showData: true,
  },
  {
    title: "Виконавець",
    type: "text",
    titleSize: "15%",
    showData: true,
  },
  {
    title: "Тривалість",
    type: "text",
    titleSize: "12%",
    showData: true,
  },
  {
    title: "Жанр",
    type: "text",
    titleSize: "10%",
    showData: true,
  },
  {
    title: "Плейлист",
    type: "text",
    titleSize: "15%",
    showData: true,
  },

  {
    title: "",
    type: "button",
    titleSize: "5%",
    showData: true,
  },
];

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
    // forceRefetch: true,
    // refetchOnFocus: true,
  });

  const onPageChange = (page) => {
    console.log("4 Step - setCurrentPage in mutation", page);
    setCurrentPage(page);
  };

  const onPageSizeChange = (size) => {
    console.log(size);
    setPageSize(size);

    return pageSize;
  };

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
          </StatsListWrapper>
          <TracksTable
            title={"Остання додана музика"}
            marginTopWrapper={"24px"}
            showTitle={true}
            tracks={allTracks.latestTracks}
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
          />
        </>
      )}
    </>
  );
};

export default EditorCabinetPage;
