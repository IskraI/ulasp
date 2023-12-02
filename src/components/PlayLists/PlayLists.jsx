import { useGetLatestPlaylistsQuery, useGetLatestPlaylistsForUserQuery } from "../../redux/playlistsSlice";
import { useSelector } from "react-redux";
import { getUserState } from "../../redux/userSelectors";
import MediaListItem from "../MediaList/MediaList";
import {
  TitleWrapper,
  ControlWrapper,
  MediaList,
} from "../MediaList/MediaList.styled";
import { Button } from "../Button/Button";
import symbol from "../../assets/symbol.svg";

const LatestPlaylists = () => {

  const user = useSelector(getUserState);
  
    const { data: playlists, isFetching, error } = useGetLatestPlaylistsQuery("", { skip: !user.editorRole });
  const { data: userPlaylists, isFetching: userIsFetching, error: userError } = useGetLatestPlaylistsForUserQuery("", { skip: !user.userRole });
  
  if (isFetching || userIsFetching) {
    return <div>Loading...</div>;
  }

  if (error || userError) {
    return <div>Error loading playlists</div>;
  } 
  
  const displayedPlaylists = user.editorRole ? playlists : userPlaylists;
console.log('list', displayedPlaylists )
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
        {displayedPlaylists.map(({ _id, playListName, playListAvatarURL }) => (
          <MediaListItem key={_id} title={playListName} icon={playListAvatarURL} />
        ))}
      </MediaList>
        </>
      )}
    </>
  );
};

export default LatestPlaylists;
