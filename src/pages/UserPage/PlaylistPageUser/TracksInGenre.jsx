import TabNavigation from "../../../components/TabNavigation/TabNavigation";
import TracksTable from "../../../components/UserMediaComponent/TracksTable/TracksTableUser";
import { useGetTracksByGenreIdQuery } from "../../../redux/tracksUserSlice";
import { BtnSort } from "../AllTracksUser/AllTracksUser.styled";
import symbol from "../../../assets/symbol.svg";
import { useState, useEffect, useId, useRef } from "react";
import NavMusic from "../../../components/UserMediaComponent/NavMusic/NavMusic";
import { useParams } from "react-router-dom";
import Player from "../../../components/Player/Player";
import DropDownTracksInGenres from "../../../components/DropDownGeners/DropDownTracksInGener";

// const RowsTitle = ["", "Назва пісні", "Виконавець", "Тривалість", "Жанр", ""];

const AllTracksUser = () => {
  const id = useId();
  const BaseInputRef = useRef(null);
  const { genreId } = useParams();
  const [checkedMainCheckBox, setCheckedMainCheckBox] = useState(false);
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
  } = useGetTracksByGenreIdQuery(genreId);

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
        title: (
          <input
            key={id}
            type="checkbox"
            id="mainInput"
            ref={BaseInputRef}
            style={{ width: "24px", height: "24px", marginRight: "24px" }}
            onClick={() => {
              if (BaseInputRef.current.checked) {
                setCheckedMainCheckBox(true);
              } else {
                setCheckedMainCheckBox(false);
              }
            }}
          />
        ),
        type: "checkbox",
        titleSize: "2%",
        showData: false,
      },

      {
        title: "",
        type: "button",
        titleSize: "2%",
        showData: false,
      },
      {
        title: "",
        type: "image",
        titleSize: "5%",
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
        showData: false,
      },

      {
        title: "",
        type: "button",
        titleSize: "5%",
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

  return (
    <>
      <TabNavigation />
      <DropDownTracksInGenres currentGenreId={genreId} />
      <NavMusic links={links} />
      <BtnSort onClick={handleSortClick}>
        <svg width="24" height="24">
          <use href={`${symbol}#icon-sort`}></use>
        </svg>
      </BtnSort>
      {isFetchingAllTracks && <p>Загружаемся.....</p>}
      {!isFetchingAllTracks && !errorLoadingAllTracks && (
        <>
          {console.log("allTracks.tracks", allTracks.tracks)}
          <TracksTable
            title={"In playlist"}
            showTitle={false}
            marginTopWrapper={"24px"}
            isInPlayList={true}
            // playListId={allTracks.playlist._id}
            playListGenre={allTracks.playlistGenre}
            tracks={sortedTracks}
            error={errorLoadingAllTracks}
            isFetching={isFetchingAllTracks}
            isSuccess={isSuccess}
            display="none"
            rows={rows()}
          />
          <Player tracks={allTracks.tracks} />
        </>
      )}
    </>
  );
};

export default AllTracksUser;
