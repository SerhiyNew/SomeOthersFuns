// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
// Find The Parity Outlier

function findOutlier(integers) {
  let p = [],
    n = [];
  for (let i = 0; i < integers.length; i++) {
    integers[i] % 2 ? n.push(integers[i]) : p.push(integers[i]);
  }
  return n.length > p.length ? p[0] : n[0];
}
