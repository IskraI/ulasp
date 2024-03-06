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
    Header: (
      <span>
        Назва
        <br />
        використаного твору
      </span>
    ),
    accessor: "trackName",
  },
  {
    Header: (
      <span>
        Виконавець
        <br />
        (П.І.Б. виконавця,
        <br />
        співвиконавців <br />
        або назва колективу)
      </span>
    ),
    accessor: "artist",
  },
  {
    id: "music",
    Header: (
      <>
        <span>Автор</span>
        <br />
        <span>музики</span>
      </>
    ),
    accessor: "",
  },
  {
    id: "author",
    Header: (
      <>
        <span>Автор</span>
        <br />
        <span>твору</span>
      </>
    ),
    accessor: "",
  },
  {
    id: "count",
    Header: (
      <>
        <span>Кількість</span>
        <br />
        <span>
          використань <br />
          твору
        </span>
      </>
    ),

    accessor: (row) => {
      const sum = row.listens.reduce(
        (acc, cur) => acc + cur.countOfListenes,
        0
      );
      return sum;
    },
  },
];

const ReportUserTable = ({ data }) => {
  // console.log("COLUMNS :>> ", columns);
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
