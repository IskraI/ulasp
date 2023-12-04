import MediaListItem from "../MediaList/MediaList";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";

import {
  TitleWrapper,
  ControlWrapper,
  MediaList,
} from "../MediaList/MediaList.styled";
import { MockPlayer } from "../TracksTable/TracksTable.styled";
import { Button } from "../../Button/Button";
import symbol from "../../../assets/symbol.svg";

const LatestPlaylists = ({
  displayPlayer,
  display,
  data: playlists,
  isFetching,
  error,
}) => {

  return (
    <>
      {!isFetching && !error && (
        <>
          <ControlWrapper>
            <TitleWrapper>Нові плейлисти</TitleWrapper>

            <Button
              icon={`${symbol}#icon-redo-active`}
              type="button"
              text={"Плейлист"}
              width="198px"
              display="block"
              fontsize="24px"
              padding="8px"
            />
          </ControlWrapper>
          <MediaList>
            {playlists.map(({ _id, playListName, playListAvatarURL }) => (
              <MediaListItem
                key={_id}
                title={playListName}
                icon={playListAvatarURL}
              />
            ))}
          </MediaList>
          <MediaNavigationLink link={"newplaylists"} display={display} />
          <MockPlayer style={{ display: displayPlayer }}>
            Тут будет плеер
          </MockPlayer>
        </>
      )}
    </>
  );
};

export default LatestPlaylists;