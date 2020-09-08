const ftoc = function (temp) {
  newTemp = ((temp - 32) * 5) / 9;
  return Number(newTemp.toFixed(1));
};

const ctof = function (temp) {
  newTemp = (temp * 9) / 5 + 32;
  return Number(newTemp.toFixed(1));
};

module.exports = {
  ftoc,
  ctof,
};
