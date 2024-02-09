/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef, useId } from "react";

import {
  TableCell,
  TrackCover,
  TrStyle,
  InfoBlock,
  PlayButton,
} from "../TracksTable/TracksTableUser.styled";
import { sToStr } from "../../../helpers/helpers";
import { BASE_URL } from "../../../constants/constants";
import { WithOutGenre } from "../../Errors/Errors";

import symbol from "../../../assets/symbol.svg";

import {
  setSrcPlayer,
  stopPlay,
  setCurrentIndex,
} from "../../../redux/playerSlice";
import { getPlayerState } from "../../../redux/playerSelectors";

const TrackItem = ({
  idTrack,
  trackPictureURL,
  trackName,
  artist,
  trackDuration,
  playListGenre,
  playLists,
  trackURL,
  checkBox,
  display,
  isInPlayList,
  playListId,
  isCheckedAll,
  showPlayList,
  showData,
}) => {
  const dispatch = useDispatch();
  const playerState = useSelector(getPlayerState);
  const [isPlayingTrack, setIsPlayingTrack] = useState(false);

  const playBtnRef = useRef(null);

  const isLoadedTrack = playerState.isLoaded;
  const currentTrackIndex = playerState.indexTrack;
  const oneGenre = !isInPlayList ? playLists[0]?.playlistGenre[0]?.genre : [];

  const makeUniq = (array) => {
    const filteredGenre = {};
    const genre = array.flatMap((playlist) => playlist.playlistGenre);
    const uniqGenre = genre.filter(
      ({ genre }) => !filteredGenre[genre] && (filteredGenre[genre] = 1)
    );
    return uniqGenre;
  };

  useEffect(() => {
    if (idTrack === playerState?.src[currentTrackIndex]?.id) {
      setIsPlayingTrack(true);
    } else {
      setIsPlayingTrack(false);
    }
  }, [currentTrackIndex, idTrack, playerState?.src]);

  const PlayButtonToogle = () => {
    if (isPlayingTrack) {
      stopMusic();
    } else {
      playMusic();
    }
  };

  const playMusic = () => {
    dispatch(stopPlay([]));
    dispatch(
      setSrcPlayer([
        {
          id: idTrack,
          trackURL: trackURL,
          artist: artist,
          trackName: trackName,
        },
      ])
    );
    dispatch(setCurrentIndex(0));
    setIsPlayingTrack(isLoadedTrack);
  };

  const stopMusic = () => {
    dispatch(stopPlay([]));
    setIsPlayingTrack(isLoadedTrack);
  };

  return (
    <>
      <TrStyle key={idTrack}>
        <TableCell showData={showData[0]}></TableCell>
        <TableCell showData={showData[1] || false}>
          <PlayButton
            ref={playBtnRef}
            data-idtrack={idTrack}
            type="button"
            id="playBtn"
            onClick={() => PlayButtonToogle(idTrack)}
          >
            <svg width="16" height="16">
              <use
                href={
                  isPlayingTrack
                    ? `${symbol}#icon-stop-play`
                    : `${symbol}#icon-play`
                }
              ></use>
            </svg>
          </PlayButton>
        </TableCell>
        <TableCell showData={showData[2] || false}>
          <TrackCover
            src={BASE_URL + "/" + trackPictureURL}
            alt={trackName}
            width={55}
          />
        </TableCell>
        <TableCell showData={showData[3] || false}>{trackName}</TableCell>
        <TableCell showData={showData[4] || false}>{artist}</TableCell>
        <TableCell showData={showData[5] || false}>
          {sToStr(trackDuration)}
        </TableCell>
        {!isInPlayList ? (
          <TableCell showData={showData[6] || false}>
            {makeUniq(playLists).length > 1 ? (
              makeUniq(playLists)
                .slice(0, 3)
                .map(({ _id, genre }) => (
                  <InfoBlock showData={showData[6]} key={_id}>
                    {genre}
                  </InfoBlock>
                ))
            ) : makeUniq(playLists).length !== 0 ? (
              <InfoBlock showData={showData[6]}>{oneGenre}</InfoBlock>
            ) : (
              <WithOutGenre />
            )}
            {makeUniq(playLists)?.length > 3 && (
              <InfoBlock showData={showData[6]}>та інші</InfoBlock>
            )}
          </TableCell>
        ) : (
          <TableCell showData={showData[6] || false}>
            {playListGenre.length !== 0 ? (
              playListGenre.map(({ _id, genre }) => (
                <InfoBlock showData={showData[6]} key={_id}>
                  {genre}
                </InfoBlock>
              ))
            ) : (
              <WithOutGenre />
            )}
          </TableCell>
        )}

        {!isInPlayList ? (
          <TableCell showData={showData[7] || false}>
            {playLists.length > 1 ? (
              playLists.slice(0, 3).map(({ _id, playListName }) => (
                <InfoBlock showData={showData[7]} key={_id}>
                  {playListName}
                </InfoBlock>
              ))
            ) : (
              <InfoBlock showData={showData[7]}>
                {playLists[0]?.playListName}
              </InfoBlock>
            )}
            {playLists.length > 3 && (
              <InfoBlock showData={showData[7]}>та інші</InfoBlock>
            )}
          </TableCell>
        ) : (
          <TableCell showData={false}></TableCell>
        )}
        <TableCell showData={showData[8] || false}></TableCell>
      </TrStyle>
    </>
  );
};

export default TrackItem;
