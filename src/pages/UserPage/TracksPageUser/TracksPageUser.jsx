import { useState, useEffect } from "react";

import TracksTable from "../../../components/UserMediaComponent/TracksTable/TracksTableUser";

import PlaylistListItem from "../../../components/UserMediaComponent/PlayLists/PlayListsItem";
import { BtnSort } from "../AllTracksUser/AllTracksUser.styled";
import { ErrorNotFound, Error500 } from "../../../components/Errors/Errors";
import symbol from "../../../assets/symbol.svg";
import { useParams, useLocation } from "react-router-dom";
import { Loader } from "../../../components/Loader/Loader";
import SortTracks from "../../../components/EditorComponents/Sort/SortTracks";
import rowsTracksPageUser from "./RowsTracksPageUser";

import {
  useGetPlaylistByIdForUserQuery,
  useGetCreatePlaylistByIdForUserQuery,
  useUpdatePlaylistSortMutation,
} from "../../../redux/playlistsUserSlice";

const TracksPage = () => {
  const location = useLocation();
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
  } = playlistQuery({
    playlistId,
    page: currentPage,
    limit: pageSize,
  });

  const [updateSort] = useUpdatePlaylistSortMutation();

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
        <>
          <div style={{ display: "flex" }}>
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
          {/* {isCreatePlaylistsPage && (
            <div style={{ position: "absolute", top: "104px", right: "124px" }}>
              <AddTracksUser
                iconButton={`${symbol}#icon-plus`}
                textButton={"Музику"}
                playlistId={playlistId}
                // uploadTrackInPlaylist={uploadTrackInPlaylist}
              />
            </div>
          )} */}

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
            rows={rowsTracksPageUser()}
            onChangeCurrentPage={onPageChange}
            onChangeSizePage={onPageSizeChange}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={data.totalPages}
            totalTracks={data.totalTracks}
            tracksSRC={data.tracksSRC}
          />
        </>
      )}
    </>
  );
};

export default TracksPage;
