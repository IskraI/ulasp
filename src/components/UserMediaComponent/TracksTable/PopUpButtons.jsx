import PropTypes from 'prop-types';

import { PopUpWrapper, PopUp, PopUpButton } from './PopUpButtons.styled';

const PopUpButtons = ({
  removeTrackFromAddTrackFn,
  addTrackToAddTrackFn,
  addTrackToPlaylistFn,
  isAddTrack,
  deleteTrackFn,
  menuOptions
}) => {
  if (menuOptions === undefined) {
    menuOptions = {
      deleteFn: false
    };
  }

  const { deleteFn } = menuOptions;

  const toogleTrackInAdd = isAddTrack
    ? 'Видалити зі списку обраних'
    : 'Додати до списку обраних';

  const toogleTrackInAddFn = isAddTrack
    ? removeTrackFromAddTrackFn
    : addTrackToAddTrackFn;

  return (
    <PopUpWrapper>
      <PopUp>
        <PopUpButton type="button" onClick={toogleTrackInAddFn}>
          {toogleTrackInAdd}
        </PopUpButton>
        <PopUpButton type="button" onClick={addTrackToPlaylistFn}>
          Додати до плейлисту
        </PopUpButton>
        {deleteFn && (
          <PopUpButton type="button" onClick={deleteTrackFn}>
            Видалити
          </PopUpButton>
        )}
      </PopUp>
    </PopUpWrapper>
  );
};

PopUpButtons.propTypes = {
  removeTrackFromAddTrackFn: PropTypes.func,
  addTrackToAddTrackFn: PropTypes.func,
  addTrackToPlaylistFn: PropTypes.func,
  deleteTrackFn: PropTypes.func,
  isAddTrack: PropTypes.bool,
  menuOptions: PropTypes.object
};

export default PopUpButtons;
