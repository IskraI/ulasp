/* eslint-disable react/prop-types */
import { Button } from "../../Button/Button";
import { useForm, useWatch } from "react-hook-form";
import { useEffect } from "react";

import {
  FormControlModal,
  InputControlModal,
  TextControlModal,
  LabelInputControlModal,
  CoverImage,
  ClearImage,
} from "./ModalForm.styled";

const ModalForm = ({
  onSubmit,
  genre,
  idInputFirst,
  marginTopInputFirst,
  placeholderFirst,
  idInputSecond,
  placeholderSecond,
  valueInputSecond,
  idInputImg,
  changePlayListAvatar,
  img,
  clearImageCover,
  cover,
}) => {
  const {
    control,
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    getValues,
    setValue,
    getFieldState,
    setFocus,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    setFocus(idInputFirst);
  }, [idInputFirst, setFocus]);

  const coverImage = img ? URL.createObjectURL(img) : null;

  // console.log("coverImage", coverImage);

  const idInputFirstValue = useWatch({
    control,
    name: idInputFirst,
    defaultValue: "",
  });

  const inputFirstValue = idInputFirstValue.trim();

  return (
    <>
      <FormControlModal autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        {/* Пропс cover, true если надо инпут с картинкой, false если нет */}
        {cover && (
          <>
            <LabelInputControlModal htmlFor={idInputImg}>
              {coverImage ? (
                <>
                  <CoverImage src={coverImage} alt="" />
                </>
              ) : (
                "Додати обкладинку"
              )}
            </LabelInputControlModal>

            <InputControlModal
              {...register(idInputImg)}
              type="file"
              accept="image/*"
              id={idInputImg}
              value="" //значение пустая строка для кавера плейлиста
              style={{ display: "none" }}
              onChange={changePlayListAvatar}
            />
            {coverImage && (
              <ClearImage type="button" onClick={clearImageCover}>
                Видалити
              </ClearImage>
            )}
          </>
        )}

        <InputControlModal
          {...register(idInputFirst)}
          type="text"
          id={idInputFirst}
          setValue={setValue}
          placeholder={placeholderFirst}
          margintop={marginTopInputFirst}
        />
        {genre && <TextControlModal>{genre}</TextControlModal>}

        <InputControlModal
          {...register(idInputSecond)}
          type="hidden"
          id={idInputSecond}
          value={valueInputSecond}
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
          disabled={inputFirstValue === "" ? true : false}
        />
      </FormControlModal>
    </>
  );
};

export default ModalForm;
