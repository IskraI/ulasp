import PropTypes from "prop-types";

import { PopUpWrapper, PopUp, PopUpButton } from "./PopUpButtons.styled";

const PopUpButtons = ({ removeTrackFn, updateTrackCoverFn }) => {
  return (
    <PopUpWrapper>
      <PopUp>
        <PopUpButton type="button" onClick={removeTrackFn}>
          Видалити з медіатеки
        </PopUpButton>
        <PopUpButton disabled={true} type="button">
          Додати до плейлисту
        </PopUpButton>
        <PopUpButton disabled={true} type="button">
          Перенести до плейлисту
        </PopUpButton>
        <PopUpButton type="button" onClick={updateTrackCoverFn}>
          Оновити обкладинку
        </PopUpButton>
      </PopUp>
    </PopUpWrapper>
  );
};

PopUpButtons.propTypes = {
  removeTrackFn: PropTypes.func,
  updateTrackCoverFn: PropTypes.func,
};

export default PopUpButtons;
