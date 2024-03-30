import PropTypes from "prop-types";

import { useForm, useWatch } from "react-hook-form";
import { useEffect, memo } from "react";

import useValidateInput from "../../../hooks/useValidateInput";
import { Button } from "../../Button/Button";

import {
  FormControlModal,
  InputControlModal,
  TextControlModal,
  LabelInputControlModal,
  CoverImage,
  ClearImage,
  ErrorValidateInput,
} from "./ModalForm.styled";

const ModalForm = memo(function ModalForm({
  onSubmit,
  genre,
  idInputFirst,
  marginTopInputFirst,
  placeholderFirst,
  idInputSecond,
  valueInputSecond,
  idInputImg,
  changePlayListAvatar,
  img,
  clearImageCover,
  cover,
  minLength,
  maxLength,
}) {
  const { control, register, handleSubmit, setValue, setFocus } = useForm({
    mode: "onChange",
  });

  const idInputFirstValue = useWatch({
    control,
    name: idInputFirst,
    defaultValue: "",
  });

  const inputFirstValue = idInputFirstValue.trim();

  const [errorValidateMessage, isError, setIsError] = useValidateInput(
    inputFirstValue,
    minLength,
    maxLength
  );
  console.log("minLength", minLength);
  console.log("inputFirstValue", inputFirstValue);

  typeof useEffect(() => {
    setFocus(idInputFirst);
  }, [idInputFirst, setFocus]);

  useEffect(() => {
    if (!inputFirstValue) {
      setIsError(true);
    }
    () => {
      return setIsError(false);
    };
  }, [inputFirstValue, setIsError]);

  const coverImage = img ? URL.createObjectURL(img) : null;

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
              display={"none"}
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
          minLength={minLength}
          maxLength={maxLength}
          isError={isError}
        />
        {isError && (
          <ErrorValidateInput>{errorValidateMessage}</ErrorValidateInput>
        )}
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
          showIcon={false}
          fontsize="24px"
          padding="8px"
          marginleft={"auto"}
          marginbottom={"28px"}
          disabled={isError}
        />
      </FormControlModal>
    </>
  );
});

ModalForm.propTypes = {
  onSubmit: PropTypes.func,
  clearImageCover: PropTypes.func,
  genre: PropTypes.string,
  idInputFirst: PropTypes.string,
  marginTopInputFirst: PropTypes.string,
  placeholderFirst: PropTypes.string,
  idInputSecond: PropTypes.string,
  valueInputSecond: PropTypes.string,
  idInputImg: PropTypes.string,
  changePlayListAvatar: PropTypes.func,
  img: PropTypes.object,
  cover: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
};

export default ModalForm;
