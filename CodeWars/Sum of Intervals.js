// Sum of Intervals
// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

// 454 => 486

function sumIntervals(intervals) {
  function change(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i][0] >= arr[j][0] && arr[i][1] <= arr[j][1]) {
          arr[i][0] = arr[j][0];
          arr[i][1] = arr[j][1];
          arr[j] = [0, 0];
        } else if (
          arr[i][0] <= arr[j][0] &&
          arr[j][0] <= arr[i][1] &&
          arr[i][1] < arr[j][1]
        ) {
          arr[i][1] = arr[j][1];
          arr[j] = [0, 0];
        } else if (
          arr[i][0] > arr[j][0] &&
          arr[j][1] >= arr[i][0] &&
          arr[i][1] >= arr[j][1]
        ) {
          arr[i][0] = arr[j][0];
          arr[j] = [0, 0];
        } else if (arr[i][0] <= arr[j][0] && arr[i][1] >= arr[j][1]) {
          arr[j] = [0, 0];
        }
      }
    }
    arr = arr.filter(a => {
      return a[0] + a[1];
    });
    return arr;
  }
  intervals = change(intervals);
  intervals = change(intervals);
  let res = 0;

  for (let i = 0; i < intervals.length; i++) {
    res += intervals[i][1] - intervals[i][0];
  }
  return res;
}
