export const tracksTableProps = (showTitle, marginTopWrapper) => {
  return [
    { display: showTitle ? "block" : "none" },
    { marginTop: marginTopWrapper ? `${marginTopWrapper}` : "auto" },
  ];
};



  // const tracksTableProps = [
  //   {
  //     display: showTitle ? "block" : "none",
  //   },
  //   {
  //     marginTop: marginTopWrapper ? `${marginTopWrapper}` : "auto",
  //   },
  // ];