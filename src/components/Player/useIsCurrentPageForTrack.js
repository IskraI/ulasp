import { useCallback } from "react";
import { useSelector } from "react-redux";

import { getPlayerState } from "../../redux/playerSelectors";

import { findPage } from "../../helpers/helpers";

const useIsCurrentPageForTrack = () => {
  const playerState = useSelector(getPlayerState);

  const { indexTrack, preloadSrc, pageSize } = playerState;

  const idx = useCallback(() => {
    return preloadSrc?.findIndex(
      (el) => el.id === playerState.src[indexTrack]?.id
    );
  }, [indexTrack, playerState.src, preloadSrc]);

  const currentIndex = idx();

  const currPage = useCallback(() => {
    return findPage(currentIndex, pageSize);
  }, [currentIndex, pageSize]);

  const currentPage = currPage();

  return [currentIndex, currentPage];
};

export default useIsCurrentPageForTrack;
