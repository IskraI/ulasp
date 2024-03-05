export const COLUMNS = [
  {
    Header: "№ п/п",
    accessor: (_, rowIndex) => rowIndex + 1,
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
    accessor: ({ listens }) => {
      const sum = listens.reduce((acc, cur) => acc + cur.countOfListenes, 0);
      return sum;
    },
  },
];
