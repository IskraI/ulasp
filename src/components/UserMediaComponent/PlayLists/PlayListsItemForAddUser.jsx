import { BASE_URL } from "../../../constants/constants";

import {
  MediaItem,
  MediaItemText,
  MediaImg,
} from "../MediaList/MediaList.styled";

const PlayListItemForAdd = ({
  id,
  title,
  icon,
  countTracks,
  placeListCardInf,
  favoriteStatus,
  handleAddTrackInPlaylist,
  trackId,
  addTrackInPlaylistUser,
}) => {
  // //хук который отправляет запрос на бек
  // const [
  //   addTrackToPlaylist,
  //   { data: dataAddTrackToPlaylist, isLoading: isLoadingAddTrackToPlaylist },
  // ] = useAddTrackByIdToPlaylistUserMutation();
  // //функция которая вызывается при клике на плейлист и вызывает хук
  // const addTrackInPlaylistUser = (id) => {
  //   console.log("playlistUserForAdd :>> ", id);
  //   console.log("trackId :>> ", trackId);

  //   addTrackToPlaylist({ id, trackId }).then(() => {
  //     console.log("добавили :>> ");
  //   });
  // };

  return (
    <MediaItem width={"250px"}>
      <div
        style={{ width: "100%", display: "flex", alignItems: "center" }}
        onClick={() => addTrackInPlaylistUser(id, trackId)}
      >
        <MediaImg src={BASE_URL + "/" + icon} alt={title} />
        <MediaItemText>{title}</MediaItemText>
      </div>
    </MediaItem>
  );
};

export default PlayListItemForAdd;
