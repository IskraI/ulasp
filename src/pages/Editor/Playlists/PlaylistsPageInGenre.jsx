import { useParams } from "react-router-dom";

import { useGetGenreByIdQuery } from "../../../redux/genresSlice";
import LatestPlaylists from "../../../components/EditorComponents/PlayLists/PlayLists";
import { Loader } from "../../../components/Loader/Loader";

const Playlists = () => {
  const { id } = useParams();

  const { data, isFetching, isError, isSuccess, refetch } =
    useGetGenreByIdQuery(id);

  return (
    <>
      {isFetching && !isError && <Loader />}
      {!isFetching && !isError && isSuccess && (
        <LatestPlaylists
          title={`Плейлисти жанру "${data.genre}"`}
          genre={data.genre}
          display={"none"}
          displayPlayer={"none"}
          data={data.playList}
          isFetching={isFetching}
          refetch={refetch}
        />
      )}
    </>
  );
};

export default Playlists;
