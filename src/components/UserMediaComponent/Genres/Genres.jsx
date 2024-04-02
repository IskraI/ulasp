import PropTypes from "prop-types";

import GenreListItem from "./GenresItem";

import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import {
  TitleWrapper,
  ControlWrapper,
  MediaList,
} from "../MediaList/MediaList.styled";

import { GenresWrapper } from "./Genres.styled";

const Genres = ({ data: genres, isFetching, isError, showNavigationLink }) => {
  return (
    <>
      {!isFetching && !isError && (
        <GenresWrapper>
          <ControlWrapper>
            <TitleWrapper>Жанри</TitleWrapper>
          </ControlWrapper>
          <MediaList>
            {genres.map(({ _id, genre, genreAvatarURL }) => (
              <GenreListItem
                key={_id}
                id={_id}
                title={genre}
                icon={genreAvatarURL}
              />
            ))}
          </MediaList>
          <MediaNavigationLink
            link={"genres"}
            showNavigationLink={showNavigationLink}
          />
        </GenresWrapper>
      )}
    </>
  );
};

Genres.propTypes = {
  data: PropTypes.array,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
  showNavigationLink: PropTypes.bool,
};

export default Genres;
