export const COLUMNS = [
  {
    Header: "Id",
    accessor: "trackId._id",
  },
  {
    Header: "trackName",
    accessor: "trackId.trackName",
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
