import TabNavigation from "../../../components/TabNavigation/TabNavigation";
import NavMusic from "../../../components/UserMediaComponent/NavMusic/NavMusic";
import LatestPlaylists from "../../../components/UserMediaComponent/PlayLists/PlayLists";
import { useGetLatestPlaylistsForUserQuery } from "../../../redux/playlistsUserSlice";

const NewPlaylistsUser = () => {
  const {
    data: playlists,
    isFetching: isFetchingLatestPlaylist,
    error: isErrorLatestPlaylist,
  } = useGetLatestPlaylistsForUserQuery();

  if (!isFetchingLatestPlaylist) {
    console.log(playlists);
  }

  const links = [
    { path: "/user/medialibrary/newplaylists", title: "Нові плейлисти" },
    { path: "/user/medialibrary/newtracks", title: "Нова музика" },
  ];

  return (
    <>
      {/* <TabNavigation />   */}
      <NavMusic links={links} />
      {/* <NewSongsLink to = "/user/medialibrary/newtracks"  >Нова музика</NewSongsLink> */}
      <LatestPlaylists
        // title={"Нові плейлисти"}
        displayPlayer={"none"}
        display={"none"}
        data={playlists}
        isFetching={isFetchingLatestPlaylist}
        error={isErrorLatestPlaylist}
        showNavigationLink={false}
      />
    </>
  );
};

export default NewPlaylistsUser;
