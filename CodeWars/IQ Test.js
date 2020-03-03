// IQ Test
// https://www.codewars.com/kata/552c028c030765286c00007d

// 356 =>  364

function iqTest(numbers) {
  let arr = numbers.split(" ");
  if (arr[0] % 2 == arr[1] % 2) {
    for (let i = 2; i < arr.length; i++) {
      if (arr[1] % 2 != arr[i] % 2) return i + 1;
    }
  } else {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % 2 != arr[2] % 2) return j + 1;
    }
  }
}
