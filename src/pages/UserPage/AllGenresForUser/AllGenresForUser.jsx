import Genres from "../../../components/UserMediaComponent/Genres/Genres";
import { useGetAllGenresForUserQuery } from "../../../redux/genresSlice";
import { Loader } from "../../../components/Loader/Loader";
import TabNavigation from "../../../components/TabNavigation/TabNavigation";
const AllGenresForUser = () => {
  const {
    data: genres,
    isFetching: isFetchingAllGenre,
    error: isErrorAllGenre,
  } = useGetAllGenresForUserQuery();

  return (
      <>
          <TabNavigation/> 
          {isFetchingAllGenre && !isErrorAllGenre && <Loader />}
          {!isFetchingAllGenre && !isErrorAllGenre && (
              <Genres
                  displayPlayer={"none"}
                   display={"none"}
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