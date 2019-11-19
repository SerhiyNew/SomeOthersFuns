//  https://www.codewars.com/trainer/javascript
//  Roman Numerals Decoder

// solution('XXI'); // should return 21

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution(roman) {
  let res = 0;
  let temp = 0;
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let arr = roman.split("");
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == obj[arr[i + 1]]) {
      temp += obj[arr[i]];
    } else if (obj[arr[i]] > obj[arr[i + 1]] || obj[arr[i + 1]] == undefined) {
      temp += obj[arr[i]];
      res += temp;
      temp = 0;
    } else if (obj[arr[i]] < obj[arr[i + 1]]) {
      temp -= obj[arr[i]];
      res += temp;
      temp = 0;
    }
  }
  return res;
}
