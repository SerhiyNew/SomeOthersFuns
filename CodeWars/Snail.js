// https://www.codewars.com/kata/snail/javascript
// Snail
// 189=>266

function snail(arr) {
  if (arr[0].length == 0) return [];
  let res = [],
    i = 1,
    j = 0;
  arr.unshift(new Array(arr.length));
  arr.push(new Array(arr.length));
  while (
    arr[i][j + 1] !== undefined ||
    arr[i][j - 1] !== undefined ||
    arr[i + 1][j] !== undefined ||
    arr[i - 1][j] !== undefined
  ) {
    while (arr[i][j + 1] !== undefined) {
      res.push(arr[i][j]);
      arr[i][j] = undefined;
      j++;
    }
    while (arr[i + 1][j] !== undefined) {
      res.push(arr[i][j]);
      arr[i][j] = undefined;
      i++;
    }
    while (arr[i][j - 1] !== undefined) {
      res.push(arr[i][j]);
      arr[i][j] = undefined;
      j--;
    }
    while (arr[i - 1][j] !== undefined) {
      res.push(arr[i][j]);
      arr[i][j] = undefined;
      i--;
    }
  }
  res.push(arr[i][j]);
  return res;
}
