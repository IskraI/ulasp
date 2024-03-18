const RowsAddTrackFromDB = () => {
  const RowsTitle = [
    {
      title: "",
      type: "button",
      titleSize: "1%",
      showData: false,
    },
    {
      title: "",
      type: "button",
      titleSize: "1%",
      showData: false,
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
      titleSize: "0%",
      showData: false,
    },
    {
      title: "Жанр",
      type: "text",
      titleSize: "0%",
      showData: false,
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
      showData: false,
    },
    {
      title: "",
      type: "button",
      titleSize: "5%",
      showData: true,
    },
  ];

  return RowsTitle;
};

export default RowsAddTrackFromDB;
