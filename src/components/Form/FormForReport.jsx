import React, { useState, useRef } from "react";

import {
  ReportForm,
  ReportFormField,
  ReportFormLabel,
  ReportFormInput,
  FormField,
  ReportFormInputRadio,
  TitleText,
} from "../AdminComponents/ReportUser/ReportUser.styled";

import { Button } from "../Button/Button";
const ReportFormDataTemplate = ({
  user,
  handleSubmit,
  register,
  errors,
  dirtyFields,
  isValid,

  onSelectedOptionChange,
  titleText,
}) => {
  const [selectedOption, setSelectedOption] = useState("date"); // По умолчанию выбрана дата

  const handleOptionChange = (event) => {
    const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);
    onSelectedOptionChange(newSelectedOption);
  };
  const handleDateInputChange = () => {
    setSelectedOption("date");
    onSelectedOptionChange("date");
  };
  const handleQuaterInputChange = () => {
    setSelectedOption("quarter");
    onSelectedOptionChange("quarter");
  };
  const currentYear = new Date().getFullYear();

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
    // </ReportFormData>
  );
};

export default ReportFormDataTemplate;
