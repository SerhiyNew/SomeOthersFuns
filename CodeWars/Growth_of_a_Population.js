// https://www.codewars.com/kata/563b662a59afc2b5120000c6
// Growth of a Population

function nbYear(p0, percent, aug, p) {
  for (var i = 0; p > p0; i++) {
    p0 = p0 + (p0 / 100) * percent + aug;
  }
  return i;
}
