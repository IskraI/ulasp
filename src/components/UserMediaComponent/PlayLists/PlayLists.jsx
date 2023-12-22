import PlayListItem from "./PlayListsItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";

import {
  TitleWrapper,
  ControlWrapper,
  MediaList,
  TitleContainer
} from "./MediaList.styled";
// import { MockPlayer } from "../TracksTable/TracksTable.styled";
import symbol from "../../../assets/symbol.svg";

const LatestPlaylists = ({
  title,
  displayPlayer,
  display,
  data: playlists,
  isFetching,
  error,
}) => {

  return (
    <>
       <TitleContainer>
        <TitleWrapper>{title}</TitleWrapper>
        </TitleContainer>
      {!isFetching && !error && (
        <>
          {/* <ControlWrapper> */}
            {/* <TitleWrapper>Нові плейлисти</TitleWrapper> */}
            
                {/* </ControlWrapper> */}
          <MediaList>
            {playlists.map(({ _id, playListName, playListAvatarURL }) => (
              <PlayListItem
                key={_id}
                title={playListName}
                icon={playListAvatarURL}
                id={_id}
              />
            ))}
          </MediaList>
          <MediaNavigationLink link={"newplaylists"} display={display} />
          {/* <MockPlayer style={{ display: displayPlayer }}>
            Тут будет плеер
          </MockPlayer> */}
        </>
      )}
    </>
  );
};

export default LatestPlaylists;