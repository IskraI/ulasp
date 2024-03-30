import TabNavigation from "../../../components/TabNavigation/TabNavigation";
import TracksTable from "../../../components/UserMediaComponent/TracksTable/TracksTableUser";
import { useGetAllTracksforUserQuery } from "../../../redux/tracksUserSlice";
import { BtnSort } from "./AllTracksUser.styled";
import symbol from "../../../assets/symbol.svg";
import { useState } from "react";
import NavMusic from "../../../components/UserMediaComponent/NavMusic/NavMusic";
import { Loader } from "../../../components/Loader/Loader";

// const RowsTitle = ["", "Назва пісні", "Виконавець", "Тривалість", "Жанр", ""];

const NewSongs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const {
    data: allTracks,
    isSuccess,
    error: errorLoadingAllTracks,
    isFetching: isFetchingAllTracks,
  } = useGetAllTracksforUserQuery({
    page: currentPage,
    limit: pageSize,
  });

  const onPageChange = (page) => {
    console.log("4 Step - setCurrentPage in mutation", page);
    setCurrentPage(page);
  };

  const onPageSizeChange = (size) => {
    console.log(size);
    setPageSize(size);
  };

  const links = [
    { path: "/user/medialibrary/newplaylists", title: "Нові плейлисти" },
    { path: "/user/medialibrary/newtracks", title: "Нова музика" },
  ];
  //     const [shuffleTracks, setShuffleTracks] = useState(false);

  //   const shuffleArray = (array) => {

  //     for (let i = array.length - 1; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       [array[i], array[j]] = [array[j], array[i]];
  //     }
  //     return array;
  //   };

  //   const handleShuffleClick = () => {
  //            setShuffleTracks(shuffleArray([...allTracks]));
  //        setShuffleTracks(!shuffleTracks);
  //   };

  //   const shuffledTracks = shuffleTracks ? shuffleArray([...allTracks]) : allTracks;
  // console.log("allTracks AllTracksUser", allTracks);
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

  // const sortedTracks = allTracks
  //   ? [...allTracks].sort((a, b) => {
  //       const titleA = (a.trackName || "").toUpperCase();
  //       const titleB = (b.trackName || "").toUpperCase();
  //       return sortAlphabetically ? titleA.localeCompare(titleB) : 0;
  //     })
  //   : [];

  return (
    <>
      {/* <TabNavigation /> */}
      <NavMusic links={links} />
      {/* <BtnSort onClick={handleSortClick}>
        <svg width="24" height="24">
          <use href={`${symbol}#icon-sort`}></use>
        </svg>
      </BtnSort> */}
      {isFetchingAllTracks && <Loader />}
      {!isFetchingAllTracks && !errorLoadingAllTracks && (
        <>
          <TracksTable
            title={"In playlist"}
            showTitle={false}
            marginTopWrapper={"24px"}
            isInPlayList={false}
            tracks={allTracks.latestTracks}
            tracksSRC={allTracks.tracksSRC}
            totalTracks={allTracks.totalTracks}
            error={errorLoadingAllTracks}
            isFetching={isFetchingAllTracks}
            isSuccess={isSuccess}
            rows={rows()}
            onChangeCurrentPage={onPageChange}
            onChangeSizePage={onPageSizeChange}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={allTracks.totalPages}
          />
          {/* <Player tracks={sortedTracks} /> */}
        </>
      )}
    </>
  );
};

export default NewSongs;
