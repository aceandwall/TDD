const sumAll = function (a, b) {
  let A = a;
  let B = b;
  if (a < 0 || b < 0) {
    return "ERROR";
  } else if (a % a !== 0 || b % b !== 0) {
    return "ERROR";
  } else if (a > b) {
    a = B;
    b = A;
  }
  return (b + 1) * (b / 2) - (a - 1) * (a / 2);
};

module.exports = sumAll;
