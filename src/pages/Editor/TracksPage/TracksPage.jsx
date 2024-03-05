import { useParams } from "react-router-dom";
import { useRef, useState, useId } from "react";

import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import PlaylistListItem from "../../../components/EditorComponents/PlayLists/PlayListItem";
import PlayListControl from "../../../components/EditorComponents/PlayLists/PlayListControl";
import AddTracks from "../../../components/EditorComponents/AddTracks/AddTracks";
import symbol from "../../../assets/symbol.svg";

import { ErrorNotFound, Error500 } from "../../../components/Errors/Errors";
import { Loader } from "../../../components/Loader/Loader";
import SortTracks from "../../../components/EditorComponents/Sort/SortTracks";

import {
  useGetPlaylistByIdQuery,
  useUploadTracksInPlaylistMutation,
  useUpdatePlaylistSortMutation,
} from "../../../redux/playlistsSlice";

const TracksPage = () => {
  const baseInputRef = useRef(null);
  const [checkedMainCheckBox, setCheckedMainCheckBox] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isSorted, setIsSorterd] = useState(false);

  const { playlistId } = useParams();

  const {
    data,
    isFetching: isFetchingPlaylistById,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetPlaylistByIdQuery({
    playlistId,
    page: currentPage,
    limit: pageSize,

    // refetchOnFocus: true,
  });

  const [
    uploadTrackInPlaylist,
    {
      data: dataUploadTrackInPlaylist,
      isSuccess: isSuccessUploadTrackInPlaylist,
      isError: isErrorUploadTrackInPlaylist,
      isLoading: isLoadingUploadTrackInPlaylist,
      error: errorUploadTrackInPlaylist,
      isUninitialized: isUninitializedUploadTrackInPlaylist,
    },
  ] = useUploadTracksInPlaylistMutation();

  const [updateSort] = useUpdatePlaylistSortMutation();

  const rows = () => {
    const RowsTitle = [
      {
        title: (
          <input
            key={playlistId}
            type="checkbox"
            id="mainInput"
            ref={baseInputRef}
            style={{ width: "24px", height: "24px", marginRight: "24px" }}
            onClick={() => {
              if (baseInputRef.current.checked) {
                setCheckedMainCheckBox(true);
              } else {
                setCheckedMainCheckBox(false);
              }
            }}
          />
        ),
        type: "checkbox",
        titleSize: "3%",
        showData: true,
      },
      // {
      //   title: "",
      //   type: "button",
      //   titleSize: "1%",
      //   showData: false,
      // },

      {
        title: "",
        type: "button",
        titleSize: "1%",
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
        titleSize: "5%",
        showData: true,
      },
    ];

    return RowsTitle;
  };

  const onPageChange = (page) => {
    console.log("4 Step - setCurrentPage in mutation", page);
    setCurrentPage(page);
  };

  const onPageSizeChange = (size) => {
    console.log(size);
    setPageSize(size);
  };

  const handleClickSort = (data) => {
    console.log(data);
    updateSort({ playlistId, data });
    // setSortedBy(data);
    if (currentPage > 1) {
      setCurrentPage(1);
      setIsSorterd(true);
    }
  };

  const checkedAllFn = (data) => {
    console.log(data);
    if (!data) {
      if (baseInputRef !== undefined) {
        baseInputRef.current.checked = false;
        setCheckedMainCheckBox(false);
      }
    } else {
      baseInputRef.current.checked = true;
      setCheckedMainCheckBox(true);
    }
  };
  return (
    <>
      {error?.status === 500 && isError && <Error500 />}
      {error?.status !== 500 && isError && <ErrorNotFound />}
      {!isSuccess && !error && <Loader />}

      {data?.totalTracks !== undefined && (
        <>
          <AddTracks
            iconButton={`${symbol}#icon-plus`}
            textButton={"Музику"}
            playlistId={playlistId}
            uploadTrackInPlaylist={uploadTrackInPlaylist}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <PlaylistListItem
              icon={data.playlist.playListAvatarURL}
              title={data.playlist.playListName}
              placeListCardInfo={true}
              id={playlistId}
              countTracks={data.totalTracks}
            />

            <SortTracks
              onClick={handleClickSort}
              sortType={"random"}
              marginTop={"0px"}
            />

            <PlayListControl
              isPublished={data.playlist.published}
              countTracks={data.totalTracks}
              playlistName={data.playlist.playListName}
              isFetchingPlaylistById={isFetchingPlaylistById}
              isLoadingUploadTrackInPlaylist={isLoadingUploadTrackInPlaylist}
            />
          </div>
        </>
      )}
      {isSuccess && !error && (
        <TracksTable
          title={"In playlist"}
          showTitle={false}
          marginTopWrapper={"24px"}
          isInPlayList={true}
          playListId={data.playlist._id}
          playListGenre={data.playlist.playlistGenre}
          checkBox={true}
          isCheckedAll={checkedMainCheckBox}
          tracks={data.playlist.trackList}
          error={error}
          isFetching={isFetchingPlaylistById}
          isSuccess={isSuccess}
          dataUpload={dataUploadTrackInPlaylist}
          isErrorUpload={isErrorUploadTrackInPlaylist}
          isSuccessUpload={isSuccessUploadTrackInPlaylist}
          isLoadingUpload={isLoadingUploadTrackInPlaylist}
          errorUpload={errorUploadTrackInPlaylist}
          isUninitialized={isUninitializedUploadTrackInPlaylist}
          rows={rows()}
          onChangeCurrentPage={onPageChange}
          onChangeSizePage={onPageSizeChange}
          currentPage={currentPage}
          pageSize={pageSize}
          totalPages={data.totalPages}
          totalTracks={data.totalTracks}
          tracksSRC={data.tracksSRC}
          isSorted={isSorted}
          checkedAllFn={checkedAllFn}
        />
      )}
    </>
  );
};

export default TracksPage;
