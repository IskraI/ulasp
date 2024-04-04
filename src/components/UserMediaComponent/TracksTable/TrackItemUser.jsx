/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";

import { sToStr, compareArray } from "../../../helpers/helpers";
import { BASE_URL } from "../../../constants/constants";
import { WithOutGenre } from "../../Errors/Errors";
import { Modal } from "../../Modal/Modal";
import { ModalInfoText, ModalInfoTextBold } from "../../Modal/Modal.styled";
import symbol from "../../../assets/symbol.svg";
import {
  useAddTrackToAddMutation,
  useDeleteTrackFromAddMutation,
} from "../../../redux/tracksUserSlice.js";
import {
  stopPlay,
  setCurrentIndex,
  setSrcPlaying,
} from "../../../redux/playerSlice";
import { getPlayerState } from "../../../redux/playerSelectors";
import PlaylistsForAdd from "../PlayLists/PlayListsForAddUser.jsx";
import {
  CheckBoxLabel,
  CheckBoxSpan,
  CheckBoxSVG,
  CheckBoxInput,
} from "../../CustomCheckBox/CustomCheckBox.styled";
import DotsBtn from "./DotsButton.jsx";
import PopUpButtons from "./PopUpButtons.jsx";
import { playlistsUserApi } from "../../../redux/playlistsUserSlice.js";
import {
  TableCell,
  TrackCover,
  TrStyle,
  InfoBlock,
  PlayButton,
} from "../TracksTable/TracksTableUser.styled";
import {
  useAddTrackToPlaylistUserMutation,
  // useGetPlaylistCreatedUserWithoutTrackIdQuery,
} from "../../../redux/playlistsUserSlice.js";
import { useAddTrackByIdToPlaylistUserMutation } from "../../../redux/playlistsUserSlice.js";
// import { playlistsApi } from "../../../redux/playlistsSlice.js";

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
  index,
  countOfSkip,
  getCheckedTrackId,
  addTrackToCheckedList,
  deleteCheckedTrackId,
  isAddTrackUser,
  addPlaylist,
}) => {
  console.log("addPlaylist", addPlaylist);

  const dispatch = useDispatch();
  const playerState = useSelector(getPlayerState);
  const [isPlayingTrack, setIsPlayingTrack] = useState(false);
  const [isPausedTrack, setIsPausedTrack] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isAddTrack, setIsAddTrack] = useState(isAddTrackUser);
  const ref = useRef(null);
  const playBtnRef = useRef(null);

  const isLoadedTrack = playerState.isLoaded;
  const currentTrackIndex = playerState.indexTrack;
  const isPlaying = playerState.isPlaying;
  const isPaused = playerState.isPaused;
  const futurePlayerSRC = playerState.preloadSrc;
  const playerSRC = playerState.src;
  const oneGenre = !isInPlayList ? playLists[0]?.playlistGenre[0]?.genre : [];

  const makeUniq = (array) => {
    const filteredGenre = {};
    const genre = array.flatMap((playlist) => playlist.playlistGenre);
    const uniqGenre = genre.filter(
      ({ genre }) => !filteredGenre[genre] && (filteredGenre[genre] = 1)
    );
    return uniqGenre;
  };

  const [showPopUp, setShowPopUp] = useState(false);
  const PopUpToogle = () => {
    setShowPopUp(!showPopUp);
  };

  //модалка про добавление удаление
  const [showModal, setShowModal] = useState("");
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  //удаление трека из  доданих
  const [
    deleteTrack,
    { data: dataDeleteTrack, isLoading: isLoadingDeleteTrack },
  ] = useDeleteTrackFromAddMutation();

  const removeTrackFromAdd = () => {
    deleteTrack(idTrack)
      .unwrap()
      .then((data) => {
        setShowModal("deleteTrack");
        setIsAddTrack(false);
      })
      .catch((error) => console.log(error.data.message));
  };

  //добавление трека в додани
  const [addTrack, { data: dataAddTrack, isLoading: isLoadingAddTrack }] =
    useAddTrackToAddMutation();

  const addTrackToAdd = () => {
    addTrack(idTrack)
      .unwrap()
      .then((data) => {
        setShowModal("addTrack");
        setIsAddTrack(true);
      })
      .catch((error) => console.log(error));
  };

  //добавление трека в плейлист юзера

  //получаем список плейлистов юзера в которых нет этого трека
  // const {
  //   data: playlistUserForAdd,
  //   isLoading: isLoadingPlaylistUserForAdd,
  //   isError,
  // } = useGetPlaylistCreatedUserWithoutTrackIdQuery(idTrack);

  //открываем модальное окно со списком плейлистов
  const [showModalAddTrackToPlaylist, setShowModalAddTrackToPlaylist] =
    useState(false);

  const addTrackToPlaylistsModal = () => {
    setShowModalAddTrackToPlaylist(true);

    document.body.classList.add("modal-open");
  };
  const handleCloseModal = () => {
    document.body.classList.remove("modal-open");
    setShowModalAddTrackToPlaylist(false);
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
    } else {
      dispatch(setCurrentIndex(index + countOfSkip));
    }

    setIsPlayingTrack(isPlaying);
    setIsPausedTrack(isPaused);
  };

  const stopMusic = () => {
    dispatch(stopPlay(currentTrackIndex));
    setIsPlayingTrack(isLoadedTrack);
    setIsPausedTrack(isPaused);
  };

  const selectTrack = (id) => {
    console.log(ref.current);
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

  // const addPl = addPlaylist ? addPlaylist : [];

  const idT = idTrack;
  const [playlistUserForAdd, setPlaylistUserForAdd] = useState(addPlaylist);
  console.log("playlistUserForAdd rackItem:>> ", playlistUserForAdd);

  //хук который отправляет запрос на бек
  const [addTrackToPlaylist, { data, isLoading: isLoadingAddTrackToPlaylist }] =
    useAddTrackByIdToPlaylistUserMutation();
  //функция которая вызывается при клике на плейлист и вызывает хук
  const addTrackInPlaylistUser = (id, trackId) => {
    console.log("playlistUserForAdd :>> ", id);
    console.log("trackId :>> ", trackId);

    addTrackToPlaylist({ id, trackId }).then(() => {
      console.log("добавили :>> ");
      // dispatch(playlistsUserApi.util.invalidateTags(["Playlists"]));

      setPlaylistUserForAdd((prevPlaylists) =>
        prevPlaylists.filter((playlist) => playlist._id !== id)
      );
    });
  };

  return (
    <>
      <TrStyle
        key={idTrack}
        style={{
          background: isChecked ? "#FFF3BF" : null,
        }}
      >
        <TableCell showData={showData[0] || false}>
          <CheckBoxLabel htmlFor={idTrack}>
            <CheckBoxSpan>
              <CheckBoxSVG width="14px" height="15px">
                {isChecked && <use href={`${symbol}#icon-check-in`}></use>}
              </CheckBoxSVG>
            </CheckBoxSpan>
            <CheckBoxInput
              type="checkbox"
              id={idT}
              ref={ref}
              onClick={(e) => {
                e.stopPropagation();
                selectTrack(idTrack);
              }}
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
              removeTrackFromAddTrackFn={removeTrackFromAdd}
              addTrackToAddTrackFn={addTrackToAdd}
              isAddTrack={isAddTrack}
              isFreePlaylist={playlistUserForAdd?.length !== 0}
              addTrackToPlaylistFn={addTrackToPlaylistsModal}
            />
          )}
          <DotsBtn
            popUpToogle={PopUpToogle}
            disablePopUp={() => setShowPopUp(false)}
            icon={`${symbol}#icon-more-dots`}
          />
        </TableCell>
      </TrStyle>
      {showModalAddTrackToPlaylist && (
        <Modal
          width={"45vw"}
          padding={"24px"}
          borderColor={"#FFF3BF"}
          borderStyle={"solid"}
          borderWidth={"1px"}
          onClose={handleCloseModal}
          showCloseButton={true}
        >
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              width: "100%",
              height: "100%",
              overflowY: "auto",
            }}
          >
            {playlistUserForAdd?.length === 0 ? (
              handleCloseModal()
            ) : (
              <PlaylistsForAdd
                title={`Плейлисти для додавання`}
                displayPlayer={"none"}
                data={playlistUserForAdd}
                trackId={idTrack}
                addTrackInPlaylistUser={addTrackInPlaylistUser}
                // onClose={handleCloseModal}
              />
            )}
          </div>
        </Modal>
      )}
      {showModal === "addTrack" && (
        <Modal
          width={"25vw"}
          padding={"12px"}
          borderColor={"#FFF3BF"}
          borderStyle={"solid"}
          borderWidth={"1px"}
          onClose={() => setShowModal("")}
          // bcgTransparent={true}
        >
          <ModalInfoText
            fontSize={"20px"}
            paddingTop={"0px"}
            paddingBottom={"16px"}
          >
            додано до обраних пісень
          </ModalInfoText>
        </Modal>
      )}
      {showModal === "deleteTrack" && (
        <Modal
          width={"25vw"}
          padding={"12px"}
          borderColor={"#FFF3BF"}
          borderStyle={"solid"}
          borderWidth={"1px"}
          onClose={() => setShowModal("")}
          // bcgTransparent={true}
        >
          <ModalInfoText
            fontSize={"20px"}
            paddingTop={"0px"}
            paddingBottom={"16px"}
          >
            видалено з обраних пісень
          </ModalInfoText>
        </Modal>
      )}
    </>
  );
};

export default TrackItem;
