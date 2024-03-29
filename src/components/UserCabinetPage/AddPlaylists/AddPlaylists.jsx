import AddPlayListsItem from "./AddPlaylistsItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import { useSelector } from "react-redux";
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
// import { MockPlayer } from "../TracksTable/TracksTable.styled";
import symbol from "../../../assets/symbol.svg";

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

  console.log("dataAdd playlist", dataAdd);
  // console.log('dataFavorite playlist', dataFavorite.favorites)

  // console.log("dataAdd AddPlaylists", dataAdd);
  // console.log('dataFavorite playlist', dataFavorite.favorites)

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
            {dataAdd?.map(({ _id, playListName, playListAvatarURL }) => {
              // console.log(
              //   "dataFavorite.favorites.includes(_id)",
              //   dataFavorite.favorites.some((item) => item._id === _id)
              // );

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
      )}
    </>
  );
};

export default AddPlaylists;
