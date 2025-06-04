import AddPlaylists from './AddPlaylists';

import {
  TitleWrapper,
  TitleContainer
} from '../../UserMediaComponent/MediaList/MediaList.styled';
import {
  useFavoritePlaylistForUserQuery,
  useAddPlaylistForUserQuery
} from '../../../redux/playlistsUserSlice';

const AddAllPlaylists = ({
  title,

  isLoading,

  isFetching,
  error
}) => {
  const { isLoading: isLoadingFavoritePlaylist } =
    useFavoritePlaylistForUserQuery();

  const { data: dataAdd } = useAddPlaylistForUserQuery();

  return (
    <>
      <TitleContainer>
        <TitleWrapper>{title}</TitleWrapper>
      </TitleContainer>
      {!isFetching && !error && !isLoadingFavoritePlaylist && (
        <>
          <AddPlaylists
            data={dataAdd?.add}
            isLoading={isLoading}
            isFetching={isFetching}
            error={error}
            title={'Додані плейлисти'}
            showNavigationLink={false}
          />
        </>
      )}
    </>
  );
};

export default AddAllPlaylists;
