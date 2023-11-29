import Genres from "../Genres/Genres";
import LatestPlaylists from "../PlayLists/PlayLists";
import NewSongs from "../NewSongs/NewSongs";

const MediaLibrary = () => {
  return (
    <>
      <Genres displayPlayer={"none"} />
      <Genres displayPlayer={"none"} />
      <LatestPlaylists />
      <NewSongs />
    </>
  );
};

export default MediaLibrary;
