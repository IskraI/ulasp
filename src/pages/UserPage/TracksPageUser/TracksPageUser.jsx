import TracksTable from "../../../components/UserMediaComponent/TracksTable/TracksTable";
import { useGetPlaylistByIdForUserQuery } from "../../../redux/playlistsUserSlice";
import PlaylistListItem from "../../../components/UserMediaComponent/PlayLists/PlayListsItem";
import { BtnSort } from "../AllTracksUser/AllTracksUser.styled";
import symbol from "../../../assets/symbol.svg";
import Player from "../../../components/Player/Player";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RowsTitle = [
  // "",
  "",
  "Назва пісні",
  "Виконавець",
  "Тривалість",
  "Жанр",
  "",
];

const TracksPage = () => {
  const { playlistId } = useParams();

  const { data, isFetching, isSuccess, error } =
    useGetPlaylistByIdForUserQuery(playlistId);

  if (isSuccess) {
    console.log("Count", data.totalTracks);
  }

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
            tracks={sortedTracks}
            error={error}
            isFetching={isFetching}
            isSuccess={isSuccess}
            display="none"
            rows={RowsTitle}
          />
          <Player tracks={sortedTracks} />
        </>
      )}
    </>
  );
};

export default TracksPage;
