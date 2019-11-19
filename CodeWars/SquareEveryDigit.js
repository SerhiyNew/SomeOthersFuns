// https://www.codewars.com/kata/546e2562b03326a88e000020
// Square Every Digit

function squareDigits(num) {
  let arr = String(num),
    b = "";
  for (let i = 0; i < arr.length; i++) {
    b += +arr[i] * +arr[i];
  }
  return +b;
}
