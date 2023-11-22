import { useRef, useState } from "react";

import { InputWrapper, LabelAdd } from "./FileUpload.styled";

const FileUpload = ({
  selectedImage,
  setSelectedImage,
  accept,
  children,
  change,
  saveChanges,
}) => {
  const ref = useRef();

  console.log(ref);

  return (
    // <InputWrapper>
    //   <input
    //     type="file"
    //     accept={accept}
    //     style={{ display: "none" }}
    //     ref={ref}
    //     onChange={change}
    //   />

    //   {children}
    // </InputWrapper>
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

export default FileUpload;
