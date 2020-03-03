// Human readable duration format
// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

// 486 => 566

function formatDuration(seconds) {
  if (seconds == 0) return "now";

  let y = ~~(seconds / (3600 * 24 * 365)),
    d = ~~((seconds % (3600 * 24 * 365)) / 86400),
    h = ~~((seconds % (3600 * 24)) / 3600),
    m = ~~((seconds % 3600) / 60),
    s = seconds % 60;

  function readabler(el, str) {
    if (el == 0) return "";
    else if (el == 1) return `${el} ${str}`;
    else return `${el} ${str}s`;
  }

  let arr = [
    readabler(y, "year"),
    readabler(d, "day"),
    readabler(h, "hour"),
    readabler(m, "minute"),
    readabler(s, "second")
  ].filter(a => a != false);

  if (arr[arr.length - 2]) {
    arr[arr.length - 2] = arr[arr.length - 2] + " and " + arr[arr.length - 1];
    arr.pop();
  }
  return arr.join(", ");
}
