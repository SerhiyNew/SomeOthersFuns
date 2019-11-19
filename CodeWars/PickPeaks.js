// Pick peaks
// https://www.codewars.com/kata/pick-peaks/train/javascript

//{pos:[3,7],peaks:[6,3]}

function pickPeaks(arr) {
  let obj = {
    pos: [],
    peaks: []
  };
  let _pos = 0;
  let _peaks = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      _pos = i;
      _peaks = arr[i];
    }
    if (arr[i] < arr[i - 1] && _peaks !== 0) {
      obj.pos.push(_pos);
      obj.peaks.push(_peaks);
      _peaks = 0;
    }
  }
  return obj;
}
