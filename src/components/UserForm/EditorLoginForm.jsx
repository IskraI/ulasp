import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import {
  UserFopSchema,
  UserCompanySchema,
  MusicEditorSchema,
} from "./UserSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateEditorUserMutation } from "../../redux/dataUsersSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import {
  LoginLabel,
  LoginForm,
  LoginField,
  LoginInput,
} from "./UserCreateForm.styled";

// получаем функцию на закрітие модального окна и значение страниці что открілась форма для добавления нового юзера - модальное окно
//typeOfPage card modal
const EditorLoginForm = ({ user, readOnly }) => {
  const [dispatch, { isLoading: isLoadingEditor }] = //ф-я для отправки формы юзера тов
    useCreateEditorUserMutation();

  const navigate = useNavigate();
  //создание формы - юзформ
  const {
    control,
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
    // defaultValues: { name: '', email: '', password: '' },
    // resolver: typeOfUser === 'fop' ? yupResolver(UserFopSchema) : typeOfUser === 'tov' ? yupResolver(UserCompanySchema): yupResolver(MusicEditorSchema)
  });

  const onFormSubmit = (data) => {
    console.log(data);

    const formData = { ...data };
    console.log(formData);
    //   dispatch(formData)
    //     .unwrap()
    //     .then(() => {
    //       navigate("/admin/users");
    //       onCloseModal();
    //     })
    //     .catch((error) => console.log(error.data.message));
  };

  return (
    <>
      {/* форма изпользует компонент  UserFieldForm - в зависимости от пропсов выводятся те или иные поля*/}
      <LoginForm onSubmit={handleSubmit(onFormSubmit)}>
        <LoginField>
          <LoginLabel>Логін</LoginLabel>
          <Controller
            name="login"
            control={control}
            defaultValue={user.login}
            render={({ field }) => (
              <LoginInput
                type="text"
                placeholder="Логін"
                readOnly={readOnly}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </LoginField>
        <LoginField>
          {/* <LoginLabel>Пароль</LoginLabel> */}
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <LoginInput
                type="text"
                placeholder="Пароль"
                readOnly={readOnly}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </LoginField>
        <Button
          type="submit"
          padding="8px 12px"
          height="48px"
          marginright="auto"
          text={<>Зберегти/змінити</>}
        />
      </LoginForm>
    </>
  );
};

export default EditorLoginForm;
