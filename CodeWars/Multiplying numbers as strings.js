// Multiplying numbers as strings
// https://www.codewars.com/kata/55911ef14065454c75000062

// 729 => 762

function multiply(a, b) {
  function mult(num, pos) {
    let res = "",
      temp = 0;

    for (let i = a.length - 1; i >= 0; i--) {
      temp = num * a[i] + temp;
      res = (temp % 10) + res;
      temp = ~~(temp / 10);
    }
    for (let i = 0; i < b.length - 1 - pos; i++) {
      res += "0";
    }
    return temp ? temp + res : res;
  }

  function summ(a, b) {
    if (a.length < 12 && b.length < 12)
      return (Number(a) + Number(b)).toString();

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

  let sum = [];

  for (let j = 0; j < b.length; j++) {
    sum.push(mult(b[j], j));
  }
  sum = sum.reduce(summ);

  return sum == "0" ? sum : sum.replace(/^0*/gi, "");
}
