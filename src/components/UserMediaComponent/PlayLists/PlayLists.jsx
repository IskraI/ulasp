import PlayListItem from "./PlayListsItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import { TitleWrapper, MediaList, TitleContainer } from "./MediaList.styled";
import {
  useFavoritePlaylistForUserQuery,
  useAddPlaylistForUserQuery,
  useGetCreatePlaylistsForUserQuery,
} from "../../../redux/playlistsUserSlice";

import { NoData } from "../../Errors/Errors";

const LatestPlaylists = ({
  title,

  showNavigationLink,
  data: playlists,

  isFetching,
  error,
  genre,
  shopCategoryName,
}) => {
  const { data: dataFavorite, isLoading: isLoadingFavoritePlaylist } =
    useFavoritePlaylistForUserQuery();

  const { data: dataAdd, isLoading: isLoadingAddPlaylist } =
    useAddPlaylistForUserQuery();
  const {
    data: createPlaylists,
    isFetching: isFetchingCreatePlaylists,
    isSuccess: isSuccesCreatePlaylists,
    isError: isErrorCreatePlaylists,
  } = useGetCreatePlaylistsForUserQuery();
  console.log("dataAdd playlist", dataAdd.add);
  // console.log('dataFavorite playlist', dataFavorite.favorites)

  return (
    <>
      <TitleContainer>
        <TitleWrapper>{title}</TitleWrapper>
      </TitleContainer>
      {!isFetching && !playlists.length && (
        <NoData text={"Плейлисти ще не додані"} textColor={"grey"} />
      )}
      {!isFetching &&
        !error &&
        !isLoadingFavoritePlaylist &&
        !isLoadingAddPlaylist && (
          <>
            <MediaList>
              {playlists.map(({ _id, playListName, playListAvatarURL }) => {
                // console.log(
                //   "dataFavorite.favorites.includes(_id)",
                //   dataFavorite.favorites.some((item) => item._id === _id)
                // );

                return (
                  <PlayListItem
                    key={_id}
                    id={_id}
                    favoriteStatus={dataFavorite.favorites.some(
                      (item) => item._id === _id
                    )}
                    addStatus={dataAdd.add.some((item) => item._id === _id)}
                    title={playListName}
                    icon={playListAvatarURL}
                    genre={genre}
                    shopCategoryName={shopCategoryName}
                  />
                );
              })}
            </MediaList>
            <MediaNavigationLink
              link={"newplaylists"}
              showNavigationLink={showNavigationLink}
            />
          </>
        )}
    </>
  );
};

export default LatestPlaylists;
