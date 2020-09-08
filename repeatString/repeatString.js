const repeatString = function (text, num) {
  if (num >= 0) {
    return text.repeat(num);
  } else {
    return "ERROR";
  }
};

module.exports = repeatString;
