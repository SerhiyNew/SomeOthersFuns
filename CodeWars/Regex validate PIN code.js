// Regex validate PIN code
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

// 396 => 398
function validatePIN(pin) {
  return (
    pin.match(/\d/g) != null &&
    pin.length == pin.match(/\d/g).length &&
    (pin.length == 4 || pin.length == 6)
  );
}
