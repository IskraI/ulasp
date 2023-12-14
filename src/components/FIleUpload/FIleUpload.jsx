/* eslint-disable react/prop-types */
import { useRef } from "react";

import { InputWrapper, LabelAdd } from "./FileUpload.styled";

const FileUpload = ({ accept, children, change, saveChanges }) => {
  const ref = useRef();



  // console.log(ref);


  return (
    <InputWrapper>
      <LabelAdd htmlFor="avatar_input">+</LabelAdd>
      <input
        id="avatar_input"
        type="file"
        accept={accept}
        style={{ display: "none" }}
        ref={ref}
        onChange={change}
        onBlur={saveChanges}
      />
    
      {children}
    </InputWrapper>
  );
};
{/* <input
name="name"
type="file"
accept="image/*"
disabled={isLoading}
onChange={handleChooseIcon}
/> */}

export default FileUpload;
