import { useParams } from "react-router-dom";

import {  useGetGenreByIdforUserQuery } from "../../../redux/genersUserSlice";
import LatestPlaylists from "../../../components/UserMediaComponent/PlayLists/PlayLists";
import { Loader } from "../../../components/Loader/Loader";
import NavMusic from "../../../components/UserMediaComponent/NavMusic/NavMusic";
import TabNavigation from "../../../components/TabNavigation/TabNavigation";

const PlaylistsPageUserInGenre = () => {
  const { genreId } = useParams();

  const { data, isFetching, isError, isSuccess } =
        useGetGenreByIdforUserQuery(genreId);
    
    const links = [
    { path: `/user/medialibrary/genres/${genreId}/playlists`, title: "Плейлисти" },
    { path: `/user/medialibrary/genres/${genreId}/tracks`, title: "Пісні" },
  ];

  return (
    <>
      {isFetching && !isError && <Loader />}
      {!isError && isSuccess && (
              <>
              <TabNavigation/>    
              <NavMusic links={links}/>
          <LatestPlaylists
            // title={`Плейлисти жанру "${data.genre}"`}
            genre={data.genre}
            display={"none"}
            displayPlayer={"none"}
            data={data.playList}
            isFetching={isFetching}
          />
        </>
      )}
    </>
  );
};

export default PlaylistsPageUserInGenre;
