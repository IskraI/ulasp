export function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  console.log(n);
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
  let m = Math.trunc(sec / 60) + "";
  sec = (sec % 60) + "";
  return m.padStart(2, 0) + ":" + sec.padStart(2, 0);
};
