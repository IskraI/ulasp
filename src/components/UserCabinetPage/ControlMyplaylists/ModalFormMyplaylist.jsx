/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { Button } from "../../Button/Button";
import { useForm, useWatch } from "react-hook-form";
import { useEffect, memo } from "react";

import {
  FormControlModal,
  InputControlModal,
  TextControlModal,
  LabelInputControlModal,
  CoverImage,
  ClearImage,
} from "./ModalFormMyplaylist.syled";

const ModalFormMyplaylist = memo(function ModalForm({
  onSubmit,
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
}) {
  const { control, register, handleSubmit, setValue, setFocus } = useForm({
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
          disabled={inputFirstValue === "" ? true : false}
        />
      </FormControlModal>
    </>
  );
});

export default ModalFormMyplaylist;
