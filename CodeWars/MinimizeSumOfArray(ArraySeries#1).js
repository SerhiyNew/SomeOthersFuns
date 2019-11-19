// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b
// Minimize Sum Of Array(Array Series #1)

function minSum(arr) {
  let sum = 0,
    count = arr.length - 1;
  arr.sort(function(a, b) {
    return a - b;
  });
  for (i = 0; i < count; i++) {
    sum += arr[i] * arr[count];
    count--;
  }
  return sum;
}

function minSum2(arr) {
  let sum = 0,
    count = arr.length - 1;

  arr.sort(function(a, b) {
    return a - b;
  });
  for (let i = 0; i < count; i++) {
    sum += arr[i] * arr[count];
    count--;
  }
  return sum;
}
