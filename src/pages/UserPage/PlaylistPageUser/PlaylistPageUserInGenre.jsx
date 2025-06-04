import { useParams } from 'react-router-dom';
import { ErrorText, GenresWrapper } from './PageUserCommon.styled';
import { useGetGenreByIdforUserQuery } from '../../../redux/genersUserSlice';
import LatestPlaylists from '../../../components/UserMediaComponent/PlayLists/PlayLists';
import { Loader } from '../../../components/Loader/Loader';
import NavMusic from '../../../components/UserMediaComponent/NavMusic/NavMusic';
import DropDownGeners from '../../../components/DropDownGeners/DropDownGeners';

const PlaylistsPageUserInGenre = () => {
  const { genreId } = useParams();

  const { data, isFetching, isError, isSuccess } =
    useGetGenreByIdforUserQuery(genreId);

  const links = [
    {
      path: `/user/medialibrary/genres/${genreId}/playlists`,
      title: 'Плейлисти'
    },
    { path: `/user/medialibrary/genres/${genreId}/tracks`, title: 'Пісні' }
  ];

  return (
    <>
      {isFetching && !isError && <Loader />}
      {!isError && isSuccess && (
        <>
          <GenresWrapper>
            <NavMusic links={links} />
            <DropDownGeners currentGenreId={genreId} />
          </GenresWrapper>
          {data.playList.length > 0 ? (
            <LatestPlaylists
              genre={data.genre}
              data={data.playList}
              isFetching={isFetching}
            />
          ) : (
            <ErrorText>В цьому жанрі ще немає плейлістів</ErrorText>
          )}
        </>
      )}
    </>
  );
};

export default PlaylistsPageUserInGenre;
