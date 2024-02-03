import { GenresWrapper } from "./Genres.styled";
import MediaListItem from "../MediaList/MediaList";
// import { MockPlayer } from "../TracksTable/TracksTable.styled";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import {
  TitleWrapper,
  ControlWrapper,
  MediaList,
} from "../MediaList/MediaList.styled";
import { Button } from "../../Button/Button";
import symbol from "../../../assets/symbol.svg";
import { useState, useEffect } from "react";


const Genres = ({
  display,
  displayPlayer,
  data: genres,
  isFetching,
  error,
   showNavigationLink
}) => {
  
  return (
    <>
      {!isFetching && !error && (
        <GenresWrapper>
          <ControlWrapper>
            <TitleWrapper>Жанри</TitleWrapper>
                  </ControlWrapper>
          <MediaList>
            {genres.map(({ _id, genre, genreAvatarURL }) => (
              <MediaListItem key={_id} id={_id} title={genre} icon={genreAvatarURL} />
            ))}
          </MediaList>
          <MediaNavigationLink  link={"genres"}
            showNavigationLink={showNavigationLink} />
        </GenresWrapper>
      )}
     
    </>
  );
};

export default Genres;
