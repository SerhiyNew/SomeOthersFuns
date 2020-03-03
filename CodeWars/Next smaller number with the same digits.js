// Next smaller number with the same digits
// https://www.codewars.com/kata/5659c6d896bc135c4c00021e/train/javascript

// 627 => 660

function nextSmaller(n) {
  if (n[1] == "0" && arr.length == 2) {
    return -1;
  }
  let arr = n.toString(10).split(""),
    subArr,
    char;

  for (let i = arr.length - 1; i > 0; i--) {
    if (+arr[i] < +arr[i - 1]) {
      if (
        arr[i] == "0" &&
        i == 1 &&
        !arr.some((el, index) => {
          return +el < +arr[i - 1] && index > i;
        })
      ) {
        continue;
      }
      subArr = arr.splice(i - 1);
      for (let i = subArr[0] - 1; i >= 0; i--) {
        if (subArr.indexOf(i.toString()) > -1) {
          char = subArr.splice(subArr.indexOf(i.toString()), 1);
          subArr.sort((a, b) => +b - +a);
          return +arr
            .concat(char)
            .concat(subArr)
            .join("");
        }
      }
    }
  }
  return -1;
}
