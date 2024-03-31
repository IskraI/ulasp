import PropTypes from "prop-types";

import { PopUpWrapper, PopUp, PopUpButton } from "./PopUpButtons.styled";

const PopUpButtons = ({
  removeTrackFn,
  updateTrackCoverFn,
  addTrackToPlaylists,
  addTrackToChartFn,
  removeTrackFromChartFn,
  isTopChart,
}) => {
  const toogleTrackInChart = isTopChart
    ? "Видалити з новинок"
    : "Додати до новинок";

  const toogleTrackInChartFn = isTopChart
    ? removeTrackFromChartFn
    : addTrackToChartFn;

  return (
    <PopUpWrapper>
      <PopUp>
        <PopUpButton type="button" onClick={removeTrackFn}>
          Видалити з медіатеки
        </PopUpButton>
        <PopUpButton type="button" onClick={toogleTrackInChartFn}>
          {toogleTrackInChart}
        </PopUpButton>
        <PopUpButton type="button" onClick={addTrackToPlaylists}>
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
  addTrackToPlaylists: PropTypes.func,
  addTrackToChartFn: PropTypes.func,
  removeTrackFromChartFn: PropTypes.func,
  isTopChart: PropTypes.bool,
};

export default PopUpButtons;
