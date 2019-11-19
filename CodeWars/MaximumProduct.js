// https://www.codewars.com/kata/5a4138acf28b82aa43000117
// Maximum Product

function adjacentElementsProduct(array) {
  var sum = -Infinity;
  for (i = 0; i < array.length; i++) {
    sum < array[i] * array[i + 1] ? (sum = array[i] * array[i + 1]) : true;
  }
  return sum;
}
