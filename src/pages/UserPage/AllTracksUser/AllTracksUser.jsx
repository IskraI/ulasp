import TabNavigation from "../../../components/TabNavigation/TabNavigation";
import TracksTable from "../../../components/UserMediaComponent/TracksTable/TracksTableUser";
import { useGetAllTracksforUserQuery  } from "../../../redux/tracksUserSlice";
import { BtnSort } from "./AllTracksUser.styled";
import symbol from "../../../assets/symbol.svg";
import { useState, useId, useRef } from "react";
import NavMusic from "../../../components/UserMediaComponent/NavMusic/NavMusic"
import Player from "../../../components/Player/Player";
import { Loader } from "../../../components/Loader/Loader";


// const RowsTitle = ["", "Назва пісні", "Виконавець", "Тривалість", "Жанр", ""];

const AllTracksUser = () => {
  const id = useId();
  
  const BaseInputRef = useRef(null);
  const [checkedMainCheckBox, setCheckedMainCheckBox] = useState(false);

  const {
    data: allTracks,

    error: errorLoadingAllTracks,
    isFetching: isFetchingAllTracks,
    } = useGetAllTracksforUserQuery();
    
  const links = [
    { path: "/user/medialibrary/newplaylists", title: "Нові плейлисти" },
    { path: "/user/medialibrary/newtracks", title: "Нова музика" },
  ];
//     const [shuffleTracks, setShuffleTracks] = useState(false);


//   const shuffleArray = (array) => {
    
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };

//   const handleShuffleClick = () => {
//            setShuffleTracks(shuffleArray([...allTracks]));
//        setShuffleTracks(!shuffleTracks);
//   };

//   const shuffledTracks = shuffleTracks ? shuffleArray([...allTracks]) : allTracks;
console.log('allTracks', allTracks)
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
        showData: true,
      },
    ];

    return RowsTitle;
  };
     const [sortAlphabetically, setSortAlphabetically] = useState(false);

  const handleSortClick = () => {
    setSortAlphabetically(!sortAlphabetically);
    };
    
     const sortedTracks = allTracks
    ? [...allTracks].sort((a, b) => {
        const titleA = (a.trackName || "").toUpperCase();
        const titleB = (b.trackName || "").toUpperCase();
        return sortAlphabetically ? titleA.localeCompare(titleB) : 0;
      })
        : [];
    
       return (
      <>
           <TabNavigation /> 
           <NavMusic links={links} />
       <BtnSort onClick={handleSortClick}><svg width="24" height="24" >
                <use href={`${symbol}#icon-sort`}></use>
              </svg></BtnSort>   
      {isFetchingAllTracks && <Loader/>}
           {!isFetchingAllTracks && !errorLoadingAllTracks && (
             <>
               <TracksTable
                  title={"In playlist"}
            showTitle={false}
            marginTopWrapper={"24px"}
            isInPlayList={true}
            // playListId={allTracks.playlist._id}
            // playListGenre={allTracks.playlist.playlistGenre}
                  tracks={sortedTracks}
          error={errorLoadingAllTracks}
          isFetching={isFetchingAllTracks}
           display="none"
            rows={rows()}
             />
               <Player tracks={sortedTracks} />
               </>
           )}
           
    </>
  );
};

export default AllTracksUser;
