// Validate Sudoku with size `NxN`
// https://www.codewars.com/kata/540afbe2dc9f615d5e000425/train/javascript

// 696 => 729

var Sudoku = function(data) {
  this.len = data.length;
  this.sum = (this.len * (this.len + 1)) / 2;

  this.isValid = function() {
    // test horizontal
    if (
      !data.every(el => this.sum == el.reduce((subSum, item) => subSum + item))
    )
      return false;
    //test vertical
    for (let i = 0; i < this.len; i++) {
      if (
        !data.reduce((subSum, item) => {
          return Array.isArray(subSum) ? subSum[i] + item[i] : subSum + item[i];
        }) == this.sum
      )
        return false;
    }
    // test subSquare
    let sq = Math.sqrt(this.len);
    for (let pos = 0; pos < this.len; pos++) {
      let subSum = 0;
      for (let i = ~~(pos / sq) * sq; i < ~~(pos / sq) * sq + sq; i++) {
        for (let j = (pos % sq) * sq; j < (pos % sq) * sq + sq; j++) {
          if (!Number.isInteger(data[i][j])) return false;
          subSum += data[i][j];
        }
      }
      if (!(subSum == this.sum)) return false;
    }
    return true;
  };
};
