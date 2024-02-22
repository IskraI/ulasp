import CreatePlayListItem from "./CreatePlaylistItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import {useSelector} from "react-redux"
import {
  TitleWrapper,
  ControlWrapper,
  MediaList,
  TitleContainer,
} from "../../UserMediaComponent/PlayLists/MediaList.styled";
import { useFavoritePlaylistForUserQuery, useAddPlaylistForUserQuery } from "../../../redux/playlistsUserSlice";
import symbol from "../../../assets/symbol.svg";

const CreatePlaylists = ({
  title,
  displayPlayer,
 showNavigationLink,
  data: playlists,
 
  isFetching,
  error,
//   genre,
  shopCategoryName,
}) => {
  const {
    data: dataFavorite,
    isLoading: isLoadingFavoritePlaylist,
  } = useFavoritePlaylistForUserQuery();
  
//   const {
//     data: dataAdd,
//     isLoading: isLoadingAddPlaylist,
//   } = useAddPlaylistForUserQuery();


// console.log('dataAdd playlist', dataAdd.add )
// console.log('dataFavorite playlist', dataFavorite.favorites)


  return (
    <>
      <TitleContainer>
        <TitleWrapper>{title}</TitleWrapper>
      </TitleContainer>
      {!isFetching && !error && !isLoadingFavoritePlaylist  && (
        <>
          {/* <ControlWrapper> */}
          {/* <TitleWrapper>Нові плейлисти</TitleWrapper> */}

          {/* </ControlWrapper> */}
          <MediaList>
           
            {playlists && playlists.map(({ _id, playListName, playListAvatarURL }) => {
              // console.log(
              //   "dataFavorite.favorites.includes(_id)",
              //   dataFavorite.favorites.some((item) => item._id === _id)
              // );

              return (

                    <CreatePlayListItem
                      key={_id}
                      id={_id}
                      favoriteStatus={dataFavorite.favorites.some((item) => item._id === _id)}
                       title={playListName}
                      icon={playListAvatarURL}
                    //   genre={genre}
                      shopCategoryName={shopCategoryName}
                    />
                                     
            );

            })}

          </MediaList>
          <MediaNavigationLink link={"createplaylists"} showNavigationLink={showNavigationLink} />
                  </>
        )}
    </>
  );
};

export default CreatePlaylists;