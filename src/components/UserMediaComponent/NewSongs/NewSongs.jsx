import { TitleWrapper, ControlWrapper } from "../MediaList/MediaList.styled";
// import { Button } from "../../Button/Button";
// import symbol from "../../../assets/symbol.svg";
import { Tracks } from "./NewSongs.styled";
import TracksItem from "./TrackItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";

const NewSongs = ({
  data: allTracks,
  isFetching,
  error,
  showNavigationLink,
}) => {
  // console.log("NewSongs allTracks", allTracks);

  return (
    <>
      {!isFetching && !error && (
        <>
          <ControlWrapper>
            <TitleWrapper>Нові пісні</TitleWrapper>
          </ControlWrapper>
          <Tracks>
            {allTracks.map(
              ({ _id, trackPictureURL, trackName, artist, trackURL }) => (
                <TracksItem
                  key={_id}
                  id={_id}
                  title={trackName}
                  artist={artist}
                  icon={trackPictureURL}
                  trackURL={trackURL}
                />
              )
            )}
          </Tracks>
          <MediaNavigationLink
            link={"newtracks"}
            showNavigationLink={showNavigationLink}
          />
        </>
      )}
    </>
  );
};

export default NewSongs;
