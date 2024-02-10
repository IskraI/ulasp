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
  const {
    data: allTracks,
    isLoading: isLoadingAllTracks,
    error: errorLoadingAllTracks,
    isFetching: isFetchingAllTracks,
    isSuccess: isSuccessAllTracks,
  } = useGetAllTracksQuery({ forceRefetch: true, refetchOnFocus: true });

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
            isLoading={isLoadingAllTracks}
            error={errorLoadingAllTracks}
            isFetching={isFetchingAllTracks}
            isSuccess={isSuccessAllTracks}
            rows={RowsTitle}
            isInPlayList={false}
          />
        </>
      )}
    </>
  );
};

export default EditorCabinetPage;
