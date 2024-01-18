import Genres from "../../../components/EditorComponents/Genres/Genres";
import { useGetAllGenresQuery } from "../../../redux/genresSlice";
import { Loader } from "../../../components/Loader/Loader";

const AllGenresPage = () => {
  const {
    data: genres,
    isFetching: isFetchingAllGenre,
    error: isErrorAllGenre,
    isSuccess,
  } = useGetAllGenresQuery();

  return (
    <>
      {!isSuccess && !isErrorAllGenre && <Loader />}
      {isSuccess && !isErrorAllGenre && (
        <Genres
          displayPlayer={"flex"}
          display={"none"}
          data={genres}
          isFetching={isFetchingAllGenre}
          error={isErrorAllGenre}
        />
      )}
    </>
  );
};

export default AllGenresPage;
