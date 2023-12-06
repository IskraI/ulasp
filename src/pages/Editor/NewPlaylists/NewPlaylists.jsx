import LatestPlaylists from "../../../components/EditorComponents/PlayLists/PlayLists";
import { useGetLatestPlaylistsQuery } from "../../../redux/playlistsSlice";

const NewPlaylists = () => {
  const {
    data: playlists,
    isFetching: isFetchingLatestPlaylist,
    error: isErrorLatestPlaylist,
    isSuccess,
  } = useGetLatestPlaylistsQuery();
  return (
    <>
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

export default NewPlaylists;
