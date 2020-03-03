//Split Strings
//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

// 380 => 388

function solution(str) {
  if (str.length % 2) {
    str += "_";
  }
  let res = [];
  for (let i = 0; i < str.length / 2; i++) {
    res.push(str[i * 2] + str[i * 2 + 1]);
  }
  return res;
}
