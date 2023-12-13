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

const AddTracks = ({ title, iconButton, textButton, onClick, disabled }) => {
  const [uploadTrack, { isSuccess, isError }] = useUploadTrackMutation();
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

    try {
      for (let track of selectedTracks) {
        formData.append("trackURL", track);
        await uploadTrack(formData)
          .unwrap()
          .then(() => {
            formData.delete("trackURL");
            console.log("Your profile has been updated", "success");
          });
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <ControlWrapper>
      <FormControlModal autoComplete="off">
        <InputControlModal
          {...register("trackURL")}
          type="file"
          multiple={true}
          accept="audio/*"
          onChange={handleChooseTracks}
        />
        <Button
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
        />
      </FormControlModal>
    </ControlWrapper>
  );
};

export default AddTracks;
