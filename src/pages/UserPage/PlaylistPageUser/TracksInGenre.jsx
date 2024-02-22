import TabNavigation from "../../../components/TabNavigation/TabNavigation";
import TracksTable from "../../../components/UserMediaComponent/TracksTable/TracksTableUser";
import { useGetTracksByGenreIdQuery } from "../../../redux/tracksUserSlice";
import { BtnSort } from "../AllTracksUser/AllTracksUser.styled";
import symbol from "../../../assets/symbol.svg";
import { useState, useEffect, useId, useRef } from "react";
import NavMusic from "../../../components/UserMediaComponent/NavMusic/NavMusic";
import { useParams } from "react-router-dom";
import DropDownTracksInGenres from "../../../components/DropDownGeners/DropDownTracksInGener";
import { Loader } from "../../../components/Loader/Loader";
// const RowsTitle = ["", "Назва пісні", "Виконавець", "Тривалість", "Жанр", ""];

const AllTracksUser = () => {
  const id = useId();
  const BaseInputRef = useRef(null);
  const { genreId } = useParams();
  const [checkedMainCheckBox, setCheckedMainCheckBox] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  // const {
  //   data: allTracks,

  //   error: errorLoadingAllTracks,
  //   isFetching: isFetchingAllTracks,
  // } = useGetAllTracksforUserQuery();

  const {
    data: allTracks,
    error: errorLoadingAllTracks,
    isFetching: isFetchingAllTracks,
    isSuccess,
    isError,
  } = useGetTracksByGenreIdQuery({
    genreId,
    page: currentPage,
    limit: pageSize,
  });

  const links = [
    {
      path: `/user/medialibrary/genres/${genreId}/playlists`,
      title: "Плейлисти",
    },
    { path: `/user/medialibrary/genres/${genreId}/tracks`, title: "Пісні" },
  ];

  const rows = () => {
    const RowsTitle = [
      {
        title: "",
        type: "none",
        titleSize: "2%",
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
        titleSize: "25%",
        showData: true,
      },
      {
        title: "Виконавець",
        type: "text",
        titleSize: "25%",
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
        titleSize: "0%",
        showData: false,
      },

      {
        title: "",
        type: "button",
        titleSize: "1%",
        showData: false,
      },
    ];

    return RowsTitle;
  };

  const [sortAlphabetically, setSortAlphabetically] = useState(false);

  const handleSortClick = () => {
    setSortAlphabetically(!sortAlphabetically);
  };

  const sortedTracks = allTracks
    ? [...allTracks.tracks].sort((a, b) => {
        const titleA = (a.trackName || "").toUpperCase();
        const titleB = (b.trackName || "").toUpperCase();
        return sortAlphabetically ? titleA.localeCompare(titleB) : 0;
      })
    : [];

  const onPageChange = (page) => {
    console.log("4 Step - setCurrentPage in mutation", page);
    setCurrentPage(page);
  };

  const onPageSizeChange = (size) => {
    console.log(size);
    setPageSize(size);
  };

  return (
    <>
      {!isSuccess && !isError && <Loader />}

      {/* <TabNavigation /> */}

      {!isFetchingAllTracks && !errorLoadingAllTracks && (
        <>
          <DropDownTracksInGenres currentGenreId={genreId} />
          <NavMusic links={links} />
          <BtnSort onClick={handleSortClick}>
            <svg width="24" height="24">
              <use href={`${symbol}#icon-sort`}></use>
            </svg>
          </BtnSort>
          {console.log("allTracks.tracks", allTracks.tracks)}
          <TracksTable
            title={"In playlist"}
            showTitle={false}
            marginTopWrapper={"24px"}
            isInPlayList={true}
            // playListId={allTracks.playlist._id}
            playListGenre={allTracks.playlistGenre}
            tracks={allTracks.tracks}
            error={errorLoadingAllTracks}
            isFetching={isFetchingAllTracks}
            isSuccess={isSuccess}
            rows={rows()}
            onChangeCurrentPage={onPageChange}
            onChangeSizePage={onPageSizeChange}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={allTracks.totalPages}
            totalTracks={allTracks.totalTracks}
            tracksSRC={allTracks.tracksSRC}
          />
          {/* <Player tracks={allTracks.tracks} /> */}
        </>
      )}
    </>
  );
};

export default AllTracksUser;
