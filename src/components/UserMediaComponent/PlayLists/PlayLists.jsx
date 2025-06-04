import PlayListItem from './PlayListsItem';
import MediaNavigationLink from '../../NavigationLink/NavigationLink';

import {
  useFavoritePlaylistForUserQuery,
  useAddPlaylistForUserQuery
} from '../../../redux/playlistsUserSlice';

import { NoData } from '../../Errors/Errors';

import { TitleWrapper, TitleContainer } from './MediaList.styled';
import { MediaList } from '../MediaList/MediaList.styled';

const LatestPlaylists = ({
  title,

  showNavigationLink,
  data: playlists,

  isFetching,
  error,
  genre,
  shopCategoryName
}) => {
  const { data: dataFavorite, isLoading: isLoadingFavoritePlaylist } =
    useFavoritePlaylistForUserQuery();

  const { data: dataAdd, isLoading: isLoadingAddPlaylist } =
    useAddPlaylistForUserQuery();

  // console.log('dataFavorite playlist', dataFavorite.favorites)

  return (
    <>
      <TitleContainer>
        <TitleWrapper>{title}</TitleWrapper>
      </TitleContainer>
      {!isFetching && !playlists.length && (
        <NoData text={'Плейлисти ще не додані'} textColor={'grey'} />
      )}
      {!isFetching &&
        !error &&
        !isLoadingFavoritePlaylist &&
        !isLoadingAddPlaylist && (
          <>
            <MediaList>
              {playlists.map(({ _id, playListName, playListAvatarURL }) => {
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
              link={'newplaylists'}
              showNavigationLink={showNavigationLink}
            />
          </>
        )}
    </>
  );
};

export default LatestPlaylists;
