import PropTypes from "prop-types";

import { PopUpWrapper, PopUp, PopUpButton } from "./PopUpButtons.styled";

const PopUpButtons = ({
  removeTrackFromAddTrackFn,
  addTrackToAddTrackFn,
  addTrackToPlaylistFn,
  isAddTrack,
  isFreePlaylist,
}) => {
  const toogleTrackInAdd = isAddTrack
    ? "Видалити зі списку обраних"
    : "Додати до списку обраних";

  const toogleTrackInAddFn = isAddTrack
    ? removeTrackFromAddTrackFn
    : addTrackToAddTrackFn;

  return (
    <PopUpWrapper>
      <PopUp>
        <PopUpButton type="button" onClick={toogleTrackInAddFn}>
          {toogleTrackInAdd}
        </PopUpButton>
        <PopUpButton
          type="button"
          onClick={addTrackToPlaylistFn}
          // disabled={!isFreePlaylist}
        >
          Додати до плейлисту
        </PopUpButton>
      </PopUp>
    </PopUpWrapper>
  );
};

PopUpButtons.propTypes = {
  removeTrackFromAddTrackFn: PropTypes.func,
  addTrackToAddTrackFn: PropTypes.func,
  addTrackToPlaylistFn: PropTypes.func,
  isAddTrack: PropTypes.bool,
};

export default PopUpButtons;
