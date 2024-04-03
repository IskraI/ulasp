import FavoritePlaylistsItem from "./FavoritePlaylistsItem";
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
import { LoaderButton } from "../../Loader/Loader";

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
  // const {
  //   data: dataFavorite,
  //     isLoading: isLoadingFavoritePlaylist,
  //     } = useFavoritePlaylistForUserQuery();

  const {
    data: dataAdd,
    isLoading: isLoadingAddPlaylist,
    isFetching: isFetchingAddPlaylist,
    isSuccess: isSuccesAddPlaylist,
    isError: isErrorAddPlaylist,
  } = useAddPlaylistForUserQuery();

  // console.log('dataAdd playlist', dataAdd )
  console.log("dataFavorite playlist", dataFavorite);
  console.log("title", title);

  return (
    <>
      <TitleContainer>
        <TitleWrapper>{title}</TitleWrapper>
      </TitleContainer>
      {/* {isFetching && (
        <MediaList>
          <li
            style={{
              marginTop: "26px",
              marginBottom: "26px",
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <LoaderButton color={"#00BFFF"} width={100} height={100} />
          </li>
        </MediaList>
      )} */}
      {!error && (
        <>
          {/* <ControlWrapper> */}
          {/* <TitleWrapper>Нові плейлисти</TitleWrapper> */}

          {/* </ControlWrapper> */}
          <MediaList>
            {dataFavorite?.map(({ _id, playListName, playListAvatarURL }) => {
              // console.log(
              //   "dataFavorite.favorites.includes(_id)",
              //   dataFavorite.favorites.some((item) => item._id === _id)
              // );

              return (
                <FavoritePlaylistsItem
                  key={_id}
                  id={_id}
                  favoriteStatus={dataFavorite?.some(
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
            link={"favoriteplaylists"}
            showNavigationLink={showNavigationLink}
          />
        </>
      )}
    </>
  );
};

export default FavoritePlaylists;
