// https://www.codewars.com/kata/human-readable-duration-format/train/javascript
// Human readable duration format
// 157 => 189

function formatDuration(n) {
  if (n == 0) return "now";
  let arr = [],
    res = "",
    obj = { year: "", day: "", hour: "", minute: "", second: "" };

  obj.second += n % 60;
  obj.minute += ~~((n % 3600) / 60);
  obj.hour += ~~((n % 86400) / 3600);
  obj.day += ~~((n % (86400 * 365)) / 86400);
  obj.year += ~~(n / (86400 * 365));

  for (key in obj) {
    if (obj[key] == 1) {
      arr.push(obj[key] + " " + key);
    } else if (obj[key] > 1) {
      arr.push(obj[key] + " " + key + "s");
    }
  }

  if (arr.length == 1) return arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    res.length > 0 ? (res += ", ") : true;
    res += arr[i];
  }
  return res + " and " + arr[arr.length - 1];
}
