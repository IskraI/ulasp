import Genres from '../../../components/UserMediaComponent/Genres/Genres';
import { useGetAllGenresForUserQuery } from '../../../redux/genersUserSlice';
import { Loader } from '../../../components/Loader/Loader';
import TabNavigation from '../../../components/TabNavigation/TabNavigation';
const AllGenresForUser = () => {
  const {
    data: genres,
    isFetching: isFetchingAllGenre,
    error: isErrorAllGenre
  } = useGetAllGenresForUserQuery();

  return (
    <>
      {/* <TabNavigation /> */}
      {isFetchingAllGenre && !isErrorAllGenre && <Loader />}
      {!isFetchingAllGenre && !isErrorAllGenre && (
        <Genres
          data={genres}
          isFetching={isFetchingAllGenre}
          error={isErrorAllGenre}
          showNavigationLink={false}
        />
      )}
    </>
  );
};

export default AllGenresForUser;
