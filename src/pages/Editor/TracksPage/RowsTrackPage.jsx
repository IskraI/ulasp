import CustomCheckBox from "../../../components/CustomCheckBox/CustomCheckBox";

const RowsTrackPage = (checkedAllFn, checkedMainCheckBox) => {
  const RowsTitle = [
    {
      title: (
        <CustomCheckBox
          checkedAll={checkedAllFn}
          isCheckedAll={checkedMainCheckBox}
        />
      ),

      type: "checkbox",
      titleSize: "3%",
      showData: true,
    },

    {
      title: "",
      type: "button",
      titleSize: "1%",
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
      titleSize: "0%",
      showData: false,
    },

    {
      title: "",
      type: "button",
      titleSize: "5%",
      showData: true,
    },
    {
      title: "",
      type: "button",
      titleSize: "1%",
      showData: false,
    },
  ];

  return RowsTitle;
};

export default RowsTrackPage;
