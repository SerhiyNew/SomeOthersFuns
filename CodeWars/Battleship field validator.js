// Battleship field validator
// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/solutions/javascript

// 566 => 627
function validateBattlefield(arr) {
  let obj = {
    "1ship": 4,
    "2ship": 3,
    "3ship": 2,
    "4ship": 1,
    check: true
  };
  function shipFinder(i, j) {
    let position = "horisontal";
    let current = 1;
    if (arr[i][j + 1]) {
      // ship is horisontal
      let f = 1;
      while (arr[i][j + f]) {
        current++;
        f++;
      }
    } else if (arr[i + 1] != undefined) {
      if (arr[i + 1][j]) {
        //  ship is vertical
        position = "vertical";
        let f = 1;
        while (arr[i + f] != undefined) {
          if (arr[i + f][j]) {
            current++;
            f++;
          } else break;
        }
      }
    }
    // check obj on curren ship and minus it
    if (obj[current + "ship"]) {
      obj[current + "ship"]--;
    } else {
      obj.check = false;
      return;
    }
    // close area near this ship
    if (position == "vertical") {
      for (let v = 0; v < current + 1; v++) {
        if (arr[i + v] != undefined) {
          arr[i + v][j] = false;
          if (arr[i + v][j + 1] == 1 || arr[i + v][j - 1] == 1) {
            obj.check = false;
            return;
          }
          if (arr[i + v][j + 1] != undefined) arr[i + v][j + 1] = false;
          if (arr[i + v][j - 1] != undefined) arr[i + v][j - 1] = false;
        }
      }
    } else {
      for (let h = 0; h < current + 2; h++) {
        if (arr[i][j + h - 1] != undefined) {
          arr[i][j + h - 1] = false;
          if (arr[i + 1] != undefined) {
            if (arr[i + 1][j + h - 1] == 1) {
              obj.check = false;
              return;
            }
            arr[i + 1][j + h - 1] = false;
          }
        }
      }
    }
    return;
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (arr[i][j]) shipFinder(i, j);
      if (!obj.check) return obj.check;
    }
  }
  // check on excessive ships and finall true: false
  return !(obj["1ship"] + obj["2ship"] + obj["3ship"] + obj["4ship"])
    ? obj.check
    : false;
}
