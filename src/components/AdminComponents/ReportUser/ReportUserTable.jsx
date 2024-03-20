import { useTable } from "react-table";
import React, { forwardRef } from "react";
// import { COLUMNS } from "./Colums";
import {
  TableWrapper,
  TableReport,
  TableReportRow,
  TableCell,
  ReportTitle,
  ReportTitleDesc,
  ReportHeader,
  ReportHeaderTh,
  ReportHeaderTr,
  ReportHeaderTd1,
  ReportHeaderTd2,
  TableReportThead,
  ReportFooter,
  ReportFooterDesc,
  ReportFooterBlockDesc,
  ReportFooterComment,
  Underline,
  TextWithUnderline,
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
const formatDate = (dateString) => {
  const months = [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

const ReportUserTable = forwardRef(({ data, date, user }, ref) => {
  const tableInstance = useTable({
    columns,
    data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  // const nameForTitle =
  return (
    <TableWrapper ref={ref}>
      <ReportTitle>ФОРМА ЗВIТУ</ReportTitle>
      <ReportTitle>{`ТОВ/ФОП ${
        user.firstName || user.fatherName || user.lastName
          ? `${user.firstName} ${user.fatherName} ${user.lastName}`
          : user.name
      } /договір №${user.contractNumber}/`}</ReportTitle>

      <ReportTitleDesc>
        про використані Об’єкти суміжних прав та Об’єкти авторского права за
        період з {formatDate(date.dateOfStart)} p. по{" "}
        {formatDate(date.dateOfEnd)} p.
      </ReportTitleDesc>

      {/* <ReportHeader className="header">
        <thead>
          <ReportHeaderTr>
            <ReportHeaderTh>Назва об'єкту</ReportHeaderTh>
            <ReportHeaderTd1>{user.institution}</ReportHeaderTd1>
          </ReportHeaderTr>
          <ReportHeaderTr>
            <ReportHeaderTh>Платник</ReportHeaderTh>
            <ReportHeaderTd1>
              {user.firstName || user.fatherName || user.lastName
                ? `${user.firstName} ${user.fatherName} ${user.lastName}`
                : user.name}
            </ReportHeaderTd1>
          </ReportHeaderTr>
          <ReportHeaderTr>
            <ReportHeaderTh>Договір номер</ReportHeaderTh>
            <ReportHeaderTd2> {user.contractNumber}</ReportHeaderTd2>
          </ReportHeaderTr>
          <ReportHeaderTr>
            <ReportHeaderTh>Ідентифікаційний номер (код ЄДРПОУ)</ReportHeaderTh>
            <ReportHeaderTd2>{user.contactFaceTaxCode}</ReportHeaderTd2>
          </ReportHeaderTr>
        </thead>
      </ReportHeader> */}

      <TableReport {...getTableProps()}>
        <TableReportThead>
          {headerGroups.map((headerGroup, ind) => (
            <tr key={ind} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup?.headers.map((column, ind) => (
                <TableReportRow key={ind} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableReportRow>
              ))}
            </tr>
          ))}
        </TableReportThead>
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
      <ReportFooter>
        <div>
          <ReportFooterComment>
            Примітки: для іноземних авторів виконавців і творів дані вказуються
            мовою оригіналу; <br />
            Сторони погоджуються, що Звіт може не співпадати з фактично
            використаними музичними творами, але не
            <br />
            більше ніж на 10% загального часу використання музичних творів.
          </ReportFooterComment>
        </div>
        {/* <div>
          ____________ ___________________________________________ «____»
          ___________ {currentYear} p.
        </div> */}
        <ReportFooterBlockDesc>
          <ReportFooterDesc>
            <Underline width={"70%"} left={"5%"}>
              (підпис уповноваженої особи Користувача)
            </Underline>
          </ReportFooterDesc>
          <ReportFooterDesc>
            <Underline width={"120%"} left={"-15%"}>
              (посада та П.І.Б. уповноваженої особи Користувача)
            </Underline>
          </ReportFooterDesc>

          <ReportFooterDesc>
            <Underline width={"70%"}>(дата складання звіту )</Underline>
          </ReportFooterDesc>
        </ReportFooterBlockDesc>
      </ReportFooter>
    </TableWrapper>
  );
});

ReportUserTable.displayName = "ReportUserTable";
export default ReportUserTable;
