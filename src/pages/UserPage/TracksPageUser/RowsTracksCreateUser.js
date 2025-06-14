const rowsTracksCreateUser = () => {
  const RowsTitle = [
    {
      title: "",
      type: "checkbox",
      titleSize: "3%",
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
      titleSize: "0%",
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

export default rowsTracksCreateUser;
