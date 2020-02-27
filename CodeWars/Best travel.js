// Best travel
// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/javascript

// 406 => 422

function chooseBestSum(t, k, ls) {
  let arr = ls.filter(a => a <= t);
  if (arr.length < k) return null;
  arr.sort((a, b) => a - b);

  let min = arr.reduce((sum, item, i) => {
    return i < k ? (sum += item) : sum;
  });
  if (min > t) return null;

  let resultArr = [];
  let comb = [];

  function run(lvl, count) {
    if (lvl == k) {
      resultArr.push([].concat(comb));
    } else {
      for (let i = count; i < arr.length; i++) {
        comb[lvl] = arr[i];
        count += 1;
        run(lvl + 1, count);
      }
    }
  }
  run(0, 0);

  let result = 0;
  for (let j = 0; j < resultArr.length; j++) {
    let temp = resultArr[j].reduce((sum, item) => (sum += item));
    if (temp == t) {
      return t;
    }
    if (temp > result && temp < t) {
      result = temp;
    }
  }
  return result;
}
