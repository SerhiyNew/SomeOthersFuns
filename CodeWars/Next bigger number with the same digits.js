// Next bigger number with the same digits
// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

// 422 => 454

function nextBigger(n) {
  let str = n.toString(10);

  for (let i = str.length - 1; i >= 0; i--) {
    if (+str[i] > +str[i - 1]) {
      let arr = str.slice(i - 1).split("");
      str = str.slice(0, i - 1);

      for (let j = +arr[0] + 1; j <= 9; j++) {
        if (arr.indexOf(j + "") > 0) {
          let char = arr.splice(arr.indexOf(j + ""), 1);
          return +(str + char + arr.sort((a, b) => +a - +b).join(""));
        }
      }
    }
  }
  return -1;
}
