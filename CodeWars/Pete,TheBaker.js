// https://www.codewars.com/kata/pete-the-baker/train/javascript
// Pete, the baker
// 149 => 157

//let recipe = {flour: 500, sugar: 200, eggs: 1};
//let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
// let recipe = {"cream":1,"flour":3,"sugar":1,"milk":1,"oil":1,"eggs":1} ;
// let available = {"sugar":1,"eggs":1,"flour":3,"cream":1,"oil":1,"milk":1};

function cakes(recipe, available) {
  let arr = [];
  for (let key in recipe) {
    if (available[key] >= recipe[key]) {
      arr.push(Math.floor(available[key] / recipe[key]));
    } else return 0;
  }
  arr.sort((a, b) => a - b);
  return arr[0];
}
