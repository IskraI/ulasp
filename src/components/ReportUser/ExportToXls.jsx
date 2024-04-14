import * as FileSaver from "file-saver";
import * as XLSX from "xlsx-js-style";
import { Button } from "../Button/Button";
import symbol from "../../assets/symbol.svg";

export const ExportToExcel = ({ data, fileName, user, date }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const calculateTotalListens = (listens) => {
    return listens.reduce((acc, cur) => acc + cur.countOfListenes, 0);
  };
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
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = String(now.getMonth() + 1).padStart(2, "0");
  const currentDay = String(now.getDate()).padStart(2, "0");
  const currentMonthIndex = now.getMonth();
  const currentHour = String(now.getHours()).padStart(2, "0");
  const currentMinute = String(now.getMinutes()).padStart(2, "0");
  const currentSecond = String(now.getSeconds()).padStart(2, "0");
  const fileNameFormat = `${fileName}_${currentDay}${currentMonth}${currentYear}${currentHour}${currentMinute}`;

  const exportToCSV = (data, fileNameFormat) => {
    const cellStyle = {
      font: { sz: 12 }, // Устанавливаем размер шрифта
      alignment: { wrapText: true }, // Включаем автоперенос текста
      border: {
        // Устанавливаем границы
        top: { style: "thin", color: { rgb: "000000" } },
        bottom: { style: "thin", color: { rgb: "000000" } },
        left: { style: "thin", color: { rgb: "000000" } },
        right: { style: "thin", color: { rgb: "000000" } },
      },
    };

    const dataRows = data.map((item, index) => ({
      "№ п/п": index + 1,
      "Назва використаного твору": item.trackName,
      "Виконавець (П.І.Б. виконавця, співвиконавців або назва колективу)":
        item.artist,
      "Автор музики": "", // Пустая колонка с названием "Автор музыки"
      "Автор твору": "", // Пустая колонка с названием "Автор твору"
      "Кількість використань твору": calculateTotalListens(item.listens),
    }));

    const dataRowsWithStyle = dataRows.map((row) => {
      const styledRow = {};
      Object.keys(row).forEach((key) => {
        styledRow[key] = { v: row[key], s: cellStyle }; // Применяем стиль к ячейке
      });
      return styledRow;
    });

    const ws = XLSX.utils.json_to_sheet(dataRowsWithStyle, {
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
      fill: { fgColor: { rgb: "b4b7bb" } },
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
      font: { sz: 11, bold: false }, // Размер шрифта
      alignment: { horizontal: "center", vertical: "center", wrapText: true }, // Выравнивание по центру
    };

    ws["!cols"] = [
      { wpx: 36 }, // Ширина первой колонки
      { wpx: 170 }, // Ширина второй колонки
      { wpx: 160 }, // Ширина третьей колонки
      { wpx: 68 },
      { wpx: 68 },
      { wpx: 90 },
    ];

    const footerStyle = {
      font: { sz: 8, bold: true }, // размер 12 и жирный шрифт
      alignment: { horizontal: "center", vertical: "center", wrapText: true }, // автоперенос текста
    };
    const footer = [
      [""],
      [
        "Примітки: для іноземних авторів виконавців і творів дані вказуються мовою оригіналу; " +
          "Сторони погоджуються, що Звіт може не співпадати з фактично використаними музичними творами, " +
          "але не більше ніж на 10% загального часу використання музичних творів.",
      ],
      // [""],
      [
        "",
        "",
        "",
        "",
        "",
        `${currentDay} ${months[currentMonthIndex]} ${currentYear}`,
      ],
      [
        "(підпис уповноваженої особи Користувача)",
        "",

        "(посада та П.І.Б. уповноваженої особи Користувача)",
        "",
        "",
        "(дата складання звіту)",
      ],
    ];

    const footerStyled = footer.map((row) => {
      const styledRow = {};
      Object.keys(row).forEach((key) => {
        styledRow[key] = { v: row[key], s: footerStyle }; // Применяем стиль к ячейке
      });
      return styledRow;
    });

    const lastFooterRowStyles = [
      {
        font: {
          sz: 8,
          bold: false,
          // vertAlign: "superscript",
        },
        alignment: { horizontal: "centre", vertical: "top" },
        border: {
          top: {
            style: "thin",
            color: { rgb: "000000" },
          },
        },
      }, // Стиль для первой ячейки
      {
        font: { sz: 8 },
        alignment: { horizontal: "right", vertical: "top" },
        border: {
          top: {
            style: "thin",
            color: { rgb: "000000" },
          },
        },
      }, // Стиль для второй ячейки

      {
        font: { sz: 8 },
        alignment: { horizontal: "centre", vertical: "top" },
        border: {
          top: {
            style: "thin",
            color: { rgb: "000000" },
          },
        },
      }, // Стиль для 3 ячейки
      {
        font: { sz: 8, bold: false },
        alignment: { horizontal: "right", vertical: "top" },
        border: {
          top: {
            style: "thin",
            color: { rgb: "000000" },
          },
        },
      }, // Стиль для 4 ячейки
      { font: { sz: 8 } }, // Стиль для 5 ячейки
      {
        font: {
          sz: 8,
          bold: false,
        },
        // vertAlign: "superscript",

        alignment: { horizontal: "left", vertical: "top" },

        border: {
          top: {
            style: "thin",
            color: { rgb: "000000" },
          },
        },
      }, // Стиль для 6 ячейки
    ];
    const lastFooterRow = footerStyled[footerStyled.length - 1];
    Object.keys(lastFooterRow).forEach((key, index) => {
      lastFooterRow[key].s = lastFooterRowStyles[index];
    });

    const footerStyledArray = footerStyled.map((row) => Object.values(row));

    // Определение диапазона для объединения ячеек
    const startCellFooter = XLSX.utils.encode_cell({
      r: dataRowsWithStyle.length + 4 + 2,
      c: 0,
    }); // Начало объединяемой области для футера
    const endCellFooter = XLSX.utils.encode_cell({
      r: dataRowsWithStyle.length + 4 + 2,
      c: 5,
    }); // Конец объединяемой области для футера
    const cellMerges = [
      {
        s: { r: dataRowsWithStyle.length + 4 + 4, c: 0 },
        e: { r: dataRowsWithStyle.length + 4 + 4, c: 1 },
      },
      {
        s: { r: dataRowsWithStyle.length + 4 + 4, c: 2 },
        e: { r: dataRowsWithStyle.length + 4 + 4, c: 3 },
      },
    ];
    if (!ws["!rows"]) {
      ws["!rows"] = [];
    }
    ws["!rows"][2] = { hpx: 33 };
    ws["!rows"][dataRowsWithStyle.length + 4 + 2] = { hpx: 36 };
    // Объединяем ячейки для футера
    ws["!merges"] = ws["!merges"] || [];
    ws["!merges"].push({ s: startCellFooter, e: endCellFooter });
    ws["!merges"].push(...cellMerges);

    XLSX.utils.sheet_add_aoa(ws, footerStyledArray, { origin: -1 });

    // Создаем файл Excel и сохраняем его
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const dataFile = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(dataFile, fileNameFormat + fileExtension);
  };

  return (
    <Button
      // text={"Export"}
      type="button"
      showIcon={true}
      icon={`${symbol}#icon-save`}
      onClick={(e) => exportToCSV(data, fileNameFormat)}
      border={`none`}
      background={`none`}
      marginleft={`0px`}
      marginright={`0px`}
      margintop={`20px`}
      ariaLabel={`export`}
      svgmarginright={`0px`}
      // fillColor={"rgba(23, 22, 28, 1)"}
    >
      {/* <SvgStyled width="24" height="24">
        <use href={`${symbol}#icon-save`}></use>
      </SvgStyled> */}
    </Button>
  );
};
