import PropTypes from "prop-types";

import { Link, useLocation } from "react-router-dom";

import { BASE_URL } from "../../../constants/constants";

import {
  MediaItem,
  MediaImg,
  MediaItemText,
} from "../MediaList/MediaList.styled";

const GenreListItem = ({ id, title, icon }) => {
  const location = useLocation();

  return (
    <>
      <Link
        key={id}
        to={`/user/medialibrary/genres/${id}/playlists`}
        state={{ from: location }}
      >
        <MediaItem>
          <MediaImg src={BASE_URL + "/" + icon} alt={title} />

          <MediaItemText padding={"0px 40px 0px 6px"}>{title}</MediaItemText>
        </MediaItem>
      </Link>
    </>
  );
};

GenreListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  minLengthInput: PropTypes.number,
  maxLengthInput: PropTypes.number,
};

export default GenreListItem;
