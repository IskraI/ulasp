import defaultTrackCover from '../assets/55x36_trackCover_default.jpg';
import defaultPlayListCover from '../assets/60x40_playlist_default.jpg';

import { startOfQuarter, endOfQuarter, format } from 'date-fns';
import { uk } from 'date-fns/locale';

export function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}

export const sToStr = (sec) => {
  sec = Math.round(sec);
  let m = Math.trunc(sec / 60) + '';
  sec = (sec % 60) + '';
  return m.padStart(2, 0) + ':' + sec.padStart(2, 0);
};

export function generateLatinTranslation(str) {
  const fileName = str.replace(/[\s]+/gi, '-').replace(/(\w+)/, '');
  const filenameFinall = translit(fileName).toLocaleLowerCase();
  return filenameFinall;
}

function translit(str) {
  const ru =
    'А-а-Б-б-В-в-Ґ-ґ-Г-г-Д-д-Е-е-Ё-ё-Є-є-Ж-ж-З-з-И-и-І-і-Ї-ї-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я'.split(
      '-'
    );
  const en =
    "A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya".split(
      '-'
    );
  let res = '';
  for (let i = 0, l = str.length; i < l; i++) {
    const s = str.charAt(i);
    const n = ru.indexOf(s);
    if (n >= 0) {
      res += en[n];
    } else {
      res += s;
    }
  }
  return res;
}

export const formDataFunction = (
  data,
  selectedPlaylistAvatar,
  valueMediaLibrary
) => {
  const formData = new FormData();

  formData.append('playListName', data.playListName),
    formData.append('type', data.type),
    formData.append('picsURL', selectedPlaylistAvatar);
  formData.append('valueMediaLibrary', valueMediaLibrary);

  return formData;
};

export const compareArray = function (a1, a2) {
  if (a1 === undefined && a2 === undefined) {
    console.warn('No arguments were passed to CompareArray function call');
    return;
  }
  return a1.length == a2.length && a1.every((v, i) => v === a2[i]);
};

export function findPage(index, itemsPerPage) {
  return Math.ceil((index + 1) / itemsPerPage);
}
export const isEmptyMediaUpdateData = (firstStr, secondStr, isError, image) => {
  if (isError) {
    // console.log("Должны быть тут");
    return true;
  }
  if (firstStr === '' || (firstStr === secondStr && image === null)) {
    // console.log("Кнопка выключена");
    return true;
  }
  if (firstStr === '' && firstStr === secondStr && image !== null) {
    // console.log("Кнопка включена");
    return false;
  }

  // console.log("Кнопка включена");
  return false;
};
export function getQuarterRange(quarter, year) {
  const start = startOfQuarter(new Date(year, (quarter - 1) * 3));
  const end = endOfQuarter(new Date(year, (quarter - 1) * 3));

  return {
    formattedStartDate: format(start, 'yyyy-MM-dd'),
    formattedEndDate: format(end, 'yyyy-MM-dd')
  };
}

export function formatDateFromString(dateString) {
  return format(new Date(dateString), 'dd MMMM yyyy', {
    locale: uk
  });
}

export const currentDate = () => {
  return format(new Date(), 'yyyy-MM-dd');
};

export const ImgTrackError = (e) => (e.currentTarget.src = defaultTrackCover);

export const playlistCoverError = (e) => (e.currentTarget.src = defaultPlayListCover);
