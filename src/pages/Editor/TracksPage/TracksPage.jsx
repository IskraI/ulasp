import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import PlaylistListItem from "../../../components/EditorComponents/PlayLists/PlayListItem";
import PlayListControl from "../../../components/EditorComponents/PlayLists/PlayListControl";
import AddTracks from "../../../components/EditorComponents/AddTracks/AddTracks";
import symbol from "../../../assets/symbol.svg";

import Player from "../../../components/Player/Player";
import { useGetPlaylistByIdQuery } from "../../../redux/playlistsSlice";
import { useUploadTracksInPlaylistMutation } from "../../../redux/playlistsSlice";
import { ErrorNotFound, Error500 } from "../../../components/Errors/Errors";
import { useParams } from "react-router-dom";
import { useRef, useState, useId } from "react";
import { Loader } from "../../../components/Loader/Loader";

const TracksPage = () => {
  const id = useId();
  const BaseInputRef = useRef(null);
  const [checkedMainCheckBox, setCheckedMainCheckBox] = useState(false);

  const { playlistId } = useParams();

  const {
    data,
    isFetching: isFetchingPlaylistById,
    isSuccess,
    isLoading,
    error,
  } = useGetPlaylistByIdQuery(playlistId, {
    forceRefetch: true,
    refetchOnFocus: true,
  });

  // console.log("data", data);
  // console.log("isFetching", isFetching);
  // console.log("isSuccess", isSuccess);
  // console.log("isLoading", isLoading);

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

  if (isSuccess) {
    // console.log("Count", data.totalTracks);
    // console.log("data", data.playlist._id);
  }

  const rows = () => {
    const RowsTitle = [
      // {
      //   title: (
      //     <input
      //       key={id}
      //       type="checkbox"
      //       id="mainInput"
      //       ref={BaseInputRef}
      //       style={{ width: "24px", height: "24px", marginRight: "24px" }}
      //       onClick={() => {
      //         if (BaseInputRef.current.checked) {
      //           setCheckedMainCheckBox(true);
      //         } else {
      //           setCheckedMainCheckBox(false);
      //         }
      //       }}
      //     />
      //   ),
      //   type: "checkbox",
      //   titleSize: "2%",
      //   showData: true,
      // },
      {
        title: "",
        type: "button",
        titleSize: "1%",
        showData: false,
      },

      {
        title: "",
        type: "button",
        titleSize: "1%",
        showData: false,
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

  return (
    <>
      {error?.status === "500" && <Error500 />}
      {error && <ErrorNotFound />}
      {!isSuccess && !error && <Loader />}
      {isSuccess && !error && (
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
            <PlayListControl
              isPublished={data.playlist.published}
              countTracks={data.totalTracks}
              playlistName={data.playlist.playListName}
              isFetchingPlaylistById={isFetchingPlaylistById}
              isLoadingUploadTrackInPlaylist={isLoadingUploadTrackInPlaylist}
            />
          </div>
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
            display="none"
            rows={rows()}
          />
          {/* <Player tracks={data.playlist.trackList} /> */}
        </>
      )}
    </>
  );
};

export default TracksPage;
