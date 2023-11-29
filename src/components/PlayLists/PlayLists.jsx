import { useGetLatestPlaylistsQuery } from "../../redux/playlistsSlice";
import MediaListItem from "../MediaList/MediaList";
import {
  TitleWrapper,
  ControlWrapper,
  MediaList,
} from "../MediaList/MediaList.styled";
import { Button } from "../Button/Button";
import symbol from "../../assets/symbol.svg";

const LatestPlaylists = () => {
  const { data: playlists, isFetching, error } = useGetLatestPlaylistsQuery();

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
        </>
      )}
    </>
  );
};

export default LatestPlaylists;
