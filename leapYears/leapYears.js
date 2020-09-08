const leapYears = function (year) {
  if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
    return false;
  } else if (year % 4 === 0 && year % 400 === 0) {
    return true;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = leapYears;

// conditions which are true: divides by 4, but if ends in 100, must
// be divisible by 400
