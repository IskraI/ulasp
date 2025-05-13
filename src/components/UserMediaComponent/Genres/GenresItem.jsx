import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';

import { BASE_URL } from '../../../constants/constants';

import {
  MediaItem,
  MediaImg,
  MediaItemText,
  LinkWrapper
} from '../MediaList/MediaList.styled';

const GenreListItem = ({ id, title, icon }) => {
  const location = useLocation();

  const imgSrc = `${BASE_URL}/${icon}`;

  return (
    <>
      <MediaItem>
        <LinkWrapper
          key={id}
          to={`/user/medialibrary/genres/${id}/playlists`}
          state={{ from: location }}
        >
          <MediaImg src={imgSrc} alt={title} />

          <MediaItemText padding={'0px 40px 0px 6px'}>{title}</MediaItemText>
        </LinkWrapper>
      </MediaItem>
    </>
  );
};

GenreListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  minLengthInput: PropTypes.number,
  maxLengthInput: PropTypes.number
};

export default GenreListItem;
