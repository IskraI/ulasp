import LatestTracks from "../../../components/UserMediaComponent/NewSongs/NewSongs";
import { useGetAllTracksforUserQuery } from "../../../redux/tracksUserSlice";



const NewTracksUser = () => {
  const { data: allTracks, isFetching, error } = useGetAllTracksforUserQuery();
  return (
    <>
      {!isFetching && !error && (
        <LatestTracks
          data={allTracks}
          error={error}
          isFetching={isFetching}
           display={"none"}
          
                 />
      )}
    </>
  );
};

export default NewTracksUser;
