import PlayListItemForAdd from "./PlayListsItemForAddUser";

import { useSelector } from "react-redux";
import {
  TitleWrapperModal,
  MediaList,
  TitleContainer,
  ControlWrapper,
  PlaylistModalContainer,
} from "./MediaList.styled";
import {} from "../../../redux/playlistsUserSlice";
// import { MockPlayer } from "../TracksTable/TracksTable.styled";
import symbol from "../../../assets/symbol.svg";

const PlaylistsForAdd = ({
  title,
  trackId,
  data: playlists,
  isFetching,
  error,
  onClose,
  addTrackInPlaylistUser,
}) => {
  // console.log('dataAdd playlist', dataAdd.add )
  // console.log("playlist", playlists);

  return (
    <PlaylistModalContainer>
      {playlists.length === 0 ? (
        // onClose()
        <TitleWrapperModal>нет плейлиста</TitleWrapperModal>
      ) : (
        <>
          <TitleContainer>
            <TitleWrapperModal>{title}</TitleWrapperModal>
          </TitleContainer>
          {!isFetching && !error && (
            <>
              <MediaList>
                {playlists.map(({ _id, playListName, playListAvatarURL }) => {
                  return (
                    <PlayListItemForAdd
                      key={_id}
                      id={_id}
                      title={playListName}
                      icon={playListAvatarURL}
                      trackId={trackId}
                      addTrackInPlaylistUser={addTrackInPlaylistUser}
                    />
                  );
                })}
              </MediaList>
            </>
          )}
        </>
      )}
    </PlaylistModalContainer>
  );
};

export default PlaylistsForAdd;
