// A Chain adding function
// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript

// 762 => 771

function add(a = 0) {
  let sum = a;

  function func(b) {
    sum += b;
    return func;
  }
  func.toString = () => sum;
  return func;
}
