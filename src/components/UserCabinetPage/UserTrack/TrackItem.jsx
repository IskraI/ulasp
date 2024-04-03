/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";

import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";

import {
  PlaylistItem,
  PlaylistImg,
  PlaylistItemText,
  PlaylistIconsWrapper,
  TextWrapper,
  PlaylistAddButton,
  PlaylistItemText2,
} from "./PlayLists.styled";
import { Modal } from "../../Modal/Modal";
import { Link } from "react-router-dom";
import {
  useGetPlaylistCreatedUserWithoutTrackIdQuery,
  useAddTrackByIdToPlaylistUserMutation,
} from "../../../redux/playlistsUserSlice";

import {
  setPreloadSrcPlayer,
  stopPlay,
  setCurrentIndex,
  setSrcPlaying,
} from "../../../redux/playerSlice";
import { getPlayerState } from "../../../redux/playerSelectors";
import PlaylistsForAdd from "../../UserMediaComponent/PlayLists/PlayListsForAddUser";

const TrackItem = ({
  id,
  title,
  icon,
  artist,
  trackURL,
  isLoading,

  createPlaylists,
}) => {
  const dispatch = useDispatch();
  const playerState = useSelector(getPlayerState);
  const [isPlayingTrack, setIsPlayingTrack] = useState(false);

  const ref = useRef();
  console.log("object TrackItem:>> ", createPlaylists);
  const currentTrackIndex = playerState.indexTrack;

  useEffect(() => {
    if (id === playerState?.src[currentTrackIndex]?.id) {
      setIsPlayingTrack(true);
      ref.current.style.borderWidth = "2px";
      ref.current.style.transform = "translateY(-15px)";
    } else {
      setIsPlayingTrack(false);
      ref.current.style.borderWidth = "1px";
      ref.current.style.transform = "translateY(0px)";
    }
  }, [currentTrackIndex, id, playerState?.src]);

  const PlayButtonToogle = () => {
    if (isPlayingTrack) {
      stopMusic();
    } else {
      playMusic();
    }
  };

  const playMusic = () => {
    dispatch(stopPlay([]));
    const newTrackObject = {
      id,
      trackURL,
      artist,
      trackName: title,
    };

    dispatch(
      setPreloadSrcPlayer({
        preloadSrc: [newTrackObject],
      })
    );
    dispatch(setSrcPlaying({ indexTrack: 0 }));
    setIsPlayingTrack(!isPlayingTrack);
  };

  const stopMusic = () => {
    dispatch(stopPlay([]));
    setIsPlayingTrack(!isPlayingTrack);
  };
  //получаем список плейлистов юзера в которых нет этого трека
  // const {
  //   data: playlistUserForAdd,
  //   isLoading: isLoadingPlaylistUserForAdd,
  //   isError,
  // } = useGetPlaylistCreatedUserWithoutTrackIdQuery(id);
  // const {
  //   data: playlistUserForAdd,
  //   isLoading: isLoadingPlaylistUserForAdd,
  //   isError,
  // } = useGetPlaylistCreatedUserWithoutTrackIdQuery(id);
  //открываем модальное окно со списком плейлистов

  const [showModalAddTrackToPlaylist, setShowModalAddTrackToPlaylist] =
    useState(false);

  const addTrackToPlaylistsModal = () => {
    // console.log("playlistUserForAdd :>> ", playlistUserForAdd);
    setShowModalAddTrackToPlaylist(true);
    document.body.classList.add("modal-open");
  };
  const handleCloseModal = () => {
    document.body.classList.remove("modal-open");
    setShowModalAddTrackToPlaylist(false);
  };
  const [playlistUserForAdd, setPlaylistUserForAdd] = useState(createPlaylists);
  console.log("object playlistUserForAdd:>> ", playlistUserForAdd);
  const addPlaylist = createPlaylists.filter(
    (item) => !item.trackList.includes(id)
  );
  console.log("object addPlaylist:>> id", id, addPlaylist);

  //хук который отправляет запрос на бек
  const [addTrackToPlaylist, { data, isLoading: isLoadingAddTrackToPlaylist }] =
    useAddTrackByIdToPlaylistUserMutation();
  //функция которая вызывается при клике на плейлист и вызывает хук
  const addTrackInPlaylistUser = (id, trackId) => {
    console.log("playlistUserForAdd :>> ", id);
    console.log("trackId :>> ", trackId);

    addTrackToPlaylist({ id, trackId }).then(() => {
      console.log("добавили :>> ");
      setPlaylistUserForAdd((prevPlaylists) =>
        prevPlaylists.filter((playlist) => playlist._id !== id)
      );
    });
  };

  return (
    <>
      <PlaylistItem ref={ref}>
        <Link
          key={id}
          onClick={() => PlayButtonToogle()}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PlaylistImg src={BASE_URL + "/" + icon} alt={title} />
          <TextWrapper>
            <PlaylistItemText>{title}</PlaylistItemText>
            <PlaylistItemText2 style={{ fontWeight: "400px" }}>
              {artist}
            </PlaylistItemText2>
          </TextWrapper>
        </Link>
        <PlaylistIconsWrapper>
          <PlaylistAddButton
            type="button"
            onClick={addTrackToPlaylistsModal}
            disabled={playlistUserForAdd?.length === 0}
          >
            {playlistUserForAdd?.length === 0 ? (
              <svg width="24" height="24" stroke="#888889">
                <use href={`${symbol}#icon-check`}></use>
              </svg>
            ) : (
              <svg width="24" height="24">
                <use href={`${symbol}#icon-plus`}></use>
              </svg>
            )}
          </PlaylistAddButton>
        </PlaylistIconsWrapper>
      </PlaylistItem>
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
                title={"Плейлисти для додавання"}
                displayPlayer={"none"}
                data={addPlaylist}
                trackId={id}
                addTrackInPlaylistUser={addTrackInPlaylistUser}
                // onClose={handleCloseModal}
              />
            )}
          </div>
        </Modal>
      )}
    </>
  );
};

export default TrackItem;
