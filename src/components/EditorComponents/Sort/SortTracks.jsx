import PropTypes from "prop-types";
import symbol from "../../../assets/symbol.svg";
import { SvgMedia } from "../MediaList/MediaList.styled";
import { useState, useCallback } from "react";

const SortTracks = ({
  onClick,
  omMouseEnter,
  sortType,
  sortedBy,
  prefetch,
  marginTop,
}) => {
  const [rotateIcon, setRotateIcon] = useState(360);

  const switchForSort = () => {
    switch (sortType) {
      case "Az":
        return handleSortAz();

      case "random":
        return handleSortRandom();

      default:
        alert("This type of sort is not available");
        return;
    }
  };

  const handleClickRotate = useCallback(() => {
    let transformIcon = -360 + 180;

    return rotateIcon === 360
      ? setRotateIcon(transformIcon)
      : setRotateIcon(360);
  }, [rotateIcon]);

  const handleSortAz = useCallback(() => {
    return sortedBy === -1 ? 1 : -1;
  }, [sortedBy]);

  const handleSortRandom = useCallback(() => {
    const getRandomNumber = () => {
      const max = 5;
      const min = 1;
      let random = Math.floor(Math.random() * (max - min + 1)) + min;
      return random;
    };

    const random = getRandomNumber();

    return random;
  }, []);

  const selectIcon = () => {
    switch (sortType) {
      case "Az":
        return "icon-sort";

      case "random":
        return "icon-random";
      default:
        break;
    }
  };

  return (
    <>
      <button
        type="button"
        style={{
          background: "none",
          border: "none",
          marginTop: marginTop ? marginTop : "auto",
          marginLeft: "24px",
        }}
        onMouseEnter={() => {
          if (prefetch) {
            omMouseEnter();
          }
        }}
        onClick={() => {
          handleClickRotate();
          onClick(switchForSort());
        }}
      >
        <SvgMedia width="24" height="24" transformIcon={rotateIcon}>
          <use href={`${symbol}#${selectIcon()}`}></use>
        </SvgMedia>
      </button>
    </>
  );
};

SortTracks.propTypes = {
  onClick: PropTypes.func,
  omMouseEnter: PropTypes.func,
  sortType: PropTypes.string,
  sortedBy: PropTypes.number,
  prefetch: PropTypes.bool,
  marginTop: PropTypes.string,
};

export default SortTracks;
