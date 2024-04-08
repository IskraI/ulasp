/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";

import { sToStr, compareArray } from "../../../helpers/helpers";
import { BASE_URL } from "../../../constants/constants";
import { WithOutGenre } from "../../Errors/Errors";
import symbol from "../../../assets/symbol.svg";
import DotsBtn from "./DotsButton";
import PopUpButtons from "./PopUpButtons";
import { Button } from "../../Button/Button";
import { Modal } from "../../Modal/Modal";
import ModalAddToPlaylists from "./ModalAddToPlaylists";
import { ModalInfoText, ModalInfoTextBold } from "../../Modal/Modal.styled";
import { useDeleteTrackInPlaylistMutation } from "../../../redux/playlistsSlice";
import {
  useDeleteTrackMutation,
  useUpdateTrackCoverMutation,
  useAddTrackToChartMutation,
  useRemoveTrackFromChartMutation,
} from "../../../redux/tracksSlice";
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
  InfoBlock,
  PlayButton,
} from "../TracksTable/TracksTable.styled";

import {
  CheckBoxLabel,
  CheckBoxSpan,
  CheckBoxSVG,
  CheckBoxInput,
} from "../../CustomCheckBox/CustomCheckBox.styled";

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
  isTopChart,
}) => {
  const dispatch = useDispatch();
  const playerState = useSelector(getPlayerState);
  const [showPopUp, setShowPopUp] = useState(false);
  const [isPlayingTrack, setIsPlayingTrack] = useState(false);
  const [isPausedTrack, setIsPausedTrack] = useState(false);

  // console.log("isPlayingTrack", isPlayingTrack);
  // console.log("trackID", idTrack);

  const [isChecked, setIsChecked] = useState(false);
  const [showModalChart, setShowModalChart] = useState(false);
  const [showModalAddToPlaylists, setShowModalAddToPlaylists] = useState(false);

  const ref = useRef(null);
  const playBtnRef = useRef(null);

  const isLoadedTrack = playerState.isLoaded;
  const currentTrackIndex = playerState.indexTrack;
  const isPlaying = playerState.isPlaying;
  const isPaused = playerState.isPaused;
  const futurePlayerSRC = playerState.preloadSrc;
  const playerSRC = playerState.src;

  const oneGenre = !isInPlayList ? playLists[0]?.playlistGenre[0]?.genre : null;

  const [updateTrack, { data: dataUpdateTrack }] =
    useUpdateTrackCoverMutation();

  const [addToChart, { data: dataAddToChart, isLoading: isLoadingAddToChart }] =
    useAddTrackToChartMutation();

  const [
    removeFromChart,
    { data: dataRemoveFromChart, isLoading: isLoadingRemoveFromChart },
  ] = useRemoveTrackFromChartMutation();

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
      ref.current.checked = false;
      setIsChecked(false);

      deleteCheckedTrackId(id);
    } else {
      ref.current.checked = true;
      setIsChecked(true);
      addTrackToCheckedList(id);
    }
  };

  const removeTrack = () => {
    isInPlayList
      ? deleteTrackInPlaylist({
          playListId,
          idTrack,
        }).unwrap()
      : deleteTrack(idTrack).unwrap();
  };

  const updateTrackCover = () => {
    updateTrack(idTrack).unwrap();
  };

  const addTrackToChart = () => {
    addToChart(idTrack).unwrap().then(setShowModalChart(true));
  };

  const removeTrackFromChart = () => {
    removeFromChart(idTrack).unwrap().then(setShowModalChart(true));
  };

  const addTrackToPlaylists = () => {
    setShowModalAddToPlaylists(true);
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
          <CheckBoxLabel htmlFor={idTrack}>
            <CheckBoxSpan>
              <CheckBoxSVG width="14px" height="15px">
                {isChecked && <use href={`${symbol}#icon-check-in`}></use>}
              </CheckBoxSVG>
            </CheckBoxSpan>
            <CheckBoxInput
              type="checkbox"
              id={idTrack}
              ref={ref}
              onClick={() => selectTrack(idTrack)}
            />
          </CheckBoxLabel>
        </TableCell>
        <TableCell showData={showData[1] || false}>
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
            <PopUpButtons
              removeTrackFn={removeTrack}
              updateTrackCoverFn={updateTrackCover}
              addTrackToPlaylists={addTrackToPlaylists}
              addTrackToChartFn={addTrackToChart}
              removeTrackFromChartFn={removeTrackFromChart}
              isTopChart={isTopChart}
              isInPlayList={isInPlayList}
            />
          )}
          <DotsBtn
            popUpToogle={PopUpToogle}
            disablePopUp={() => setShowPopUp(false)}
            isChecked={isChecked}
            icon={`${symbol}#icon-more-dots`}
          />
        </TableCell>
        <TableCell showData={showData[9] || false}>
          <Button
            icon={
              isTopChart ? `${symbol}#icon-close` : `${symbol}#icon-check-in`
            }
            onClick={isTopChart ? removeTrackFromChart : addTrackToChart}
            type={"button"}
            background={"none"}
            border={"none"}
            showIcon={true}
            fillColor={"black"}
            strokeColor={"none"}
          />
        </TableCell>
      </TrStyle>
      {showModalChart && (
        <Modal
          width={"494px"}
          padding={"16px"}
          borderColor={"#FFF3BF"}
          borderStyle={"solid"}
          borderWidth={"1px"}
          onClose={() => setShowModalChart(false)}
          bcgTransparent={true}
        >
          <ModalInfoText fontSize={"16px"}>
            <ModalInfoTextBold>
              {artist} - {trackName}
            </ModalInfoTextBold>
            {isLoadingAddToChart && "додано но нових пісень"}
            {isLoadingRemoveFromChart && "видалено з нових пісень"}
          </ModalInfoText>
        </Modal>
      )}
      {showModalAddToPlaylists && (
        <ModalAddToPlaylists
          idTrack={idTrack}
          modalClose={setShowModalAddToPlaylists}
        />
      )}
    </>
  );
};

export default TrackItem;
