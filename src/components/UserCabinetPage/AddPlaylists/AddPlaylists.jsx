import AddPlayListsItem from "./AddPlaylistsItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import {
  TitleWrapper,
  ControlWrapper,
  MediaList,
  TitleContainer,
} from "../../UserMediaComponent/PlayLists/MediaList.styled";
import {
  useFavoritePlaylistForUserQuery,
  useAddPlaylistForUserQuery,
} from "../../../redux/playlistsUserSlice";

const AddPlaylists = ({
  title,
  displayPlayer,

  showNavigationLink,
  data: dataAdd,
  // isLoadingAddPlaylist,
  isLoading,

  isFetching,
  error,
  genre,
  shopCategoryName,
}) => {
  const { data: dataFavorite, isLoading: isLoadingFavoritePlaylist } =
    useFavoritePlaylistForUserQuery();

  return (
    <>
      <TitleContainer>
        <TitleWrapper>{title}</TitleWrapper>
      </TitleContainer>

      <>
        <MediaList>
          {dataAdd?.map(({ _id, playListName, playListAvatarURL }) => {
            return (
              <AddPlayListsItem
                key={_id}
                id={_id}
                favoriteStatus={dataFavorite.favorites.some(
                  (item) => item._id === _id
                )}
                addStatus={dataAdd?.some((item) => item._id === _id)}
                title={playListName}
                icon={playListAvatarURL}
                genre={genre}
                shopCategoryName={shopCategoryName}
              />
            );
          })}
        </MediaList>

        <MediaNavigationLink
          link={"addplaylists"}
          showNavigationLink={showNavigationLink}
        />
      </>
    </>
  );
};

export default AddPlaylists;
