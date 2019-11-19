// https://www.codewars.com/kata/546f922b54af40e1e90001da
// Replace With Alphabet Position

function alphabetPosition(text) {
  var alpf = "abcdefghijklmnopqrstuvwxyz";
  var textRes = "";
  for (i = 0; i < text.length; i++) {
    for (j = 0; j < alpf.length; j++) {
      if (text[i].toLowerCase() == alpf[j]) {
        textRes += j + 1 + " ";
      }
    }
  }
  return textRes.trim();
}
