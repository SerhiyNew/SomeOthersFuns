// https://www.codewars.com/kata/string-transformer/train/javascript
// String transformer
// "Example Input" ==> "iNPUT eXAMPLE"

// var a = "Example Input";

function stringTransformer(str) {
  let arr = str.split(" ").reverse();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = "";
    for (let j = 0, a; j < arr[i].length; j++) {
      let a = arr[i].codePointAt(j);
      a < 91 && a > 64
        ? (result[i] += String.fromCodePoint(a + 32))
        : a < 123 && a > 96
        ? (result[i] += String.fromCodePoint(a - 32))
        : (result[i] += arr[i][j]);
    }
  }
  return result.join(" ");
}
