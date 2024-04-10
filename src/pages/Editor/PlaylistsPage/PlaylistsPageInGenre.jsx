import { useParams } from "react-router-dom";

import { useGetGenreByIdQuery } from "../../../redux/genresSlice";
import LatestPlaylists from "../../../components/EditorComponents/PlayLists/PlayLists";
import { Loader } from "../../../components/Loader/Loader";
import BackButton from "../../../components/EditorComponents/BackButton/BackButton";

const PlaylistsPageInGenre = () => {
  const { genreId } = useParams();

  const { data, isFetching, isError, isSuccess } =
    useGetGenreByIdQuery(genreId);

  return (
    <>
      {!isSuccess && !isError && <Loader />}
      {!isError && isSuccess && (
        <>
          <BackButton backLink={"/editor/medialibrary/genres/"} />
          <LatestPlaylists
            title={`Плейлисти жанру "${data.genre}"`}
            genre={data.genre}
            data={data.playList}
            isFetching={isFetching}
            showNavigationLink={false}
          />
        </>
      )}
    </>
  );
};

export default PlaylistsPageInGenre;
