// https://www.codewars.com/kata/59b844528bcb7735560000a0
// Nice Array

function isNice(arr) {
  if (arr.length < 1) return false;
  arr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = 0; j < arr.length; j++) {
      arr[i] + 1 == arr[j] || arr[i] - 1 == arr[j] ? count++ : true;
      alert(arr[i] + " " + arr[j]);
      alert("count = " + count);
    }
    if (count == 0) return false;
  }
  return true;
}
