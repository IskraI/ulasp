import React, { useState, useRef } from "react";

import { getQuarterRange } from "../../../helpers/helpers";
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
  ReportFormInputRadio,
  ReportFormData,
} from "./ReportUser.styled";
import { useForm } from "react-hook-form";
import { useCountListensByUserByIdMutation } from "../../../redux/dataUsersSlice";
import { Button } from "../../Button/Button";
const DateFormForReport = ({ user }) => {
  const [date, setDate] = useState({});
  const [responseData, setResponseData] = useState();
  // const { data: user, error, isLoading } = useGetUserByIdQuery(id);

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

  const [selectedOption, setSelectedOption] = useState("date"); // По умолчанию выбрана дата
  const [data, setFormData] = useState({
    dateOfStart: "",
    dateOfEnd: "",
    quarterDate: "",
    quarterYearDate: "",
  });

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setFormData({
      dateOfStart: "",
      dateOfEnd: "",
      quarterDate: "",
      quarterYearDate: "",
    });
  };
  const handleDateInputChange = () => {
    setSelectedOption("date");
  };
  const handleQuaterInputChange = () => {
    setSelectedOption("quarter");
  };

  const onFormSubmit = (data) => {
    console.log("data :>> ", data);
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

  const currentYear = new Date().getFullYear();

  return (
    <ReportFormData>
      <Title>{`Звіт`}</Title>

      <ReportForm onSubmit={handleSubmit(onFormSubmit)}>
        <FormField>
          <ReportFormInputRadio
            type="radio"
            id="date"
            name="dateOption"
            value="date"
            checked={selectedOption === "date"}
            onChange={handleOptionChange}
          />
          <label className="radio-container" htmlFor="date"></label>
          <ReportFormField>
            <ReportFormLabel>З</ReportFormLabel>
            <ReportFormInput
              type="date"
              name="date"
              placeholder="дата"
              // aria-describedby="dateOfStartTooltip"
              // className={`${errors.dateOfStart ? "invalid" : ""}${
              //   !errors.dateOfStart && dirtyFields.dateOfStart ? "valid" : ""
              // }`}
              {...register("dateOfStart")}
              onChange={handleDateInputChange}
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
              onChange={handleDateInputChange}
            />
          </ReportFormField>
        </FormField>
        <FormField>
          <ReportFormInputRadio
            type="radio"
            id="quarter"
            name="dateOption"
            value="quarter"
            checked={selectedOption === "quarter"}
            onChange={handleOptionChange}
          />
          <label className="radio-container" htmlFor="quarter"></label>
          <ReportFormField>
            <ReportFormLabel>За </ReportFormLabel>
            <ReportFormInput
              type="number"
              min="1"
              max="4"
              name="quater"
              placeholder="кв"
              width={"60px"}
              // aria-describedby="dateOfStartTooltip"
              // className={`${errors.dateOfStart ? "invalid" : ""}${
              //   !errors.dateOfStart && dirtyFields.dateOfStart ? "valid" : ""
              // }`}
              {...register("quarterDate")}
              onChange={handleQuaterInputChange}
            />
            <ReportFormLabel> квартал</ReportFormLabel>
          </ReportFormField>
          <ReportFormField>
            <ReportFormInput
              type="number"
              min="2023"
              max={currentYear}
              placeholder="2023"
              width={"100px"}
              defaultValue={currentYear}
              // aria-describedby="dateOfStartTooltip"
              // className={`${errors.dateOfStart ? "invalid" : ""}${
              //   !errors.dateOfStart && dirtyFields.dateOfStart ? "valid" : ""
              // }`}
              {...register("quarterYearDate")}
              onChange={handleQuaterInputChange}
            />{" "}
            <ReportFormLabel> рік </ReportFormLabel>
          </ReportFormField>
        </FormField>
        <Button
          type="submit"
          padding="8px"
          text="Cформувати"
          disabled={!isValid || (dirtyFields.dateOfEnd && errors.dateOfStart)}
          showIcon={false}
          marginleft={"auto"}
        />
      </ReportForm>
    </ReportFormData>
  );
};

export default DateFormForReport;
