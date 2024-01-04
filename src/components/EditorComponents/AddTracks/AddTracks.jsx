/* eslint-disable react/prop-types */
import { ControlWrapper } from "../MediaList/MediaList.styled";
import { useUploadTrackMutation } from "../../../redux/tracksSlice";
import { useUploadTracksInPlaylistMutation } from "../../../redux/playlistsSlice";
import TracksTable from "../TracksTable/TracksTable";

import {
  FormControlAddTrack,
  InputControlAddTrack,
  ButtonLabel,
} from "./AddTrack.styled";
import { useForm } from "react-hook-form";
import { useState, useEffect, useCallback } from "react";

const AddTracks = ({
  title,
  iconButton,
  textButton,
  onClick,
  disabled,
  playlistId,
}) => {
  const [
    uploadTrack,
    {
      isSuccess: isSuccessUploadTrack,
      isError: isErrorUploadTrack,
      isLoading: isLoadingUploadTrack,
      error,
    },
  ] = useUploadTrackMutation();

  const [uploadTrackInPlaylist, { all }] = useUploadTracksInPlaylistMutation();
  const [selectedTracks, setSelectedTracks] = useState([]);

  console.log("selectedTracks", selectedTracks);

  const {
    control,
    register,
    handleSubmit,
    setError,
    clearErrors,
    resetField,
    getValues,
    getFieldState,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
  });

  const handleChooseTracks = (event) => {
    setSelectedTracks([...event.target.files]);
  };

  const handleSubmitTracks = useCallback(async () => {
    resetField("trackURL");
    const formData = new FormData();

    if (!selectedTracks) {
      return;
    }
    for (let track of selectedTracks) {
      // const req = new XMLHttpRequest();
      // console.log(req);
      formData.append("trackURL", track);
      playlistId
        ? await uploadTrackInPlaylist({ playlistId, formData })
        : await uploadTrack(formData)
            .unwrap()
            .then(() => {
              formData.delete("trackURL");
              console.log("Your profile has been updated", "success");
            })
            .catch((error) => console.log("ERROR 1", error))
            .finally(() => {
              formData.delete("trackURL");
              setSelectedTracks([]);
            });
    }
  }, [
    playlistId,
    resetField,
    selectedTracks,
    uploadTrack,
    uploadTrackInPlaylist,
  ]);

  useEffect(() => {
    handleSubmitTracks();
  }, [handleSubmitTracks, selectedTracks]);

  return (
    <>
      <ControlWrapper>
        <FormControlAddTrack autoComplete="off">
          <ButtonLabel htmlFor="tracks_input">
            <svg width="24" height="24" style={{ marginRight: "8px" }}>
              <use href={iconButton}></use>
            </svg>
            Музику
          </ButtonLabel>
          <InputControlAddTrack
            {...register("trackURL")}
            id="tracks_input"
            type="file"
            multiple={true}
            accept="audio/*"
            onChange={handleChooseTracks}
          />
        </FormControlAddTrack>
      </ControlWrapper>
      <TracksTable
        isSuccessUploadTrack={isSuccessUploadTrack}
        isErrorUploadTrack={isErrorUploadTrack}
        isLoadingUploadTrack={isLoadingUploadTrack}
      />
    </>
  );
};

export default AddTracks;
