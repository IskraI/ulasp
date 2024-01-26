import TracksTable from "../../../components/UserMediaComponent/TracksTable/TracksTableUser";
import { useGetPlaylistByIdForUserQuery } from "../../../redux/playlistsUserSlice";
import PlaylistListItem from "../../../components/UserMediaComponent/PlayLists/PlayListsItem";
import { BtnSort } from "../AllTracksUser/AllTracksUser.styled";

import symbol from "../../../assets/symbol.svg";
import Player from "../../../components/Player/Player";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// const RowsTitle = [
//   // "",
//   "",
//   "Назва пісні",
//   "Виконавець",
//   "Тривалість",
//   "Жанр",
//   "",
// ];



const TracksPage = () => {
 const id = useId();
  const BaseInputRef = useRef(null);
  const [checkedMainCheckBox, setCheckedMainCheckBox] = useState(false);

  const { playlistId } = useParams();

  const { data, isFetching, isSuccess, error } =
    useGetPlaylistByIdForUserQuery(playlistId);

  if (isSuccess) {
    console.log("Count", data.totalTracks);
  }

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
        showData: true,
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
        titleSize: "15%",
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

  const [sortedTracks, setSortedTracks] = useState([]);
   const [isSorted, setIsSorted] = useState(false); 
   
   useEffect(() => {
    if (isSuccess) {
      setSortedTracks([...data.playlist.trackList]); 
    }
  }, [isSuccess, data]);

   const handleSortClick = () => {
    if (!isSorted) {
      const sorted = [...sortedTracks].sort((a, b) => {
        return a.trackName.localeCompare(b.trackName);
      });
      setSortedTracks(sorted);
      setIsSorted(true); 
    } else {
      
      setSortedTracks([...data.playlist.trackList]);
      setIsSorted(false); 
    }
  };

  return (
    <>
         {isSuccess && !error && (
        <>
          <PlaylistListItem
            icon={data.playlist.playListAvatarURL}
            title={data.playlist.playListName}
            placeListCardInfo={true}
            id={playlistId}
            countTracks={data.totalTracks}
          />
           <BtnSort onClick={handleSortClick}><svg width="24" height="24" >
                <use href={`${symbol}#icon-sort`}></use>
              </svg></BtnSort>  
          <TracksTable
            title={"In playlist"}
            showTitle={false}
            marginTopWrapper={"24px"}
            isInPlayList={true}
            // checkBox={true}
            // isCheckedAll={checkedMainCheckBox}
            tracks={sortedTracks}
            error={error}
            isFetching={isFetching}
            isSuccess={isSuccess}
            display="none"
            // rows={RowsTitle}
             rows={rows()}
          />
          <Player tracks={sortedTracks} />
        </>
      )}
    </>
  );
};

export default TracksPage;
