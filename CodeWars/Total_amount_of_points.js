// https://www.codewars.com/kata/5bb904724c47249b10000131
// Total amount of points

function points(games) {
  let result = 0,
    temp = "";
  for (let i = 0; i < games.length; i++) {
    temp = games[i];
    if (+temp[0] > +temp[temp.length - 1]) {
      result += 3;
    } else if (+temp[0] == +temp[temp.length - 1]) {
      result += 1;
    }
  }
  return result;
}
