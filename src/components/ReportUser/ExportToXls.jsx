import * as FileSaver from "file-saver";
import * as XLSX from "xlsx-js-style";
import { Button } from "../Button/Button";
import symbol from "../../assets/symbol.svg";
import { formatDateFromString } from "../../helpers/helpers";
import { format } from "date-fns";
import { uk } from "date-fns/locale";

export const ExportToExcel = ({ data, fileName, user, date }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  //подсчет суммі прослушиваний из данных data - используется при заполнении таблицы
  const calculateTotalListens = (listens) => {
    return listens.reduce((acc, cur) => acc + cur.countOfListenes, 0);
  };

  // дата складання отчета
  const formatDateFns = format(new Date(), "dd MMMM yyyy", { locale: uk });

  //дата для именни файла 20220416_2240 = 16 апреля 22 года в 22:40
  const formatDateFileName = format(new Date(), "yyyyMMdd_HHmm");

  const fileNameFormat = `${fileName}_${formatDateFileName}`;

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

    // назначаем стили к заголовку
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
    //применяем стили к аголовкам колонок
    for (let r = range.s.r; r <= range.e.r; ++r) {
      for (let c = range.s.c; c <= range.e.c; ++c) {
        const cellAddress = XLSX.utils.encode_cell({ r, c });
        ws[cellAddress].s = headerStyle;
      }
    }

    // Вставляем шапку построчно
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
          ? `період з ${formatDateFromString(
              date.dateOfStart
            )} p. по ${formatDateFromString(date.dateOfEnd)} p.`
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
      ["", "", "", "", "", `${formatDateFns}`],
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
    //стили для последнец строки футера
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
      type="button"
      showIcon={true}
      icon={`${symbol}#icon-save`}
      onClick={() => exportToCSV(data, fileNameFormat)}
      border={`none`}
      background={`none`}
      marginleft={`0px`}
      marginright={`0px`}
      margintop={`20px`}
      ariaLabel={`export`}
      svgmarginright={`0px`}
    ></Button>
  );
};
