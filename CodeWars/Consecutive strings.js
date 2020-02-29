// Consecutive strings
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

// 388 => 396

function longestConsec(arr, k) {
  if (arr.lengrh == 0 || k <= 0 || k > arr.lengrh) return "";

  let res = "";

  for (let i = 0; i < arr.length - k + 1; i++) {
    let temp = "";
    for (let j = 0; j < k; j++) {
      temp += arr[i + j];
    }
    if (temp.length > res.length) res = temp;
  }
  return res;
}
