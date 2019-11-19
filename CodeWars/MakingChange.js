// https://www.codewars.com/kata/5365bb5d5d0266cd010009be
// Making Change
// 284 => 292

const makeChange = num => {
  let obj = { H: 50, Q: 25, D: 10, N: 5, P: 1 },
    res = {};

  for (let item in obj) {
    if (num >= obj[item]) {
      res[item] = ~~(num / obj[item]);
      num = num % obj[item];
    }
  }
  return res;
};
