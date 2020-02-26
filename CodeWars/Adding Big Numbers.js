// Adding Big Numbers
// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

// =>  324

function add(a, b) {
  if (a.length < 12 && b.length < 12) return (Number(a) + Number(b)).toString();

  a = a.split("").reverse();
  b = b.split("").reverse();
  let len,
    i,
    res = "",
    plus = 0;
  len = a.length > b.length ? a.length : b.length;

  for (i = 0; i < len; i++) {
    let temp = (+a[i] || 0) + (+b[i] || 0) + plus;
    if (temp >= 10) {
      res = (temp % 10) + res;
      plus = 1;
    } else {
      res = temp + res;
      plus = 0;
    }
  }
  return plus == 0 ? res : 1 + res;
}
