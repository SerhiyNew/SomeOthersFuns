// https://www.codewars.com/kata/count-the-smiley-faces/train/javascript
// Count the smiley faces!

function countSmileys(arr) {
  let count = 0;
  for (i of arr) {
    (i[0] == ";" || i[0] == ":") &&
    (i[1] == ")" || i[1] == "D") &&
    i.length == 2
      ? count++
      : (i[0] == ";" || i[0] == ":") &&
        (i[2] == ")" || i[2] == "D") &&
        (i[1] == "~" || i[1] == "-") &&
        i.length == 3
      ? count++
      : true;
  }
  return count;
}
