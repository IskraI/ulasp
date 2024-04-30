import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TracksItem from "./TrackItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";

import { setPreloadSrcPlayer } from "../../../redux/playerSlice";

import { TitleWrapper, ControlWrapper } from "../MediaList/MediaList.styled";
import { Tracks } from "./NewSongs.styled";

import { getPlayerState } from "../../../redux/playerSelectors";
import { setLastTrack } from "../../../redux/playerSlice";

const NewSongs = ({
  data: trackInChart,
  playerSRC,
  isFetching,
  isSuccess,
  isError,
  showNavigationLink,
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

  const lastTrackInPage = playerState.indexTrack === trackInChart.length - 1;

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
      {/* {console.log("isLastTrack?", indexOfLastTrackInPage)} */}
      {!isFetching && !isError && (
        <>
          <ControlWrapper>
            <TitleWrapper>Нові пісні</TitleWrapper>
          </ControlWrapper>
          <Tracks>
            {trackInChart.map(
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
                  lastTrackInPage={trackInChart.length - 1}
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
  playerSRC: PropTypes.array,
  isFetching: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isError: PropTypes.bool,
  showNavigationLink: PropTypes.bool,
};

export default NewSongs;
