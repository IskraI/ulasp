// import React, { useState } from "react";
// import ReactExport from "react-data-export";
// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

// export const ExportXls = ({ data, date, user }) => {
//   console.log("data :>> ", data);

//   return <div></div>;
// };

import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx-js-style";

export const ExportToExcel = ({ data, fileName, user, date }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const calculateTotalListens = (listens) => {
    return listens.reduce((acc, cur) => acc + cur.countOfListenes, 0);
  };

  const exportToCSV = (data, fileName) => {
    const dataRows = data.map((item, index) => ({
      "№ п/п": index + 1,
      "Назва використаного твору": item.trackName,
      "Виконавець (П.І.Б. виконавця,співвиконавців або назва колективу)":
        item.artist,
      "Автор музыки": "", // Пустая колонка с названием "Автор музыки"
      "Автор твору": "", // Пустая колонка с названием "Автор твору"
      "Кількість використань твору": calculateTotalListens(item.listens),
    }));

    const ws = XLSX.utils.json_to_sheet(dataRows, {
      header: [
        "№ п/п",
        "Назва використаного твору",
        "Виконавець (П.І.Б. виконавця, співвиконавців або назва колективу)",
        "Автор музики",
        "Автор твору",
        "Кількість використань твору",
      ],
      origin: { r: 4, c: 0 }, // Начать заполнение с ячейки A4
    });
    // Применяем стили к заголовку
    const headerStyle = {
      font: { bold: true },
      alignment: { horizontal: "center", wrapText: true, vertical: "center" },
      // Включение переноса текста
      border: {
        top: {
          style: "thin",
          color: { rgb: "000000" },
        },

        bottom: { style: "thin", color: { rgb: "000000" } },
        left: { style: "thin", color: { rgb: "000000" } },
        right: { style: "thin", color: { rgb: "000000" } },
      },
      fill: { fgColor: { rgb: "E9E9E9" } },
    };
    const range = { s: { r: 4, c: 0 }, e: { r: 4, c: 5 } }; // Диапазон от A4 до F4

    for (let r = range.s.r; r <= range.e.r; ++r) {
      for (let c = range.s.c; c <= range.e.c; ++c) {
        const cellAddress = XLSX.utils.encode_cell({ r, c });
        ws[cellAddress].s = headerStyle;
      }
    }

    // Вставляем шапку
    ws.A1 = {
      t: "s",
      v: "ФОРМА ЗВIТУ",
    };

    ws.A2 = {
      t: "s",
      v: `ТОВ/ФОП ${
        user.firstName || user.fatherName || user.lastName
          ? `${user.firstName} ${user.fatherName} ${user.lastName}`
          : user.name
      } /договір №${
        user.contractNumberDoc ? user.contractNumberDoc : user.contractNumber
      }/`,
    };

    ws.A3 = {
      t: "s",
      v:
        "про використані Об’єкти суміжних прав та Об’єкти авторського права за " +
        (date.dateOfStart !== "" && date.dateOfEnd !== ""
          ? `період з ${formatDate(date.dateOfStart)} p. по ${formatDate(
              date.dateOfEnd
            )} p.`
          : `${date.quarterDate} квартал ${date.quarterYearDate} року`),
    };

    ws["!merges"] = [
      {
        s: { r: 0, c: 0 },
        e: { r: 0, c: 5 },
      },
      {
        s: { r: 1, c: 0 },
        e: { r: 1, c: 5 },
      },
      {
        s: { r: 2, c: 0 },
        e: { r: 2, c: 5 },
      },
    ];

    ws["A1"].s = {
      font: { sz: 14, bold: true }, // Размер шрифта
      alignment: { horizontal: "center", vertical: "center" }, // Выравнивание по центру
    };
    ws["A2"].s = {
      font: { sz: 12, bold: false }, // Размер шрифта
      alignment: { horizontal: "center", vertical: "center" }, // Выравнивание по центру
    };
    ws["A3"].s = {
      font: { sz: 12, bold: false }, // Размер шрифта
      alignment: { horizontal: "center", vertical: "center", wrapText: true }, // Выравнивание по центру
    };

    ws["!cols"] = [
      { wpx: 40 }, // Ширина первой колонки
      { wpx: 120 }, // Ширина второй колонки
      { wpx: 120 }, // Ширина третьей колонки
      { wpx: 80 },
      { wpx: 80 },
      { wpx: 80 },

      // Оставшиеся колонки будут иметь ширину по умолчанию
    ];
    // ws["!rows"] = [{ hpx: 30 }, { hpx: 20 }, { hpx: 20 }];
    const footer = [
      [],
      [
        "Примітки: для іноземних авторів виконавців і творів дані вказуються мовою оригіналу;",
      ],
      [
        "Сторони погоджуються, що Звіт може не співпадати з фактично використаними музичними творами, але не",
      ],
      ["більше ніж на 10% загального часу використання музичних творів."],
      [
        "(підпис уповноваженої особи Користувача)",
        "(посада та П.І.Б. уповноваженої особи Користувача)",
        "2024-04-12",
      ],
    ];
    XLSX.utils.sheet_add_aoa(ws, footer, { origin: -1 });

    // Создаем файл Excel и сохраняем его
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const dataFile = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(dataFile, fileName + fileExtension);
  };

  return (
    <button type="button" onClick={(e) => exportToCSV(data, fileName)}>
      Export
    </button>
  );
};
