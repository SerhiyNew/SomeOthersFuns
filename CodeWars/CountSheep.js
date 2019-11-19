// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
// If you can't sleep, just count sheep!!

const countSheep = function(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += i + 1 + " sheep...";
  }
  return str;
};
