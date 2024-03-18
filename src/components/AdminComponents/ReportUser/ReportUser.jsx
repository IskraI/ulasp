import { useLocation } from "react-router-dom";
import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import {
  ErrorText,
  Title,
  ReportForm,
  ReportFormField,
  ReportFormLabel,
  ReportFormInput,
  FormField,
  ReportWrapper,
  ReporTabletWrapper,
} from "./ReportUser.styled";
import TabNavigation from "../../TabNavigation/TabNavigation";
import { useForm } from "react-hook-form";
import { Button } from "../../Button/Button";
import { ButtonPrint } from "../ButtonPrint/ButtonPrint";
import {
  useCountListensByUserByIdMutation,
  useGetUserByIdQuery,
} from "../../../redux/dataUsersSlice";
import { useParams } from "react-router-dom";
import ReportUserTable from "./ReportUserTable";
import ReportPrint from "./ReportPrint";

const ReportUser = () => {
  const [responseData, setResponseData] = useState();
  const [date, setDate] = useState({});
  const { id } = useParams();
  const { data: user, error, isLoading } = useGetUserByIdQuery(id);
  console.log("responseData :>> ", responseData);
  // console.log("userId :>> ", id);
  // console.log("data :>> ", user);
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
    setDate(data);
    console.log("formData :>> ", formData);
    dispatchCountListensByUser(formData)
      .unwrap()
      .then((responseData) => {
        setResponseData(responseData);
      })
      .catch(
        (error) =>
          // console.log(error.data.message)
          error?.data?.message && alert(error.data.message)
      );
  };
  const currentDate = new Date()
    .toLocaleDateString("en-GB")
    .split("/")
    .reverse()
    .join("-");
  const componentRef = useRef();

  return (
    <>
      <TabNavigation pathtext={false} />
      <ReportWrapper>
        <div>
          <Title>
            Звіт по користувачу з № договору: {user?.contractNumber}
          </Title>

          <ReportForm onSubmit={handleSubmit(onFormSubmit)}>
            {/* Звіт */}
            <FormField>
              <ReportFormField>
                <ReportFormLabel>З</ReportFormLabel>
                <ReportFormInput
                  type="date"
                  placeholder="дата"
                  // aria-describedby="dateOfStartTooltip"
                  // className={`${errors.dateOfStart ? "invalid" : ""}${
                  //   !errors.dateOfStart && dirtyFields.dateOfStart ? "valid" : ""
                  // }`}
                  {...register("dateOfStart")}
                />
              </ReportFormField>
              <ReportFormField>
                <ReportFormLabel>по: </ReportFormLabel>
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
            </FormField>
            <Button
              type="submit"
              padding="8px"
              text="Cформувати"
              disabled={
                !isValid || (dirtyFields.dateOfEnd && errors.dateOfStart)
              }
              showIcon={false}
              marginleft={"auto"}
            />
          </ReportForm>
        </div>
        <ReporTabletWrapper>
          {responseData && <ButtonPrint targetComponent={componentRef} />}
          {responseData && (
            <ReportPrint
              ref={componentRef}
              data={responseData}
              date={date}
              user={user}
            />

            // <ReportUserTable
            //   data={responseData}
            //   date={date}
            //   user={user}
            //   ref={componentRef}
            // />
          )}
        </ReporTabletWrapper>
      </ReportWrapper>
    </>
  );
};

export default ReportUser;
