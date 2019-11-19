// https://www.codewars.com/kata/590e03aef55cab099a0002e8
// Incrementer

function incrementer(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = (nums[i] + (i + 1)) % 10;
  }
  return nums;
}

function incrementer2(nums) {
  inc = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + (i + 1);
    while (nums[i] > 9) {
      nums[i] = nums[i] - 10;
    }
  }
  return nums;
}
