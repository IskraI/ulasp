/* eslint-disable react/prop-types */
import { Button } from "../../Button/Button";
import { useForm } from "react-hook-form";
import {
  FormControlModal,
  InputControlModal,
  TextControlModal,
  LabelInputControlModal,
  CoverImage,
  ClearImage,
} from "./ModalForm.styled";
import { useState } from "react";

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
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
  });

  const coverImage = img ? URL.createObjectURL(img) : null;

  // console.log("coverImage", coverImage);

  const [valueInputFirst, setValueInputFirst] = useState("");

  const handleChange = (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    const value = e.currentTarget.value.trim();
    setValueInputFirst(value);
    // setValue(idInputFirst, value);
    // console.log(getValues(idInputFirst));
  };

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
          // value={valueInputFirst}
          // onChange={handleChange}
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
          // disabled={valueInputFirst === "" ? true : false}
        />
      </FormControlModal>
    </>
  );
};

export default ModalForm;
