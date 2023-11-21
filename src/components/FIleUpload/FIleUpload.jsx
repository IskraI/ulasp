import { useRef, useState } from "react";

const FileUpload = ({
  selectedImage,
  setSelectedImage,
  accept,
  children,
  change,
}) => {
  const ref = useRef();

  return (
    <div>
      <input
        type="file"
        accept={accept}
        style={{ display: "none" }}
        // ref={ref}
        onChange={change}
      />
      {children}
    </div>
  );
};

export default FileUpload;
