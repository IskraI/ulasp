/* eslint-disable react/prop-types */
import { Button } from "../../Button/Button";
import { useParams } from "react-router-dom";

import { useUpdatePlaylistMutation } from "../../../redux/playlistsSlice";

const PlayListControl = ({ isPublished, countTracks }) => {
  const { playlistId } = useParams();

  const [updatePlaylist, { all }] = useUpdatePlaylistMutation();

  const handleSubmit = async () => {
    const body = Object.assign({ published: isPublished ? "false" : "true" });

    await updatePlaylist({ playlistId, body }).unwrap();
  };

  return (
    <>
      <Button
        type={"button"}
        text={isPublished ? "Опублікований" : "Опублікувати"}
        color={isPublished ? "#D74A4A" : null}
        background={isPublished ? null : " #fff3bf"}
        disabled={countTracks ? false : true}
        display={"none"}
        marginleft={"24px"}
        padding={"6px 24px"}
        fontsize={"16px"}
        width={"140px"}
        height={"32px"}
        onClick={handleSubmit}
      />
    </>
  );
};

export default PlayListControl;
