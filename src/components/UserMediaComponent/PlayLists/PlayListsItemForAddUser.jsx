import PropTypes from "prop-types";

import { BASE_URL } from "../../../constants/constants";

import { useAddTrackByIdToPlaylistUserMutation } from "../../../redux/playlistsUserSlice";

import {
  MediaItem,
  MediaItemText,
  MediaImg,
} from "../MediaList/MediaList.styled";

const PlayListItemForAdd = ({ id, title, icon, trackId, showSuccess }) => {
  const [addTrackToPlaylist] = useAddTrackByIdToPlaylistUserMutation();

  const addTrackInPlaylistUser = (id, trackId) => {
    addTrackToPlaylist({ id, trackId }).unwrap();
    showSuccess(true);
  };

  return (
    <>
      <MediaItem width={"250px"}>
        <div
          style={{ width: "100%", display: "flex", alignItems: "center" }}
          onClick={() => addTrackInPlaylistUser(id, trackId)}
        >
          <MediaImg src={BASE_URL + "/" + icon} alt={title} />
          <MediaItemText maxWidth={"170px"}>{title}</MediaItemText>
        </div>
      </MediaItem>
    </>
  );
};

PlayListItemForAdd.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  trackId: PropTypes.string,
  showSuccess: PropTypes.func,
};

export default PlayListItemForAdd;
