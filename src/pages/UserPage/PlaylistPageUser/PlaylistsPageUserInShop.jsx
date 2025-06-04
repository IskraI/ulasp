import { useParams } from 'react-router-dom';
import { ErrorText } from './PageUserCommon.styled';
import { useGetShopByIdforUserQuery } from '../../../redux/shopsUserSlice';
import LatestPlaylists from '../../../components/UserMediaComponent/PlayLists/PlayLists';
import { Loader } from '../../../components/Loader/Loader';

const PlaylistsPageUserInGenre = () => {
  const { shopId } = useParams();

  const { data, isFetching, isError, isSuccess } =
    useGetShopByIdforUserQuery(shopId);

  return (
    <>
      {isFetching && !isError && <Loader />}
      {!isError && isSuccess && (
        <>
          {data.playList.length > 0 ? (
            <LatestPlaylists
              title={'Плейлисти'}
              shopCategoryName={data.shopCategoryName}
              data={data.playList}
              isFetching={isFetching}
            />
          ) : (
            <ErrorText>В цьому закладі ще немає плейлістів</ErrorText>
          )}
        </>
      )}
    </>
  );
};

export default PlaylistsPageUserInGenre;
