import LatestPlaylists from "../../../components/EditorComponents/PlayLists/PlayLists";
import { useGetLatestPlaylistsQuery } from "../../../redux/playlistsSlice";

const NewPlaylists = () => {
  const {
    data: playlists,
    isFetching: isFetchingLatestPlaylist,
    error: isErrorLatestPlaylist,
  } = useGetLatestPlaylistsQuery();
  return (
    <LatestPlaylists
      displayPlayer={"none"}
      data={playlists}
      isFetching={isFetchingLatestPlaylist}
      error={isErrorLatestPlaylist}
    />
  );
};

export default NewPlaylists;
