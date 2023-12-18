import TabNavigation from "../../../components/TabNavigation/TabNavigation";
import NavMusic from "../../../components/UserMediaComponent/NavMusic/NavMusic";
import LatestPlaylists from "../../../components/UserMediaComponent/PlayLists/PlayLists";
import { useGetLatestPlaylistsForUserQuery } from "../../../redux/playlistsUserSlice";
import { NewSongsLink, } from "./NewPlaylistsUser.styled";
import { useLocation } from "react-router-dom";

const NewPlaylistsUser = () => {
  const {
    data: playlists,
    isFetching: isFetchingLatestPlaylist,
    error: isErrorLatestPlaylist,
  } = useGetLatestPlaylistsForUserQuery();

  // const location = useLocation();
  // const isOnNewPlaylistsPage = location.pathname === "/user/medialibrary/newtracks";

    return (
        <>
        <TabNavigation />  
      <NavMusic/>
            {/* <NewSongsLink to = "/user/medialibrary/newtracks"  >Нова музика</NewSongsLink> */}
      <LatestPlaylists
          // title={"Нові плейлисти"}
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