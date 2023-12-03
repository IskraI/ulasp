import Genres from "../../../components/EditorComponents/Genres/Genres";
import { useGetAllGenresQuery } from "../../../redux/genresSlice";

const AllGenres = () => {
  const {
    data: genres,
    isFetching: isFetchingAllGenre,
    error: isErrorAllGenre,
  } = useGetAllGenresQuery();

  return (
    <>
      <Genres
        displayPlayer={"none"}
        data={genres}
        isFetching={isFetchingAllGenre}
        error={isErrorAllGenre}
      />
    </>
  );
};

export default AllGenres;
