import React, { useState } from "react";
import { useWatch } from "react-hook-form";

import {
  ReportForm,
  ReportFormField,
  ReportFormLabel,
  ReportFormInput,
  FormField,
  ReportFormInputRadio,
  TitleText,
  ReportFormButton,
} from "./ReportForm.styled";

import { Button } from "../Button/Button";
const ReportFormDataTemplate = ({
  user,
  handleSubmit,
  register,
  errors,
  dirtyFields,
  isValid,
  setError,
  onSelectedOptionChange,
  titleText,
  control,
  getValues,
  reset,
}) => {
  console.log("errors :>> ", errors);
  const [selectedOption, setSelectedOption] = useState("date"); // По умолчанию выбрана дата

  const isDateOfStart = useWatch({
    control,
    name: "dateOfStart",
    defaultValue: "",
  }).trim();

  const isDateOfEnd = useWatch({
    control,
    name: "dateOfEnd",
    defaultValue: "",
  }).trim();

  const isQuarterDate = useWatch({
    control,
    name: "quarterDate",
    defaultValue: "",
  }).trim();

  console.log("isDateOfStart :>> ", isDateOfStart);
  console.log("isDateOfStart :>> ", isDateOfEnd);
  const handleOptionChange = (event) => {
    //переключение радиобаттон - говорим  форме какие значения брать
    const newSelectedOption = event.target.value;

    setSelectedOption(newSelectedOption);
    onSelectedOptionChange(newSelectedOption);
  };

  const resetForm = () => {
    reset();
  };

  //если кликаем на поле дата - то радио баттон переходит на дата
  const handleDateInputChange = () => {
    setSelectedOption("date");
    onSelectedOptionChange("date");
    // Очистити помилки для поля кварталу
    // setError("dateOfStart", { type: "", message: "" });
    // setError("dateOfEnd", { type: "", message: "" });
  };
  //если кликаем на квартал - то радиобаттон на квартал
  const handleQuaterInputChange = () => {
    setSelectedOption("quarter");
    onSelectedOptionChange("quarter");
    // Очистити помилки для поля дати
    // setError("quarterDate", {});
    // setError("quarterYearDate", {});
  };

  const currentYear = new Date().getFullYear();
  console.log("selectedOption :>> ", selectedOption);
  return (
    // <ReportFormData>
    <ReportForm onSubmit={handleSubmit}>
      {titleText && <TitleText>{titleText}:</TitleText>}
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
            aria-describedby="dateOfStartTooltip"
            max={new Date().toISOString().split("T")[0]}
            // className={`${errors.dateOfStart ? "invalid" : ""}${
            //   !errors.dateOfStart && dirtyFields.dateOfStart ? "valid" : ""
            // }`}
            {...register("dateOfStart", {
              required: selectedOption === "date",
            })}
            onClick={handleDateInputChange}
          />
        </ReportFormField>
        <ReportFormField>
          <ReportFormLabel>по: </ReportFormLabel>
          <ReportFormInput
            type="date"
            name="date"
            placeholder="дата"
            aria-describedby="dateOfEndTooltip"
            max={new Date().toISOString().split("T")[0]}
            // className={`${errors.dateOfEnd ? "invalid" : ""}${
            //   !errors.dateOfEnd && dirtyFields.dateOfEnd ? "valid" : ""
            // }`}
            {...register("dateOfEnd", {
              required: selectedOption === "date",
            })}
            onClick={handleDateInputChange}
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
            aria-describedby="quarterDateTooltip"
            className={`${errors.quarterDate ? "invalid" : ""}${
              !errors.quarterDate ? "valid" : ""
            }`}
            {...register("quarterDate", {
              required: selectedOption === "quater",
              pattern: {
                value: /^[1-4]$/,
                message: "Значення повинно бути від 1 до 4",
              },
            })}
            onClick={handleQuaterInputChange}
          />
          <ReportFormLabel> квартал</ReportFormLabel>
        </ReportFormField>
        <ReportFormField>
          <ReportFormInput
            type="number"
            min="2023"
            max={currentYear}
            width={"100px"}
            defaultValue={currentYear}
            aria-describedby="quarterYearDateTooltip"
            className={`${errors.quarterYearDate ? "invalid" : ""}${
              !errors.quarterYearDate ? "valid" : ""
            }`}
            {...register("quarterYearDate", {
              pattern: {
                value: /^(2023|202[4-9]|[2-9]\d{3})$/, // Шаблон для значений, начиная с 2023 и выше
                message: "Год должен быть 2023 или больше",
              },
            })}
            onClick={handleQuaterInputChange}
          />
          <ReportFormLabel> рік </ReportFormLabel>
        </ReportFormField>
      </FormField>
      <ReportFormButton>
        {/* <Button
          type="button"
          padding="8px"
          text="Очистити"
          disabled={!isDateOfStart || !isDateOfEnd}
          showIcon={false}
          // marginleft={"auto"}
          onClick={resetForm}
        /> */}
        <Button
          type="submit"
          padding="8px"
          text="Cформувати"
          disabled={
            selectedOption === "date"
              ? !isDateOfStart || !isDateOfEnd
              : !isQuarterDate
          }
          // disabled={isValidDatePeriod}
          showIcon={false}
          // marginleft={"auto"}
        />
      </ReportFormButton>
    </ReportForm>
    // </ReportFormData>
  );
};

export default ReportFormDataTemplate;
