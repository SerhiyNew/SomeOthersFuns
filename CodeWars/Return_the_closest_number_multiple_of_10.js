// https://www.codewars.com/kata/58249d08b81f70a2fc0001a4
// Return the closest number multiple of 10

const closestMultiple10 = num => {
  num = Math.round(num / 10) * 10;
  return num;
};
