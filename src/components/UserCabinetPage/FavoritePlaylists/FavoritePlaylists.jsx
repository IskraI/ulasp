import FavoritePlaylistsItem from "./FavoritePlaylistsItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";

import { NoData } from "../../Errors/Errors";

import {
  TitleWrapper,
  ControlWrapper,
  TitleContainer,
} from "../../UserMediaComponent/PlayLists/MediaList.styled";


import { MediaList } from "../../UserMediaComponent/MediaList/MediaList.styled";
import { useAddPlaylistForUserQuery } from "../../../redux/playlistsUserSlice";

const FavoritePlaylists = ({
  title,
  displayPlayer,
  showNavigationLink,
  data: dataFavorite,
  isLoading: isLoadingFavoritePlaylist,
  // data: dataAdd,
  // isLoadingAddPlaylist,
  isLoading,
  isFetching,
  error,
  genre,
  shopCategoryName,
}) => {
  const {
    data: dataAdd,
    isLoading: isLoadingAddPlaylist,
    isFetching: isFetchingAddPlaylist,
    isSuccess: isSuccesAddPlaylist,
    isError: isErrorAddPlaylist,
  } = useAddPlaylistForUserQuery();

  return (
    <>
      <TitleContainer>
        <TitleWrapper>{title}</TitleWrapper>
      </TitleContainer>
      {dataFavorite?.length === 0 && (
        <NoData text={"Ви ще не додали жодного плейлиста"} textColor={"grey"} />
      )}
      {!error && (
        <>
          <MediaList>
            {dataFavorite?.map(
              ({ _id, playListName, playListAvatarURL, owner }) => {
                return (
                  <FavoritePlaylistsItem
                    key={_id}
                    id={_id}
                    owner={owner}
                    favoriteStatus={dataFavorite?.some(
                      (item) => item._id === _id
                    )}
                    addStatus={dataAdd?.add?.some((item) => item._id === _id)}
                    title={playListName}
                    icon={playListAvatarURL}
                    genre={genre}
                    shopCategoryName={shopCategoryName}
                  />
                );
              }
            )}
          </MediaList>
          <MediaNavigationLink
            link={"favoriteplaylists"}
            showNavigationLink={showNavigationLink}
          />
        </>
      )}
    </>
  );
};

export default FavoritePlaylists;
