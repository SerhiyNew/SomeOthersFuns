// https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript
// Moving Zeros To The End
// 268 => 276

function moveZeros(arr) {
  let res = [];
  for (item of arr) {
    if (!(item === 0)) {
      res.push(item);
    }
  }
  while (res.length !== arr.length) {
    res.push(0);
  }
  return res;
}
