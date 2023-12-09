import Genres from "../../../components/UserMediaComponent/Genres/Genres";
import { useGetAllGenresForUserQuery } from "../../../redux/genresSlice";
import { Loader } from "../../../components/Loader/Loader";

const AllGenresForUser = () => {
  const {
    data: genres,
    isFetching: isFetchingAllGenre,
    error: isErrorAllGenre,
  } = useGetAllGenresForUserQuery();

  return (
      <>
          {isFetchingAllGenre && !isErrorAllGenre && <Loader />}
          {!isFetchingAllGenre && !isErrorAllGenre && (
              <Genres
                  displayPlayer={"none"}
                   display={"none"}
                  data={genres}
                  isFetching={isFetchingAllGenre}
                  error={isErrorAllGenre}
              />
          )}
    </>
  );
};

export default AllGenresForUser;