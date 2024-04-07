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
  TableReportThead,
  ReportFooter,
  ReportFooterDesc,
  ReportFooterBlockDesc,
  ReportFooterComment,
  Underline,
  UnderlinedText,
  LineAndYearContainer,
  UnderlinedTextContainer,
  YearText,
  UnderlineDate,
  NoteText,
  FlexChild,
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
const getPageMargins = () => {
  return `@page { margin: 10mm 5mm 10mm 5mm !important;
 }`;
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

  return (
    <TableWrapper ref={ref}>
      <style>{getPageMargins()}</style>
      <ReportTitle>ФОРМА ЗВIТУ</ReportTitle>
      <ReportTitle>{`ТОВ/ФОП ${
        user.firstName || user.fatherName || user.lastName
          ? `${user.firstName} ${user.fatherName} ${user.lastName}`
          : user.name
      } /договір №${
        user.contractNumberDoc ? user.contractNumberDoc : user.contractNumber
      }/`}</ReportTitle>

      <ReportTitleDesc>
        про використані Об’єкти суміжних прав та Об’єкти авторского права за{" "}
        {date.dateOfStart !== "" && date.dateOfEnd !== "" ? (
          <>
            період <br />з {formatDate(date.dateOfStart)} p. по{" "}
            {formatDate(date.dateOfEnd)} p.
          </>
        ) : (
          ` ${date.quarterDate} квартал  ${date.quarterYearDate} року`
        )}
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
            використаними музичними творами, але не більше ніж на 10% загального
            часу використання музичних творів.
          </ReportFooterComment>
        </div>

        <ReportFooterBlockDesc>
          <FlexChild alignSelf="flex-end">
            <ReportFooterDesc>
              <UnderlinedText>
                {" "}
                <Underline />
                (підпис уповноваженої особи Користувача)
              </UnderlinedText>
            </ReportFooterDesc>
          </FlexChild>
          <FlexChild alignSelf="flex-end">
            <ReportFooterDesc>
              <UnderlinedText>
                {" "}
                <Underline />
                (посада та П.І.Б. уповноваженої особи Користувача){" "}
              </UnderlinedText>
            </ReportFooterDesc>
          </FlexChild>
          {/* <ReportFooterDesc> */}
          <UnderlinedTextContainer>
            <LineAndYearContainer>
              <YearText>{`"\u00A0\u00A0\u00A0\u00A0"`}</YearText>
              <UnderlineDate />
              <YearText>{currentYear} p.</YearText>
            </LineAndYearContainer>
            <NoteText>(дата складання звіту )</NoteText>
          </UnderlinedTextContainer>
          {/* </ReportFooterDesc> */}
        </ReportFooterBlockDesc>
      </ReportFooter>
    </TableWrapper>
  );
});

ReportUserTable.displayName = "ReportUserTable";
export default ReportUserTable;
