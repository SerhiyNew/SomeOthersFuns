// https://www.codewars.com/kata/54e6533c92449cc251001667
// Unique In Order

var uniqueInOrder = function(iterable) {
  res = [];
  for (let i = 0; i < iterable.length; i++) {
    iterable[i] !== res[res.length - 1] ? res.push(iterable[i]) : true;
  }
  return res;
};
