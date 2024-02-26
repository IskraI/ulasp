import { useTable } from "react-table";
import { COLUMNS } from "./Colums";
import {
  TableWrapper,
  TableReport,
  TableReportRow,
} from "./ReportUserTable.styled";

// export const columns = [
//   {
//     Header: "№ п/п",
//     accessor: (_, rowIndex) => rowIndex + 1,
//   },
//   {
//     Header: "trackName",
//     accessor: "trackId.trackName",
//   },
//   {
//     Header: "listens",
//     accessor: ({ listens }) => {
//       const sum = listens.reduce((acc, cur) => acc + cur.countOfListenes, 0);
//       return sum;
//     },
//   },
// ];

const ReportUserTable = ({ data }) => {
  const tableInstance = useTable({
    COLUMNS,
    data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <TableWrapper>
      <TableReport {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, ind) => (
            <tr key={ind} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, ind) => (
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
                    <td key={cellIndex} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
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
