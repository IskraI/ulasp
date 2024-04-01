import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { BASE_URL } from "../../../constants/constants";
import { colors } from "../../../styles/vars";

import {
  MediaItem,
  MediaImg,
  MediaItemText,
} from "../MediaList/MediaList.styled";

const ModalPlayListItem = ({
  id,
  title,
  icon,
  addToSelectedPlaylists,
  deleteSelectedPlaylists,
}) => {
  const [selected, setSelected] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (selected) {
      ref.current.style.background = `${colors.accentHoverColor}`;
    } else {
      ref.current.style.background = `${colors.activeBtnColor}`;
    }
    () => {
      ref.current = null;
    };
  }, [selected]);

  const addToSelected = () => {
    if (selected) {
      deleteSelectedPlaylists(id);
      setSelected(false);
      return;
    }
    addToSelectedPlaylists(id);
    setSelected(true);
  };

  return (
    <MediaItem onClick={addToSelected} ref={ref}>
      <MediaImg src={BASE_URL + "/" + icon} alt={title} />
      <MediaItemText>{title}</MediaItemText>
    </MediaItem>
  );
};

ModalPlayListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  addToSelectedPlaylists: PropTypes.func,
  deleteSelectedPlaylists: PropTypes.func,
};

export default ModalPlayListItem;
