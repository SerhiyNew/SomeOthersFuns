// https://www.codewars.com/kata/515e271a311df0350d00000f
// Square(n) Sum

function squareSum(numbers) {
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i] ** 2;
  }
  return res;
}
