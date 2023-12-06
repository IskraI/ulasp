import Genres from "../../../components/EditorComponents/Genres/Genres";
import { useGetAllGenresQuery } from "../../../redux/genresSlice";
import { Loader } from "../../../components/Loader/Loader";

const AllGenres = () => {
  const {
    data: genres,
    isFetching: isFetchingAllGenre,
    error: isErrorAllGenre,
  } = useGetAllGenresQuery();

  return (
    <>
      {isFetchingAllGenre && !isErrorAllGenre && <Loader />}
      {!isFetchingAllGenre && !isErrorAllGenre && (
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

export default AllGenres;
