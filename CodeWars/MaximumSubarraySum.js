// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
// Maximum subarray sum

var maxSequence = function(arr) {
  let sum = 0,
    temp = 0;
  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];
    temp < 0 ? (temp = 0) : temp > sum ? (sum = temp) : true;
  }
  return sum;
};
