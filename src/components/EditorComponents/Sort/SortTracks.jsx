import PropTypes from "prop-types";
import symbol from "../../../assets/symbol.svg";
import { SvgMedia } from "../MediaList/MediaList.styled";
import { useEffect, useState, useCallback, useRef } from "react";

const SortTracks = ({
  onClick,
  omMouseEnter,
  sortType,
  sortedBy,
  prefetch,
}) => {
  const [rotateIcon, setRotateIcon] = useState(180);
  const [isPrefetch, setIsPrefetch] = useState(false);

  // const [isRotated, setIsRotated] = useState(false);

  const switchForSort = () => {
    switch (sortType) {
      case "Az":
        return handleSortAz();

      default:
        alert("This type of sort is not available");
        return;
    }
  };

  const handleClickRotate = useCallback(() => {
    let transformIcon = -360 + 180;

    return rotateIcon === 180
      ? setRotateIcon(transformIcon)
      : setRotateIcon(180);
  }, [rotateIcon]);

  // useEffect(() => {
  //   const transformIcon = -360 + 180;
  //   rotateIcon === 180 ? setRotateIcon(transformIcon) : setRotateIcon(180);
  // }, [rotateIcon]);

  // const handleSort = useCallback(() => {
  //   const max = -2;
  //   const min = 2;
  //   let sortedBy = Math.floor(Math.random() * (max - min + 1)) + min;

  //   if (sortedBy === 0) {
  //     sortedBy = -1;
  //   }
  //   console.log(sortedBy);
  //   return { sortedBy, countOfSortedFields };
  // }, [countOfSortedFields]);

  const handleSortAz = useCallback(() => {
    return sortedBy === -1 ? 1 : -1;
  }, [sortedBy]);

  return (
    <>
      <button
        type="button"
        style={{
          background: "none",
          border: "none",
          marginTop: "auto",
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
          <use href={`${symbol}#icon-sort`}></use>
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
};

export default SortTracks;
