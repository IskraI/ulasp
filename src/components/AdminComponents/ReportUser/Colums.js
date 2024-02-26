export const COLUMNS = [
  {
    Header: "Id",
    accessor: "trackId._id",
  },
  {
    Header: "Назва використаного твору",
    accessor: "trackId.trackName",
  },
  {
    Header: "Виконавець (П.І.Б. виконавця, співвиконавців або назва колективу",
    accessor: "trackId.artist",
  },
  {
    Header: "listens",
    accessor: "listens.countOfListenes",
  },
  {
    Header: "date",
    accessor: "listens.date",
  },
];
