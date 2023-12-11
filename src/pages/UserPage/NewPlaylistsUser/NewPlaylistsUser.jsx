import TabNavigation from "../../../components/TabNavigation/TabNavigation";
import LatestPlaylists from "../../../components/UserMediaComponent/PlayLists/PlayLists";
import { useGetLatestPlaylistsForUserQuery } from "../../../redux/playlistsUserSlice";
import { NewSongsLink } from "./NewPlaylistsUser.styled";

const NewPlaylistsUser = () => {
  const {
    data: playlists,
    isFetching: isFetchingLatestPlaylist,
    error: isErrorLatestPlaylist,
  } = useGetLatestPlaylistsForUserQuery();
    return (
        <>
            <TabNavigation />                 
            <NewSongsLink to = "/user/medialibrary/newtracks">Нова музика</NewSongsLink>
      <LatestPlaylists
          title={"Нові плейлисти"}
          displayPlayer={"none"}
          display={"none"}
      data={playlists}
      isFetching={isFetchingLatestPlaylist}
      error={isErrorLatestPlaylist}
            />
            </>
  );
};

export default NewPlaylistsUser;