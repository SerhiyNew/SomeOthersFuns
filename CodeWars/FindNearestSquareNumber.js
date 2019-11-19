// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba
// Find Nearest square number

function nearestSq(n) {
  let x = Math.round(Math.sqrt(n));
  return x * x;
}
