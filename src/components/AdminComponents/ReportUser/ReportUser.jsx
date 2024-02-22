import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import {
  ErrorText,
  Title,
  ReportForm,
  ReportFormField,
  ReportFormLabel,
  ReportFormInput,
} from "./ReportUser.styled";
import TabNavigation from "../../TabNavigation/TabNavigation";
import { useForm } from "react-hook-form";
import { Button } from "../../Button/Button";
import { useCountListensByUserByIdMutation } from "../../../redux/dataUsersSlice";
import { useParams } from "react-router-dom";
import ReportUserTable from "./ReportUserTable";
const ReportUser = () => {
  const [responseData, setResponseData] = useState();
  const { id } = useParams();
  console.log("userId :>> ", id);
  const [
    dispatchCountListensByUser,
    { isLoading: isLoadingCountListensByUser },
  ] = useCountListensByUserByIdMutation();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
    // defaultValues: { name: '', email: '', password: '' },
  });
  const onFormSubmit = (data) => {
    const formData = { ...data, userId: id };
    console.log("formData :>> ", formData);
    dispatchCountListensByUser(formData)
      .unwrap()
      .then((responseData) => {
        console.log("responseData :>> ", responseData);
        setResponseData(responseData);
      })
      .catch(
        (error) =>
          // console.log(error.data.message)
          error?.data?.message && alert(error.data.message)
      );
    console.log(data);
  };
  return (
    <>
      <TabNavigation pathtext={false} />
      <Title>Звіт по користувачу {id}</Title>
      <ReportForm onSubmit={handleSubmit(onFormSubmit)}>
        Звіт
        <ReportFormField>
          <ReportFormLabel>З</ReportFormLabel>
          <ReportFormInput
            type="date"
            placeholder="дата"
            aria-describedby="dateOfStartTooltip"
            className={`${errors.dateOfStart ? "invalid" : ""}${
              !errors.dateOfStart && dirtyFields.dateOfStart ? "valid" : ""
            }`}
            {...register("dateOfStart")}
          />
        </ReportFormField>
        <ReportFormField>
          <ReportFormLabel>по </ReportFormLabel>
          <ReportFormInput
            type="date"
            placeholder="дата"
            aria-describedby="dateOfEndTooltip"
            className={`${errors.dateOfEnd ? "invalid" : ""}${
              !errors.dateOfEnd && dirtyFields.dateOfEnd ? "valid" : ""
            }`}
            {...register("dateOfEnd")}
          />
        </ReportFormField>
        <Button
          type="submit"
          padding="8px"
          text="Зформувати"
          disabled={!isValid || (dirtyFields.dateOfEnd && errors.dateOfStart)}
          showIcon={false}
        />
      </ReportForm>
      {responseData && <ReportUserTable data={responseData} />}
    </>
  );
};

export default ReportUser;
