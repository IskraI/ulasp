import { useParams } from "react-router-dom";

import {  useGetGenreByIdforUserQuery } from "../../../redux/genersUserSlice";
import LatestPlaylists from "../../../components/UserMediaComponent/PlayLists/PlayLists";
import { Loader } from "../../../components/Loader/Loader";
import NavMusic from "../../../components/UserMediaComponent/NavMusic/NavMusic";
import TabNavigation from "../../../components/TabNavigation/TabNavigation";
import DropDownGeners from "../../../components/DropDownGeners/DropDownGeners";

const PlaylistsPageUserInGenre = () => {
  const { genreId } = useParams();

  const { data, isFetching, isError, isSuccess } =
        useGetGenreByIdforUserQuery(genreId);
    
    const links = [
    { path: `/user/medialibrary/genres/${genreId}/playlists`, title: "Плейлисти" },
    { path: `/user/medialibrary/genres/${genreId}/tracks`, title: "Пісні" },
  ];

  console.log('genreId', genreId);
  console.log("data", data)

  return (
    <>
      {isFetching && !isError && <Loader />}
      {!isError && isSuccess && (
              <>
              <TabNavigation />    
          <NavMusic links={links} />
          <DropDownGeners currentGenreId={genreId}/>
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
