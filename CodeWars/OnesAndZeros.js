// https://www.codewars.com/kata/578553c3a1b8d5c40300037c
// Ones and Zeros

const binaryArrayToNumber = arr => {
  var res = 0;
  for (i = 0; i < arr.length; i++) {
    arr[i] !== 0 ? (res += Math.pow(2, arr.length - i - 1)) : true;
  }
  return res;
};
