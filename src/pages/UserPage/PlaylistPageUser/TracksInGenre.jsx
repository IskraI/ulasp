import TabNavigation from "../../../components/TabNavigation/TabNavigation";
import TracksTable from "../../../components/UserMediaComponent/TracksTable/TracksTableUser";
import { useGetTracksByGenreIdQuery } from "../../../redux/tracksUserSlice";
import { BtnSort } from "../AllTracksUser/AllTracksUser.styled";
import symbol from "../../../assets/symbol.svg";
import { useState } from "react";
import NavMusic from "../../../components/UserMediaComponent/NavMusic/NavMusic";
import { useParams } from "react-router-dom";
import DropDownTracksInGenres from "../../../components/DropDownGeners/DropDownTracksInGener";
import { Loader } from "../../../components/Loader/Loader";
import rowsTracksInGenre from "./RowsTracksInGenre";

const AllTracksUser = () => {
  const { genreId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

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

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const onPageSizeChange = (size) => {
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
          {/* <BtnSort onClick={handleSortClick}>
            <svg width="24" height="24">
              <use href={`${symbol}#icon-sort`}></use>
            </svg>
          </BtnSort> */}
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
            rows={rowsTracksInGenre}
            onChangeCurrentPage={onPageChange}
            onChangeSizePage={onPageSizeChange}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={allTracks.totalPages}
            totalTracks={allTracks.totalTracks}
            tracksSRC={allTracks.tracksSRC}
          />
        </>
      )}
    </>
  );
};

export default AllTracksUser;
