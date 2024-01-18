import LatestPlaylists from "../../../components/EditorComponents/PlayLists/PlayLists";
import { useGetLatestPlaylistsQuery } from "../../../redux/playlistsSlice";
import { Loader } from "../../../components/Loader/Loader";
const NewPlaylistsPage = () => {
  const {
    data: playlists,
    isFetching: isFetchingLatestPlaylist,
    error: isErrorLatestPlaylist,
    isSuccess,
  } = useGetLatestPlaylistsQuery();
  return (
    <>
      {!isSuccess && !isErrorLatestPlaylist && <Loader />}
      {isSuccess && !isErrorLatestPlaylist && (
        <LatestPlaylists
          title={"Нові плейлисти"}
          displayPlayer={"none"}
          display={"none"}
          data={playlists}
          isFetching={isFetchingLatestPlaylist}
          error={isErrorLatestPlaylist}
        />
      )}
    </>
  );
};

export default NewPlaylistsPage;
