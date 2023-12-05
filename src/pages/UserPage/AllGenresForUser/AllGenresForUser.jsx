import Genres from "../../../components/EditorComponents/Genres/Genres";
import { useGetAllGenresForUserQuery } from "../../../redux/genresSlice";

const AllGenresForUser = () => {
  const {
    data: genres,
    isFetching: isFetchingAllGenre,
    error: isErrorAllGenre,
  } = useGetAllGenresForUserQuery();

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

export default AllGenresForUser;