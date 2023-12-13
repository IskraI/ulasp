/* eslint-disable react/prop-types */
import { ControlWrapper } from "../MediaList/MediaList.styled";
import { useUploadTrackMutation } from "../../../redux/tracksSlice";
import {
  FormControlModal,
  InputControlModal,
} from "../ControlMediateca/ModalForm.styled";

import { useForm } from "react-hook-form";
import { useState } from "react";

import { Button } from "../../Button/Button";

import { ButtonLabel } from "./AddTrack.styled";

const AddTracks = ({ title, iconButton, textButton, onClick, disabled }) => {
  const [uploadTrack, { isSuccess, isError: isErrorUploadTrack, error }] =
    useUploadTrackMutation();
  const [selectedTracks, setSelectedTracks] = useState([]);

  const {
    control,
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    getValues,
    getFieldState,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
  });

  const handleChooseTracks = (event) => {
    setSelectedTracks([...event.target.files]);
  };

  const handleSubmitTracks = async () => {
    const formData = new FormData();

    if (!selectedTracks) {
      return;
    }

    for (let track of selectedTracks) {
      formData.append("trackURL", track);
      await uploadTrack(formData)
        .unwrap()
        .then(() => {
          console.log("Your profile has been updated", "success");
        })
        .catch((error) => console.log("ERROR 1", error))
        .finally(() => formData.delete("trackURL"));
    }
  };

  return (
    <ControlWrapper>
      <FormControlModal autoComplete="off" marginleft="auto">
        <ButtonLabel htmlFor="tracks_input">
          <svg width="24" height="24" style={{ marginRight: "8px" }}>
            <use href={iconButton}></use>
          </svg>
          Музику
        </ButtonLabel>
        <InputControlModal
          {...register("trackURL")}
          id="tracks_input"
          type="file"
          multiple={true}
          accept="audio/*"
          onChange={handleChooseTracks}
          style={{ display: "none" }}
        />
        {/* <Button
          icon={iconButton}
          type="button"
          text={textButton}
          width="198px"
          display="block"
          fontsize="24px"
          padding="8px"
          onClick={handleSubmitTracks}
          disabled={selectedTracks.length === 0 ? true : false}
          marginleft="auto"
        /> */}
      </FormControlModal>
    </ControlWrapper>
  );
};

export default AddTracks;
