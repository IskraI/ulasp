import TracksTable from "../../../components/UserMediaComponent/TracksTable/TracksTableUser";
import { useGetPlaylistByIdForUserQuery } from "../../../redux/playlistsUserSlice";
import PlaylistListItem from "../../../components/UserMediaComponent/PlayLists/PlayListsItem";
import { BtnSort } from "../AllTracksUser/AllTracksUser.styled";
import { ErrorNotFound, Error500 } from "../../../components/Errors/Errors";
import symbol from "../../../assets/symbol.svg";
import Player from "../../../components/Player/Player";
import { useState, useEffect, useLayoutEffect, useRef,  useId  } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../../components/Loader/Loader";


const TracksPage = () => {
 const id = useId();
  const BaseInputRef = useRef(null);
  const [checkedMainCheckBox, setCheckedMainCheckBox] = useState(false);

  const { playlistId } = useParams();

  const { data,isFetching: isFetchingPlaylistById, isSuccess, error } =
    useGetPlaylistByIdForUserQuery(playlistId);



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

   useLayoutEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, []);

  console.log('data PlaylistById', data)

  return (
    <>
      {error?.status === "500" && <Error500 />}
      {error && <ErrorNotFound />}
      {!isSuccess && !error && <Loader />}
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
            playListId={data.playlist._id}
            playListGenre={data.playlist.playlistGenre}
             tracks={isSorted ? sortedTracks : data.playlist.trackList}
             error={error}
            isFetching={isFetchingPlaylistById}
            isSuccess={isSuccess}
            display="none"
            rows={rows()}
          />
          {/* <Player tracks={sortedTracks} /> */}
        </>
      )}
    </>
  );
};

export default TracksPage;
