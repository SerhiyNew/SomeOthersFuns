// Human Readable Time
// https://www.codewars.com/kata/52685f7382004e774f0001f7

// 364 => 372

function humanReadable(sec) {
  let h = "00",
    m = "00",
    s = "00";
  if (sec => 3600) {
    h = ~~(sec / 3600);
    h = h > 10 ? h : "0" + h;
  }
  if (sec => 60) {
    m = ~~((sec % 3600) / 60);
    m = m > 10 ? m : "0" + m;
  }
  if (sec > 0) {
    s = sec % 60;
    s = s > 10 ? s : "0" + s;
  }
  return `${h}:${m}:${s}`;
}
