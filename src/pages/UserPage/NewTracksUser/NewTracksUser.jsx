import LatestTracks from "../../../components/UserMediaComponent/NewSongs/NewSongs";
import { useGetAllTracksforUserQuery } from "../../../redux/tracksUserSlice";



const NewTracksUser = () => {
  const { data: allTracks, isFetching, error } = useGetAllTracksforUserQuery(`?&limit=${10}`);
  return (
    <>
      
      {!isFetching && !error && (
        <LatestTracks
          data={allTracks}
          error={error}
          isFetching={isFetching}
          display={"none"}
           showNavigationLink={false}
          
                 />
      )}
    </>
  );
};

export default NewTracksUser;
