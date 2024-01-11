import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import { useGetPlaylistByIdQuery } from "../../../redux/playlistsSlice";
import PlaylistListItem from "../../../components/EditorComponents/PlayLists/PlayListItem";
import PlayListControl from "../../../components/EditorComponents/PlayLists/PlayListControl";
import AddTracks from "../../../components/EditorComponents/AddTracks/AddTracks";
import symbol from "../../../assets/symbol.svg";

import Player from "../../../components/Player/Player";

import { useParams } from "react-router-dom";
import { useLayoutEffect, useRef, useState, useId } from "react";

const TracksPage = () => {
  const id = useId();
  const BaseInputRef = useRef(null);
  const [checkedMainCheckBox, setCheckedMainCheckBox] = useState(false);

  const { playlistId } = useParams();

  const { data, isFetching, isSuccess, error } =
    useGetPlaylistByIdQuery(playlistId);

  if (isSuccess) {
    // console.log("Count", data.totalTracks);
    // console.log("data", data);
  }

  const rows = () => {
    const RowsTitle = [
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
      />,

      "",
      "Назва пісні",
      "Виконавець",
      "Тривалість",
      "Жанр",
      "",
    ];

    return RowsTitle;
  };

  useLayoutEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      {isSuccess && !error && (
        <>
          <AddTracks
            iconButton={`${symbol}#icon-plus`}
            textButton={"Музику"}
            playlistId={playlistId}
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
            />
          </div>
          <TracksTable
            title={""}
            showTitle={false}
            marginTopWrapper={"24px"}
            isInPlayList={true}
            checkBox={true}
            isCheckedAll={checkedMainCheckBox}
            tracks={data.playlist.trackList}
            error={error}
            isFetching={isFetching}
            isSuccess={isSuccess}
            display="none"
            rows={rows()}
          />
          <Player tracks={data.playlist.trackList} />
        </>
      )}
    </>
  );
};

export default TracksPage;
