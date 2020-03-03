// Regex Password Validation
// https://www.codewars.com/kata/52e1476c8147a7547a000811

// 398 => 406

function validate(password) {
  return (
    /^\S{6,}$/.test(password) &&
    /[A-Z]+/.test(password) &&
    /[a-z]+/.test(password) &&
    /[0-9]+/.test(password) &&
    !/\W+/.test(password)
  );
}
