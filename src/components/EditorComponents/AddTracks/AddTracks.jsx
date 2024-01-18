/* eslint-disable react/prop-types */
import { ControlWrapper } from "../MediaList/MediaList.styled";
// import { useUploadTrackMutation } from "../../../redux/tracksSlice";
// import { useUploadTracksInPlaylistMutation } from "../../../redux/playlistsSlice";

import {
  FormControlAddTrack,
  InputControlAddTrack,
  ButtonLabel,
} from "./AddTrack.styled";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const AddTracks = ({
  title,
  iconButton,
  textButton,
  onClick,
  disabled,
  playlistId,
  uploadTrack,
  uploadTrackInPlaylist,
}) => {
  // const [
  //   uploadTrack,
  //   {
  //     isSuccess: isSuccessUploadTrack,
  //     isError: isErrorUploadTrack,
  //     isLoading: isLoadingUploadTrack,
  //     error,
  //   },
  // ] = useUploadTrackMutation();

  // const [uploadTrackInPlaylist, { isUninitialized, isSuccess, isLoading, reset }] =
  //   useUploadTracksInPlaylistMutation();
  const [selectedTracks, setSelectedTracks] = useState([]);

  // console.log("uploadTrack", uploadTrack);

  //   console.log("selectedTracks", selectedTracks);
  // console.log("uploadTrackInPlaylist", isSuccess);
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

  useEffect(() => {
    handleSubmitTracks();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTracks]);

  const handleChooseTracks = (event) => {
    setSelectedTracks([...event.target.files]);
  };

  const handleSubmitTracks = async () => {
    resetField("trackURL");
    const formData = new FormData();

    if (!selectedTracks) {
      return;
    }
    for (let track of selectedTracks) {
      formData.append("trackURL", track);

 

      if (playlistId !== undefined) {
        await uploadTrackInPlaylist({ playlistId, formData })
          .unwrap()
          .then(() => {
            // formData.delete("trackURL");
          })
          .catch((error) => console.log("ERROR 1", error))
          .finally(() => {
            formData.delete("trackURL");
            setSelectedTracks(null);
          });
      }
      if (playlistId === undefined) {
        await uploadTrack(formData)
          .unwrap()
          .then(() => {
            // formData.delete("trackURL");
          })
          .catch((error) => console.log("ERROR 1", error))
          .finally(() => {
            formData.delete("trackURL");
            setSelectedTracks(null);
          });
      }
    }
    formData.delete("trackURL");
  };

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
    </>
  );
};

export default AddTracks;
