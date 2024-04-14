import PropTypes from "prop-types";

import TrackItem from "./TrackItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import { NoData } from "../../Errors/Errors";

import {
  TitleWrapper,
  ControlWrapper,
} from "../../UserMediaComponent/MediaList/MediaList.styled";

import { Tracks } from "./UserTrack.styled";


const TrackAddByUser = ({
  data: trackAddUser,
  isFetching,
  isError,
  showNavigationLink,
}) => {
  return (
    <>
      {!isFetching && !isError && (
        <>
          <ControlWrapper>
            <TitleWrapper>Обрані пісні</TitleWrapper>
          </ControlWrapper>
          {trackAddUser?.length === 0 && (
            <NoData
              text={"Ви ще не додали жодної пісні"}
              textColor={"grey"}
            />
          )}
          <Tracks>
            {trackAddUser.map(
              ({ _id, trackPictureURL, trackName, artist, trackURL }) => (
                <TrackItem
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
};

export default TrackAddByUser;
