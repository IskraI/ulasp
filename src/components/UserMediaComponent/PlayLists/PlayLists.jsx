import PlayListItem from "./PlayListsItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import {useSelector} from "react-redux"
import {
  TitleWrapper,
  ControlWrapper,
  MediaList,
  TitleContainer,
} from "./MediaList.styled";
import { useFavoritePlaylistForUserQuery } from "../../../redux/playlistsUserSlice";
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

// console.log('dataFavorite playlist', dataFavorite )
  return (
    <>
      <TitleContainer>
        <TitleWrapper>{title}</TitleWrapper>
      </TitleContainer>
      {!isFetching && !error && !isLoadingFavoritePlaylist && (
        <>
          {/* <ControlWrapper> */}
          {/* <TitleWrapper>Нові плейлисти</TitleWrapper> */}

          {/* </ControlWrapper> */}
          <MediaList>
            {console.log(playlists)}
            {playlists.map(({ _id, playListName, playListAvatarURL }) => {
              // console.log(
              //   "dataFavorite.favorites.includes(_id)",
              //   dataFavorite.favorites.some((item) => item._id === _id)
              // );

              return (
                <PlayListItem
                  key={_id}
                  id={_id}
                  favoriteStatus={dataFavorite.favorites.some((item) => item._id === _id)}
                  title={playListName}
                  icon={playListAvatarURL}
                  genre={genre}
                  shopCategoryName={shopCategoryName}
                />
              );
            })}
          </MediaList>
          <MediaNavigationLink link={"newplaylists"} display={display} />
          {/* <MockPlayer style={{ display: displayPlayer }}>
            Тут будет плеер
          </MockPlayer> */}
        </>
      )}
    </>
  );
};

export default LatestPlaylists;
