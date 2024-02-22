import { useState, useEffect } from "react";

import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import ControlMediateca from "../ControlMediatecaUser/ControlMediatecaUser";
import PlaylistListItem from "./PlayListItemShop";

import symbol from "../../../assets/symbol.svg";
import { ErrorNotFound } from "../../Errors/Errors";

import { PlaylistWrapper, PlaylistList } from "./PlayLists.styled";
// import { ModalInfoText, ModalInfoTextBold } from "../../Modal/Modal.styled";
// import { LoaderButton } from "../../Loader/Loader";
import { PlaylistItem } from "./PlayLists.styled";

const Playlists = ({
  title,
  data: playlists = [],
  isFetchingPlaylist,
  error,
  showNavigationLink,
  typeMediaLibrary,
  idTypeOfMediaLibrary,
}) => {
  console.log(playlists);
  return (
    <>
      <ControlMediateca title={title} />
      {!isFetchingPlaylist && !error && !playlists.length && (
        <p>Плейлисти ще не додані</p>
      )}

      {!error && (
        <PlaylistWrapper>
          <PlaylistList>
            {/* {isLoadingCreatePlaylist && (
              <PlaylistItem>
                <LoaderButton />
                <p>Playlist creating...</p>
              </PlaylistItem>
            )} */}
            {playlists.map(({ _id, playListName, playListAvatarURL }) => (
              <PlaylistListItem
                key={_id}
                id={_id}
                mediaLibraryName={title}
                title={playListName}
                icon={playListAvatarURL}
                typeMediaLibrary={typeMediaLibrary}
                idTypeOfMediaLibrary={idTypeOfMediaLibrary}
              />
            ))}
          </PlaylistList>
          <MediaNavigationLink
            link={"newplaylists"}
            showNavigationLink={showNavigationLink}
          />
        </PlaylistWrapper>
      )}
    </>
  );
};

export default Playlists;
