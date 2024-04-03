import PropTypes from "prop-types";

import {
  TitleWrapper,
  ControlWrapper,
} from "../../UserMediaComponent/MediaList/MediaList.styled";
// import { Button } from "../../Button/Button";
// import symbol from "../../../assets/symbol.svg";
import { Tracks } from "./UserTrack.styled";
import TrackItem from "./TrackItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";

const TrackAddByUser = ({
  data: trackAddUser,
  isFetching,
  isError,
  showNavigationLink,
  createPlaylists,
}) => {
  return (
    <>
      {!isFetching && !isError && (
        <>
          <ControlWrapper>
            <TitleWrapper>Обрані пісні</TitleWrapper>
          </ControlWrapper>
          <Tracks>
            {trackAddUser.map(
              ({ _id, trackPictureURL, trackName, artist, trackURL }) => (
                <TrackItem
                  addPlaylist={createPlaylists.filter(
                    (item) => !item.trackList.includes(_id)
                  )}
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
            link={"addtracks"}
            showNavigationLink={showNavigationLink}
          />
        </>
      )}
    </>
  );
};

TrackAddByUser.propTypes = {
  data: PropTypes.array,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
  showNavigationLink: PropTypes.bool,
  createPlaylists: PropTypes.array,
};

export default TrackAddByUser;
