import PropTypes from "prop-types";

import { TitleWrapper, ControlWrapper } from "../MediaList/MediaList.styled";
// import { Button } from "../../Button/Button";
// import symbol from "../../../assets/symbol.svg";
import { Tracks } from "./AddTracksUser.styled";
import TracksItem from "./TrackItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";

const AddTracksUser = ({
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
            <TitleWrapper>Додані пісні</TitleWrapper>
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

AddTracksUser.propTypes = {
  data: PropTypes.array,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
  showNavigationLink: PropTypes.bool,
};

export default AddTracksUser;
