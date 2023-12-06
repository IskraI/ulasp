/* eslint-disable react/prop-types */
import { Button } from "../../Button/Button";
import { useForm } from "react-hook-form";
import { FormControlModal, InputControlModal } from "./ModalForm.styled";

const ModalForm = ({
  onSubmit,
  genre,
  idInputFirst,
  placeholderFirst,
  idInputSecond,
  placeholderSecond,
}) => {
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

  return (
    <>
      <FormControlModal autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <InputControlModal
          {...register(idInputFirst)}
          type="text"
          id={idInputFirst}
          placeholder={placeholderFirst}
        />
        <p>{genre}</p>

        <InputControlModal
          {...register(idInputSecond)}
          type="hidden"
          id={idInputSecond}
          value={idInputFirst}
        />
        <Button
          type="Submit"
          text={"Створити"}
          width="198px"
          display="none"
          fontsize="24px"
          padding="8px"
          marginleft={"auto"}
          marginbottom={"28px"}
        />
      </FormControlModal>
    </>
  );
};

export default ModalForm;
