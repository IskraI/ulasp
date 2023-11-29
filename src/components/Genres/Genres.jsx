import { useGetAllGenresQuery } from "../../redux/genresSlice";
import { GenresWrapper } from "./Genres.styled";
import MediaListItem from "../MediaList/MediaList";
import { MockPlayer } from "../TracksTable/TracksTable.styled";
import MediaNavigationLink from "../NavigationLink/NavigationLink";
import {
  TitleWrapper,
  ControlWrapper,
  MediaList,
} from "../MediaList/MediaList.styled";
import { Button } from "../Button/Button";
import symbol from "../../assets/symbol.svg";

const Genres = ({ display, displayPlayer }) => {
  const { data: genres, isFetching, error } = useGetAllGenresQuery();
  return (
    <>
      {!isFetching && !error && (
        <GenresWrapper>
          <ControlWrapper>
            <TitleWrapper>Жанри</TitleWrapper>

            <Button
              icon={`${symbol}#icon-music-album`}
              type="button"
              text={"Жанр"}
              width="198px"
              display="block"
              fontsize="24px"
              padding="8px"
            />
          </ControlWrapper>
          <MediaList>
            {genres.map(({ _id, genre, genreAvatarURL }) => (
              <MediaListItem key={_id} title={genre} icon={genreAvatarURL} />
            ))}
          </MediaList>
          <MediaNavigationLink link={"genres"} display={display} />
        </GenresWrapper>
      )}
      <MockPlayer style={{ display: displayPlayer }}>
        Тут будет плеер
      </MockPlayer>
    </>
  );
};

export default Genres;
