import PlayListItemForAdd from "./PlayListsItemForAddUser";

import { useSelector } from "react-redux";
import {
  TitleWrapper,
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
}) => {
  // console.log('dataAdd playlist', dataAdd.add )
  // console.log('dataFavorite playlist', dataFavorite.favorites)

  return (
    <PlaylistModalContainer>
      <TitleContainer>
        <TitleWrapper>{title}</TitleWrapper>
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
                />
              );
            })}
          </MediaList>
        </>
      )}
    </PlaylistModalContainer>
  );
};

export default PlaylistsForAdd;
