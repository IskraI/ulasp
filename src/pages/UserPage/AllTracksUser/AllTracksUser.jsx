import TabNavigation from "../../../components/TabNavigation/TabNavigation";
import TracksTable from "../../../components/UserMediaComponent/TracksTable/TracksTable";
import { useGetAllTracksforUserQuery  } from "../../../redux/tracksUserSlice";
import { BtnSort } from "./AllTracksUser.styled";
import symbol from "../../../assets/symbol.svg";
import { useState } from "react";
import NavMusic from "../../../components/UserMediaComponent/NavMusic/NavMusic"
import Player from "../../../components/Player/Player";


const RowsTitle = ["", "Назва пісні", "Виконавець", "Тривалість", "Жанр", ""];

const AllTracksUser = () => {


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
      {isFetchingAllTracks && <p>Загружаемся.....</p>}
           {!isFetchingAllTracks && !errorLoadingAllTracks && (
             <>
        <TracksTable
                  tracks={sortedTracks}
          error={errorLoadingAllTracks}
          isFetching={isFetchingAllTracks}
          rows={RowsTitle}
             />
               <Player tracks={sortedTracks} />
               </>
           )}
           
    </>
  );
};

export default AllTracksUser;
