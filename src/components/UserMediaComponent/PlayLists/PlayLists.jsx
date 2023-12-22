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
             {console.log(playlists)}
            {playlists.map(({ _id, playListName, playListAvatarURL }) => (
              <PlayListItem
                key={_id}
                id={_id}
                title={playListName}
              
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