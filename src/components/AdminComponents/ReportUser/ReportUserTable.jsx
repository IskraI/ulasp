import { useTable } from "react-table";
// import { COLUMNS } from "./Colums";
import {
  TableWrapper,
  TableReport,
  TableReportRow,
  TableCell,
} from "./ReportUserTable.styled";

export const columns = [
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
    Header: "Автор музики",
    accessor: "",
  },
  {
    Header: "Автор твору",
    accessor: "",
  },
  {
    Header: "Кількість  використань твору",
    accessor: ({ listens }) => {
      const sum = listens.reduce((acc, cur) => acc + cur.countOfListenes, 0);
      return sum;
    },
  },
];

const ReportUserTable = ({ data }) => {
  console.log("COLUMNS :>> ", columns);
  const tableInstance = useTable({
    columns,
    data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <TableWrapper>
      ЗВІТ про використані Об’єкти суміжних прав та Об’єкти авторского права за
      <TableReport {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, ind) => (
            <tr key={ind} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup?.headers.map((column, ind) => (
                <TableReportRow key={ind} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableReportRow>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);

            return (
              <tr key={rowIndex} {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => {
                  return (
                    <TableCell key={cellIndex} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </TableReport>
    </TableWrapper>
  );
};

export default ReportUserTable;
