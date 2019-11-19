// https://www.codewars.com/kata/tic-tac-toe-checker/train/javascript
// Tic-Tac-Toe Checker (Гра: Хрестики - Нулики)
// 276 => 284

function isSolved(arr) {
  let count = 0;
  for (let j = 0; j < 3; j++) {
    if (arr[0][j] == arr[1][j] && arr[0][j] == arr[2][j] && arr[0][j] == 1)
      return arr[0][j];
    if (arr[0][j] == arr[1][j] && arr[0][j] == arr[2][j] && arr[0][j] == 2)
      return arr[0][j];
  }
  if (arr[1][1] == arr[0][0] && arr[1][1] == arr[2][2] && arr[1][1] == 1)
    return arr[1][1];
  if (arr[1][1] == arr[0][0] && arr[1][1] == arr[2][2] && arr[1][1] == 2)
    return arr[1][1];
  if (arr[1][1] == arr[0][2] && arr[1][1] == arr[2][0] && arr[1][1] == 1)
    return arr[1][1];
  if (arr[1][1] == arr[0][2] && arr[1][1] == arr[2][0] && arr[1][1] == 2)
    return arr[1][1];
  for (let item of arr) {
    if (item[0] == item[1] && item[0] == item[2] && item[0] == 1)
      return item[0];
    if (item[0] == item[1] && item[0] == item[2] && item[0] == 2)
      return item[0];
    for (let i = 0; i < 3; i++) {
      item[i] == 0 ? count++ : true;
    }
  }
  return count > 0 ? -1 : 0;
}
