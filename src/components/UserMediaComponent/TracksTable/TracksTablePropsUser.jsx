import { useRef, useState, useId, useEffect } from "react";

// export const tracksTableProps = (showTitle, marginTopWrapper) => {
//   return [
//     { display: showTitle ? "block" : "none" },
//     { marginTop: marginTopWrapper ? `${marginTopWrapper}` : "auto" },
//   ];
// };

export const Rows = () => {
  const id = useId();
  const BaseInputRef = useRef(null);
  const [checkedMainCheckBox, setCheckedMainCheckBox] = useState(false);

  // console.log(checkedMainCheckBox);
  console.log(BaseInputRef);

  const RowsTitle = [
    {
      title: (
        <input
          key={id}
          type="checkbox"
          id="mainInput"
          ref={BaseInputRef}
          style={{ width: "24px", height: "24px", marginRight: "24px" }}
          onClick={() => {
            if (BaseInputRef.current.checked) {
              setCheckedMainCheckBox(true);
            } else {
              setCheckedMainCheckBox(false);
            }
          }}
        />
      ),
      type: "checkbox",
      titleSize: "2%",
      showData: true,
    },

    {
      title: "",
      type: "button",
      titleSize: "2%",
      showData: true,
    },
    {
      title: "",
      type: "image",
      titleSize: "10%",
      showData: true,
    },
    {
      title: "Назва пісні",
      type: "text",
      titleSize: "20%",
      showData: true,
    },
    {
      title: "Виконавець",
      type: "text",
      titleSize: "15%",
      showData: true,
    },
    {
      title: "Тривалість",
      type: "text",
      titleSize: "12%",
      showData: true,
    },
    {
      title: "Жанр",
      type: "text",
      titleSize: "10%",
      showData: true,
    },
    {
      title: "Плейлист",
      type: "text",
      titleSize: "15%",
      showData: true,
    },

    {
      title: "",
      type: "button",
      titleSize: "5%",
      showData: true,
    },
  ];

  return { RowsTitle, checkedMainCheckBox };
};
