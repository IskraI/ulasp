import { TitleWrapper, ControlWrapper } from "../MediaList/MediaList.styled";
import { Button } from "../../Button/Button";
import symbol from "../../../assets/symbol.svg";
import {Tracks, TracksItem } from "./NewSongs.styled";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";

const NewSongs = ({ data: allTracks, isFetching, error, display, }) => {
  return (
    <>
      {!isFetching && !error && (
        <>
          <ControlWrapper>
            <TitleWrapper>Нові пісні</TitleWrapper>

            </ControlWrapper>
          <Tracks>
            {allTracks.map(({_id,
                  trackPictureURL,
                  trackName,
                  artist,                 
                  }) => (
              <TracksItem
                key={_id}
                title={trackName}
                artist={artist}
                icon={ trackPictureURL}
              />
            ))}
          </Tracks>
          <MediaNavigationLink link={"newplaylists"} display={display} />
          <Tracks
            tracks={allTracks}
            error={error}
            isFetching={isFetching}
            display="none"
                     />
        </>
      )}
    </>
  );
};

export default NewSongs;
