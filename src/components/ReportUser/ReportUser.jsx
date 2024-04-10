import { useLocation } from "react-router-dom";
import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import {
  ErrorText,
  Title,
  ReportWrapper,
  ReporTabletWrapper,
  ReportFormData,
} from "./ReportUser.styled";
import TabNavigation from "../TabNavigation/TabNavigation";
import { useForm } from "react-hook-form";
import { ButtonPrint } from "../AdminComponents/ButtonPrint/ButtonPrint";
import {
  useCountListensByUserByIdMutation,
  useGetUserByIdQuery,
} from "../../redux/dataUsersSlice";
import { useParams } from "react-router-dom";
import ReportFormDataTemplate from "../ReportForm/FormForReport";
import ReportUserTable from "./ReportUserTable";
import { getQuarterRange } from "../../helpers/helpers";

const ReportUser = () => {
  const [responseData, setResponseData] = useState();
  const [date, setDate] = useState({});
  const { id } = useParams();
  const { data: user, error, isLoading } = useGetUserByIdQuery(id);
  const [selectedOption, setSelectedOption] = useState("date");

  console.log("зашли в репорт :>> ");

  const handleSelectedOptionChange = (newSelectedOption) => {
    setSelectedOption(newSelectedOption); // обновляем selectedOption внутри ReportUser
  };

  const [
    dispatchCountListensByUser,
    { isLoading: isLoadingCountListensByUser },
  ] = useCountListensByUserByIdMutation();

  const {
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
    // defaultValues: { name: '', email: '', password: '' },
  });

  const onFormSubmit = (data) => {
    let formData;

    if (selectedOption === "date") {
      formData = {
        dateOfStart: data.dateOfStart,
        dateOfEnd: data.dateOfEnd,
        userId: id,
      };

      setDate({ ...data, quarterDate: "", quarterYearDate: "" });
    } else {
      const { formattedStartDate, formattedEndDate } = getQuarterRange(
        parseInt(data.quarterDate),
        parseInt(data.quarterYearDate)
      );
      setDate({ ...data, dateOfStart: "", dateOfEnd: "" });
      formData = {
        dateOfStart: formattedStartDate,
        dateOfEnd: formattedEndDate,
        userId: id,
      };
    }

    dispatchCountListensByUser(formData)
      .unwrap()
      .then((responseData) => {
        setResponseData(responseData);
      })
      .catch((error) => error?.data?.message && alert(error.data.message));
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
        <ReportFormData>
          <Title>
            {`Звіт по користувачу з № договору: ${
              user?.contractNumberDoc
                ? user.contractNumberDoc
                : user.contractNumber
            }`}
          </Title>
          <ReportFormDataTemplate
            handleSubmit={handleSubmit(onFormSubmit)}
            register={register}
            errors={errors}
            dirtyFields={dirtyFields}
            isValid={isValid}
            getValues={getValues}
            onSelectedOptionChange={handleSelectedOptionChange}
            control={control}
          />
        </ReportFormData>
        <ReporTabletWrapper>
          {responseData?.length === 0 ? (
            <ErrorText>
              Bикористаних Об’єктів суміжних прав та Об’єктів авторского права
              за обраний період немає
            </ErrorText>
          ) : (
            <>
              {responseData && <ButtonPrint targetComponent={componentRef} />}
              {responseData && (
                <ReportUserTable
                  data={responseData}
                  date={date}
                  user={user}
                  ref={componentRef}
                />
              )}
            </>
          )}
        </ReporTabletWrapper>
      </ReportWrapper>
    </>
  );
};

export default ReportUser;
