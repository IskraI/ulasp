import React, { forwardRef } from "react";
import { RegisterInputButtonDate } from "../UserCreateForm.styled";

const CustomInputDate = forwardRef(({ value, onClick }, ref) => (
  <RegisterInputButtonDate type="button" onClick={onClick} ref={ref}>
    {value}
  </RegisterInputButtonDate>
));

CustomInputDate.displayName = "CustomInputDate";

export default CustomInputDate;
