// Find the first non-consecutive number
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

// 693 => 696

function firstNonConsecutive(arr) {
  arr = arr.find((el, i) => arr[0] != el - i);
  return arr == undefined ? null : arr;
}
