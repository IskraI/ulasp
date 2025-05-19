import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TracksItem from "./TrackItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import { NoData } from "../../Errors/Errors";

import { setPreloadSrcPlayer } from "../../../redux/playerSlice";

import { TitleWrapper, ControlWrapper, MediaList } from "../MediaList/MediaList.styled";
import { Tracks } from "./NewSongs.styled";

import { getPlayerState } from "../../../redux/playerSelectors";
import { setLastTrack } from "../../../redux/playerSlice";

const NewSongs = ({
  data: tracks,
  playerSRC,
  isFetching,
  isSuccess,
  isError,
  showNavigationLink,
  pageTitle,
  noDataMessage,
  link,
}) => {
  const dispatch = useDispatch();
  const playerState = useSelector(getPlayerState);


  useEffect(() => {
    if (isSuccess) {
      const trackURL = playerSRC?.map((track) => {
        const transformTrackObject = {
          id: track._id,
          trackURL: track.trackURL,
          artist: track.artist,
          trackName: track.trackName,
        };
        return transformTrackObject;
      });

      dispatch(
        setPreloadSrcPlayer({
          preloadSrc: trackURL,
        })
      );
    }
  }, [dispatch, isSuccess, playerSRC]);

  const lastTrackInPage = playerState.indexTrack === tracks.length - 1;

  useEffect(() => {
    if (lastTrackInPage) {
      dispatch(
        setLastTrack({
          isLastTrack: true,
          isLastPage: true,
          nextPage: 1,
        })
      );
    }
  }, [dispatch, lastTrackInPage]);
  return (
    <>
      {!isFetching && !isError && (
        <>
          <ControlWrapper>
            <TitleWrapper>{pageTitle}</TitleWrapper>
          </ControlWrapper>
          {tracks?.length === 0 && (
            <NoData text={noDataMessage} textColor={"grey"} />
          )}
          <MediaList>
            {tracks.map(
              (
                { _id, trackPictureURL, trackName, artist, trackURL },
                index
              ) => (
                <TracksItem
                  key={_id}
                  index={index}
                  id={_id}
                  title={trackName}
                  artist={artist}
                  icon={trackPictureURL}
                  trackURL={trackURL}
                  lastTrackInPage={tracks.length - 1}
                />
              )
            )}
          </MediaList>
          <MediaNavigationLink
            link={link}
            showNavigationLink={showNavigationLink}
          />
        </>
      )}
    </>
  );
};

NewSongs.propTypes = {
  data: PropTypes.array,
  playerSRC: PropTypes.array,
  isFetching: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isError: PropTypes.bool,
  showNavigationLink: PropTypes.bool,
  pageTitle: PropTypes.string,
  noDataMessage: PropTypes.string,
  link: PropTypes.string,
};

export default NewSongs;
