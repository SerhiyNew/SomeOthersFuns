// Give me a Diamond
// Нарисовать бриллиант
// https://www.codewars.com/kata/give-me-a-diamond/train/javascript

function diamond(n) {
  let arr = [];
  if (n % 2 && n > 0 && isFinite(n)) {
    arr.length = n;
    for (let i = 0; i < (n + 1) / 2; i++) {
      arr[i] = "";
      while (arr[i].length < (n - 1) / 2 - i) {
        arr[i] += " ";
      }
      while (arr[i].length < (n + 1) / 2 + i) {
        arr[i] += "*";
      }
      arr[arr.length - 1 - i] = arr[i];
    }
    diam = arr.join("\n");
  } else diam = null;
  return diam;
}
