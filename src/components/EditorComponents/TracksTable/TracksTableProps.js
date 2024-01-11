export const tracksTableProps = (showTitle, marginTopWrapper) => {
  return [
    { display: showTitle ? "block" : "none" },
    { marginTop: marginTopWrapper ? `${marginTopWrapper}` : "auto" },
  ];
};
