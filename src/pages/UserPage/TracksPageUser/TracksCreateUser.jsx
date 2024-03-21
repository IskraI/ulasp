import TracksTable from "../../../components/UserMediaComponent/TracksTable/TracksTableUser";
import { useGetCreatePlaylistByIdForUserQuery } from "../../../redux/playlistsUserSlice";
import PlaylistListItem from "../../../components/UserMediaComponent/PlayLists/PlayListsItem";
import { BtnSort } from "../AllTracksUser/AllTracksUser.styled";
import { ErrorNotFound, Error500 } from "../../../components/Errors/Errors";
import symbol from "../../../assets/symbol.svg";
import Player from "../../../components/Player/Player";
import { useState, useEffect, useLayoutEffect, useRef, useId } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../../components/Loader/Loader";
import AddTrackToPlaylistFromDB from "../../../components/UserCabinetPage/AddTrackToPlaylistFromDB/AddTrackToPlaylistFromDB";
import rowsTracksCreateUser from "./RowsTracksCreateUser";

const TracksPageCreateUser = () => {
  const id = useId();
  const BaseInputRef = useRef(null);
  const [checkedMainCheckBox, setCheckedMainCheckBox] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { playlistId } = useParams();

  const {
    data,
    isFetching: isFetchingPlaylistById,
    isSuccess,
    error,
  } = useGetCreatePlaylistByIdForUserQuery({
    playlistId,
    page: currentPage,
    limit: pageSize,
  });

  const [sortedTracks, setSortedTracks] = useState([]);
  const [sortedForSrc, setSortedForSrc] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setSortedTracks([...data.playlist.trackList]);
      setSortedForSrc([...data.tracksSRC]);
    }
  }, [isSuccess, data]);

  const handleSortClick = () => {
    if (!isSorted) {
      const sorted = [...sortedTracks].sort((a, b) => {
        return a.trackName.localeCompare(b.trackName);
      });
      const sortedSrc = [...sortedForSrc].sort((a, b) => {
        return a.trackName.localeCompare(b.trackName);
      });
      setSortedTracks(sorted);
      setSortedForSrc(sortedSrc);
      setIsSorted(true);
    } else {
      setSortedTracks([...data.playlist.trackList]);
      setSortedForSrc([...data.tracksSRC]);
      setIsSorted(false);
    }
  };

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
          <div style={{ display: "flex", alignItems: "center" }}>
            <PlaylistListItem
              icon={data.playlist.playListAvatarURL}
              title={data.playlist.playListName}
              placeListCardInfo={true}
              id={playlistId}
              countTracks={data.totalTracks}
            />
            <BtnSort onClick={handleSortClick}>
              <svg width="24" height="24">
                <use href={`${symbol}#icon-sort`}></use>
              </svg>
            </BtnSort>

            <AddTrackToPlaylistFromDB
              iconButton={`${symbol}#icon-plus`}
              textButton={"Музику"}
              idPlaylist={playlistId}
              trackListPlaylist={data.playlist.trackList}
            />
          </div>

          <TracksTable
            title={"In playlist"}
            showTitle={false}
            marginTopWrapper={"24px"}
            isInPlayList={true}
            playListId={data.playlist._id}
            playListGenre={data.playlist.playlistGenre}
            tracks={isSorted ? sortedTracks : data.playlist.trackList}
            error={error}
            isFetching={isFetchingPlaylistById}
            isSuccess={isSuccess}
            rows={rowsTracksCreateUser()}
            onChangeCurrentPage={onPageChange}
            onChangeSizePage={onPageSizeChange}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={data.totalPages}
            totalTracks={data.totalTracks}
            tracksSRC={isSorted ? sortedForSrc : data.tracksSRC}
            deleteButton={true}
          />
        </>
      )}
    </>
  );
};

export default TracksPageCreateUser;
