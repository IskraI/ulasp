import PropTypes from "prop-types";

import { useState } from "react";

import CreatePlayListItem from "./CreatePlaylistItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";

import ControlMyplaylists from "../ControlMyplaylists/ControlMyplaylists";

import { NoData } from "../../Errors/Errors";

import CreateUsersPlaylists from "./CreateUsersPlaylists";

import symbol from "../../../assets/symbol.svg";
import { MediaList } from "../../UserMediaComponent/MediaList/MediaList.styled";

const CreatePlaylists = ({
  title,
  showNavigationLink,
  data: createPlaylists,
  dataFavorite,
  isError,
}) => {
  const minLengthInput = 1;
  const maxLengthInput = 29;

  const [showModal, setShowModal] = useState(false);

  const toogleModal = () => setShowModal(() => !showModal);
  return (
    <>
      <ControlMyplaylists
        title={title}
        iconButton={`${symbol}#icon-playlist-add`}
        textButton={"Плейлист"}
        onClick={toogleModal}
      />
      {createPlaylists.length === 0 && (
        <NoData
          text={"Ви ще не створили жодного плейлиста"}
          textColor={"grey"}
        />
      )}
      {!isError && (
        <>
          <MediaList>
            {createPlaylists?.map(
              ({ _id, playListName, playListAvatarURL }) => {
                return (
                  <CreatePlayListItem
                    key={_id}
                    id={_id}
                    favoriteStatus={dataFavorite.favorites.some(
                      (item) => item._id === _id
                    )}
                    title={playListName}
                    icon={playListAvatarURL}
                    minLength={minLengthInput}
                    maxLength={maxLengthInput}
                    createPlaylists={createPlaylists}
                  />
                );
              }
            )}
          </MediaList>
          <MediaNavigationLink
            link={"createplaylists"}
            showNavigationLink={showNavigationLink}
          />
        </>
      )}
      {showModal && <CreateUsersPlaylists onClose={toogleModal} />}
    </>
  );
};

CreatePlaylists.propTypes = {
  title: PropTypes.string,
  showNavigationLink: PropTypes.bool,
  data: PropTypes.array,
  dataFavorite: PropTypes.object,
  isError: PropTypes.bool,
};
export default CreatePlaylists;
