// https://www.codewars.com/kata/detect-pangram/train/javascript
// Detect Pangram

function isPangram(string) {
  let sum = 0;
  let arr = string
    .toUpperCase()
    .split("")
    .sort();
  for (let i = 0; i < arr.length; i++) {
    arr[i] !== arr[i - 1] &&
    arr[i].codePointAt(0) > 64 &&
    arr[i].codePointAt(0) < 91
      ? (sum += arr[i].codePointAt(0))
      : true;
  }
  return sum == 2015;
}
//  isPangram("The quick brown fox jumps over the lazy dog.");//true
