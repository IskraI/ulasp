import LatestTracks from "../../../components/UserMediaComponent/NewSongs/NewSongs";
import { useGetAllTracksQuery } from "../../../redux/tracksSlice";



const NewTracks = () => {
  const { data: allTracks, isFetching, error } = useGetAllTracksQuery();
  return (
    <>
      {!isFetching && !error && (
        <LatestTracks
          title={" Остання додана музика"}
          tracks={allTracks}
          error={error}
          isFetching={isFetching}
          display="none"
                 />
      )}
    </>
  );
};

export default NewTracks;
