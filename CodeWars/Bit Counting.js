//Bit Counting
//https://www.codewars.com/kata/526571aae218b8ee490006f4

// 372 => 380

var countBits = function(n) {
  let num = n.toString(2);
  let res = 0;
  for (let i = 0; i < num.length; i++) {
    res += +num[i];
  }
  return res;
};
