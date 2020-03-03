// Make a spiral
// https://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript

// 660 => 693

var spiralize = function(size) {
  let temp = [],
    arr = [],
    oper = size - 1,
    counter = size,
    i = 0,
    j = size - 1;

  for (let i = 0; i < size; i++) temp.push(1);
  arr.push(temp);

  for (let i = 0; i < size - 1; i++) {
    arr.push(new Array(size));
  }
  while (oper > 0) {
    // down
    for (let h = 0; h < counter; i++, h++) arr[i][j] = 1;
    if (!--oper) break;
    i--;

    // left
    for (let h = 0; h < counter; h++, j--) arr[i][j] = 1;
    if (!--oper) break;
    counter -= 2;
    j++;

    // up
    for (let h = 0; h < counter; h++, i--) arr[i][j] = 1;
    if (!--oper) break;
    i++;

    // right
    for (let h = 0; h < counter; h++, j++) arr[i][j] = 1;
    if (!--oper) break;
    counter -= 2;
    j--;
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (arr[i][j] != 1) arr[i][j] = 0;
    }
  }
  return arr;
};
