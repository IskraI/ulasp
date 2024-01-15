import PlayListItem from "./PlayListsItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import {useSelector} from "react-redux"
import {
  TitleWrapper,
  ControlWrapper,
  MediaList,
  TitleContainer,
} from "./MediaList.styled";
import { useFavoritePlaylistForUserQuery, useAddPlaylistForUserQuery } from "../../../redux/playlistsUserSlice";
// import { MockPlayer } from "../TracksTable/TracksTable.styled";
import symbol from "../../../assets/symbol.svg";

const LatestPlaylists = ({
  title,
  displayPlayer,
  display,
  data: playlists,
 
  isFetching,
  error,
  genre,
  shopCategoryName,
}) => {
  const {
    data: dataFavorite,
    isLoading: isLoadingFavoritePlaylist,
  } = useFavoritePlaylistForUserQuery();
  
  const {
    data: dataAdd,
    isLoading: isLoadingAddPlaylist,
  } = useAddPlaylistForUserQuery();


// console.log('dataAdd playlist', dataAdd.add )
// console.log('dataFavorite playlist', dataFavorite.favorites)


  return (
    <>
      <TitleContainer>
        <TitleWrapper>{title}</TitleWrapper>
      </TitleContainer>
      {!isFetching && !error && !isLoadingFavoritePlaylist && !isLoadingAddPlaylist && (
        <>
          {/* <ControlWrapper> */}
          {/* <TitleWrapper>Нові плейлисти</TitleWrapper> */}

          {/* </ControlWrapper> */}
          <MediaList>
           
            {playlists.map(({ _id, playListName, playListAvatarURL }) => {
              // console.log(
              //   "dataFavorite.favorites.includes(_id)",
              //   dataFavorite.favorites.some((item) => item._id === _id)
              // );

              return (<>

                <div key={_id}>



                {!isLoadingAddPlaylist && ( <PlayListItem

                  key={_id}
                  id={_id}
                  favoriteStatus={dataFavorite.favorites.some((item) => item._id === _id)}
                  addStatus={dataAdd.add.some((item) => item._id === _id)}
                  title={playListName}
                  icon={playListAvatarURL}
                  genre={genre}
                  shopCategoryName={shopCategoryName}



                />)}
                </div>
              </>

               
            );

            })}

          </MediaList>
          <MediaNavigationLink link={"newplaylists"} display={display} />
                  </>
        )}
    </>
  );
};

export default LatestPlaylists;
