/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";

import { SvgStyled } from "../../Button/Button.styled";
import { sToStr, compareArray } from "../../../helpers/helpers";
import { BASE_URL } from "../../../constants/constants";
import { WithOutGenre } from "../../Errors/Errors";
import symbol from "../../../assets/symbol.svg";

import { useDeleteTrackInPlaylistMutation } from "../../../redux/playlistsSlice";
import { useDeleteTrackMutation } from "../../../redux/tracksSlice";
import {
  pause,
  stopPlay,
  setCurrentIndex,
  setSrcPlaying,
  setDefaultPreloadSrc,
} from "../../../redux/playerSlice";
import { getPlayerState } from "../../../redux/playerSelectors";

import {
  TableCell,
  TrackCover,
  TrStyle,
  PopUpTracksTable,
  PopUpButton,
  DotsButton,
  PopUpTracksTableWrapper,
  InfoBlock,
  PlayButton,
} from "../TracksTable/TracksTable.styled";

const TrackItem = ({
  idTrack,
  trackPictureURL,
  trackURL,
  trackName,
  artist,
  trackDuration,
  playListGenre,
  playLists,
  checkBox,
  display,
  isInPlayList,
  playListId,
  isCheckedAll,
  showData,
  index,
  countOfSkip,
  getCheckedTrackId,
  addTrackToCheckedList,
  deleteCheckedTrackId,
  deselect,
}) => {
  const dispatch = useDispatch();
  const playerState = useSelector(getPlayerState);
  const [showPopUp, setShowPopUp] = useState(false);
  const [isPlayingTrack, setIsPlayingTrack] = useState(false);
  const [isPausedTrack, setIsPausedTrack] = useState(false);

  // console.log("isPlayingTrack", isPlayingTrack);
  // console.log("trackID", idTrack);

  const [isChecked, setIsChecked] = useState(false);

  const ref = useRef(null);
  const dotsButtonRef = useRef(null);
  const playBtnRef = useRef(null);

  const isLoadedTrack = playerState.isLoaded;
  const currentTrackIndex = playerState.indexTrack;
  const isPlaying = playerState.isPlaying;
  const isPaused = playerState.isPaused;
  const futurePlayerSRC = playerState.preloadSrc;
  const playerSRC = playerState.src;

  const oneGenre = !isInPlayList ? playLists[0]?.playlistGenre[0]?.genre : null;

  const [
    deleteTrack,
    { data: dataDeleteTrack, isSuccess: isSuccessDeleteTrack },
  ] = useDeleteTrackMutation();
  const [
    deleteTrackInPlaylist,
    {
      data: dataDeleteTrackInPlaylist,
      isSuccess: isSuccessDeleteTrackInPlaylist,
    },
  ] = useDeleteTrackInPlaylistMutation();

  const makeUniq = (array) => {
    const filteredGenre = {};
    const genre = array.flatMap((playlist) => playlist.playlistGenre);
    const uniqGenre = genre.filter(
      ({ genre }) => !filteredGenre[genre] && (filteredGenre[genre] = 1)
    );
    return uniqGenre;
  };

  const PopUpToogle = () => {
    setShowPopUp(!showPopUp);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickDotsButton);
    return () => {
      document.removeEventListener("click", handleClickDotsButton);
    };
  }, []);

  const handleClickDotsButton = (e) => {
    if (dotsButtonRef.current && !dotsButtonRef.current.contains(e.target)) {
      setShowPopUp(false);
    }
  };

  const PlayButtonToogle = () => {
    if (isPlayingTrack) {
      stopMusic();
    } else {
      playMusic();
    }
  };

  useEffect(() => {
    if (isPlaying && idTrack === playerState?.src[currentTrackIndex]?.id) {
      setIsPlayingTrack(true);
    } else {
      setIsPlayingTrack(false);
    }
  }, [currentTrackIndex, idTrack, isPlaying, playerState?.src]);

  useEffect(() => {
    if (isPaused && idTrack === playerState?.src[currentTrackIndex]?.id) {
      setIsPausedTrack(true);
    } else {
      setIsPausedTrack(false);
    }
  }, [currentTrackIndex, idTrack, isPaused, playerState?.src]);

  const playMusic = () => {
    const comparedPlayerSRC = compareArray(futurePlayerSRC, playerSRC);

    if (!comparedPlayerSRC && futurePlayerSRC.length !== 0) {
      dispatch(setSrcPlaying({ indexTrack: index + countOfSkip }));
      // dispatch(setDefaultPreloadSrc());
    } else {
      dispatch(setCurrentIndex(index + countOfSkip));
    }

    setIsPlayingTrack(isPlaying);
    setIsPausedTrack(isPaused);
    // dispatch(setDefaultPreloadSrc());
  };

  const stopMusic = () => {
    dispatch(stopPlay(currentTrackIndex));
    setIsPlayingTrack(isPlaying);
    setIsPausedTrack(isPaused);
  };

  useEffect(() => {
    if (isCheckedAll && !ref.current.checked) {
      ref.current.checked = true;
      setIsChecked(true);
      getCheckedTrackId(idTrack);
    }

    if (!isCheckedAll && ref.current.checked) {
      console.log("deselect", deselect);
      if (!deselect) {
        return;
      }

      setIsChecked(false);
      ref.current.checked = false;
      getCheckedTrackId();
    }
  }, [deselect, getCheckedTrackId, idTrack, isCheckedAll]);

  const selectTrack = (id) => {
    console.log(id);
    if (!ref.current.checked) {
      console.log("тут");
      ref.current.checked = false;
      setIsChecked(false);

      deleteCheckedTrackId(id);
    } else {
      console.log("тут1");
      ref.current.checked = true;
      setIsChecked(true);
      addTrackToCheckedList(id);
    }
  };

  return (
    <>
      <TrStyle
        key={idTrack}
        style={{
          background: isChecked ? "#FFF3BF" : null,
        }}
      >
        <TableCell showData={showData[0]}>
          <input
            type="checkbox"
            name=""
            id={idTrack}
            ref={ref}
            onClick={() => selectTrack(idTrack)}
          />
        </TableCell>
        <TableCell showData={showData[1] || false}>
          {/* <button
            type="buton"
            onClick={
              isInPlayList
                ? () => deleteTrackInPlaylist(idTrack).unwrap()
                : () => deleteTrack(idTrack).unwrap()
            }
          >
            X
          </button> */}

          <PlayButton
            ref={playBtnRef}
            data-idtrack={idTrack}
            type="button"
            id="playBtn"
            onClick={() => PlayButtonToogle(idTrack)}
          >
            <svg width="22" height="22">
              <use
                href={
                  isPlayingTrack
                    ? `${symbol}#icon-stop-play`
                    : isPausedTrack
                    ? `${symbol}#icon-pause`
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
        <TableCell showData={showData[8] || false}>
          {showPopUp && (
            <PopUpTracksTableWrapper>
              <PopUpTracksTable>
                <PopUpButton
                  type="button"
                  onClick={
                    isInPlayList
                      ? () =>
                          deleteTrackInPlaylist({
                            playListId,
                            idTrack,
                          }).unwrap()
                      : () => deleteTrack(idTrack).unwrap()
                  }
                >
                  Видалити з медіатеки
                </PopUpButton>
                <PopUpButton disabled={true} type="button">
                  Додати до плейлисту
                </PopUpButton>
                <PopUpButton disabled={true} type="button">
                  Перенести до плейлисту
                </PopUpButton>
              </PopUpTracksTable>
            </PopUpTracksTableWrapper>
          )}
          <DotsButton
            ref={dotsButtonRef}
            type="button"
            onClick={PopUpToogle}
            disabled={isChecked ? true : false}
          >
            <SvgStyled
              showIcon={true}
              width="24"
              height="24"
              fillColor={isChecked ? "#CECCC180" : "#17161C"}
              strokeColor={isChecked ? "#CECCC180" : "#17161C"}
            >
              <use href={`${symbol}#icon-more-dots`}></use>
            </SvgStyled>
          </DotsButton>
        </TableCell>
      </TrStyle>
    </>
  );
};

export default TrackItem;
