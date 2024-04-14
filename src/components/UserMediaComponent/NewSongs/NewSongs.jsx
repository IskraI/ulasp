import PropTypes from "prop-types";

import { TitleWrapper, ControlWrapper } from "../MediaList/MediaList.styled";

import TracksItem from "./TrackItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";

import { Tracks } from "./NewSongs.styled";

const NewSongs = ({
  data: trackInChart,
  isFetching,
  isError,
  showNavigationLink,
}) => {
  return (
    <>
      {!isFetching && !isError && (
        <>
          <ControlWrapper>
            <TitleWrapper>Нові пісні</TitleWrapper>
          </ControlWrapper>
          <Tracks>
            {trackInChart.map(
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

NewSongs.propTypes = {
  data: PropTypes.array,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
  showNavigationLink: PropTypes.bool,
};

export default NewSongs;
