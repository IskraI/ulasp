import TracksTable from "../../../components/UserMediaComponent/TracksTable/TracksTableUser";
import { useGetPlaylistByIdForUserQuery,useGetCreatePlaylistByIdForUserQuery, useUpdatePlaylistSortMutation } from "../../../redux/playlistsUserSlice";
import PlaylistListItem from "../../../components/UserMediaComponent/PlayLists/PlayListsItem";
import { BtnSort } from "../AllTracksUser/AllTracksUser.styled";
import { ErrorNotFound, Error500 } from "../../../components/Errors/Errors";
import symbol from "../../../assets/symbol.svg";
import Player from "../../../components/Player/Player";
import { useState, useEffect, useLayoutEffect, useRef, useId } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Loader } from "../../../components/Loader/Loader";
import SortTracks from "../../../components/EditorComponents/Sort/SortTracks";
import AddTracksUser from "../../../components/UserCabinetPage/AddTracks/AddTracksUser"

const TracksPage = () => {
  const id = useId();
  const BaseInputRef = useRef(null);
  const location = useLocation();
  const [checkedMainCheckBox, setCheckedMainCheckBox] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
const [isSorted, setIsSorterd] = useState(false);
 const [sortOrder, setSortOrder] = useState("random");
  const { playlistId } = useParams();

   const playlistQuery = location.pathname.includes("createplaylists")
    ? useGetCreatePlaylistByIdForUserQuery
    : useGetPlaylistByIdForUserQuery;

  const isCreatePlaylistsPage = location.pathname.includes("createplaylists");
  
  const {
    data,
    isFetching: isFetchingPlaylistById,
    isSuccess,
    error,
  } =  playlistQuery({
    playlistId,
    page: currentPage,
    limit: pageSize,
  });

   const [updateSort] = useUpdatePlaylistSortMutation();

  const rows = () => {
    const RowsTitle = [
      {
        title: "",
        type: "checkbox",
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

  // const [sortedTracks, setSortedTracks] = useState([]);
  // const [sortedForSrc, setSortedForSrc] = useState([]);
  // const [isSorted, setIsSorted] = useState(false);

  // useEffect(() => {
  //   if (isSuccess) {
  //     setSortedTracks([...data.playlist.trackList]);
  //     setSortedForSrc([...data.tracksSRC]);
  //   }
  // }, [isSuccess, data]);

  // const handleSortClick = () => {
  //   if (!isSorted) {
  //     const sorted = [...sortedTracks].sort((a, b) => {
  //       return a.trackName.localeCompare(b.trackName);
  //     });
  //     const sortedSrc = [...sortedForSrc].sort((a, b) => {
  //       return a.trackName.localeCompare(b.trackName);
  //     });
  //     setSortedTracks(sorted);
  //     setSortedForSrc(sortedSrc);
  //     setIsSorted(true);
  //   } else {
  //     setSortedTracks([...data.playlist.trackList]);
  //     setSortedForSrc([...data.tracksSRC]);
  //     setIsSorted(false);
  //   }
  // };

  const handleClickSort = (data) => {
    console.log(data);
    updateSort({ playlistId, data });
    // setSortedBy(data);
    if (currentPage > 1) {
      setCurrentPage(1);
      setIsSorterd(true);
      setCheckedMainCheckBox(false);
    }

    localStorage.setItem("sortOrder", data);
    setSortOrder(data);

  };

   useEffect(() => {
    const savedSortOrder = localStorage.getItem("sortOrder");
    if (savedSortOrder) {
      setSortOrder(savedSortOrder);
    }
  }, []); 

  const onPageChange = (page) => {
    console.log("4 Step - setCurrentPage in mutation", page);
    setCurrentPage(page);
  };

  const onPageSizeChange = (size) => {
    console.log(size);
    setPageSize(size);
  };

  console.log("data PlaylistById", data);

  return (
    <>
      {error?.status === "500" && <Error500 />}
      {error && <ErrorNotFound />}
      {!isSuccess && !error && <Loader />}
      {isSuccess && !error && (
        <><div style={{ display: "flex" }}>
          <PlaylistListItem
            icon={data.playlist.playListAvatarURL}
            title={data.playlist.playListName}
            placeListCardInfo={true}
            id={playlistId}
            countTracks={data.totalTracks}
          />
          {/* <BtnSort onClick={handleSortClick}>
            <svg width="24" height="24">
              <use href={`${symbol}#icon-sort`}></use>
            </svg>
          </BtnSort> */}
          <SortTracks
              onClick={handleClickSort}
              sortType={"Az"}
            marginTop={"0px"}
          />
        </div>
          {isCreatePlaylistsPage && (
            <div style={{ position: "absolute", top: "104px", right: "124px" }}>
              <AddTracksUser
                iconButton={`${symbol}#icon-plus`}
                textButton={"Музику"}
                playlistId={playlistId}
              // uploadTrackInPlaylist={uploadTrackInPlaylist}
              />
            </div>
          )}

          <TracksTable
            title={"In playlist"}
            showTitle={false}
            marginTopWrapper={"24px"}
            isInPlayList={true}
            playListId={data.playlist._id}
            playListGenre={data.playlist.playlistGenre}
            tracks={data.playlist.trackList}
            error={error}
            isFetching={isFetchingPlaylistById}
            isSuccess={isSuccess}
            rows={rows()}
            onChangeCurrentPage={onPageChange}
            onChangeSizePage={onPageSizeChange}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={data.totalPages}
            totalTracks={data.totalTracks}
            tracksSRC={data.tracksSRC}
          />
          {/* <Player tracks={sortedTracks} /> */}
        </>
      )}
    </>
  );
};

export default TracksPage;
