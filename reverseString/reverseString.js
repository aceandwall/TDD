const reverseString = function (str) {
  let splitStr = [];
  let revString = [];
  for (letter of str) {
    splitStr.unshift(letter);
  }
  //   revString = splitStr.reverse(); <<< did not work for some reason
  //   return revString.join();
  //   return revString;
  for (let i = splitStr.length; i >= 0; i--) {
    revString.unshift(splitStr[i]);
  }

  revString = revString.join("");

  return revString;
};

module.exports = reverseString;

// split string into an array, then print backwards using join maybe
// array.reverse() will reverse the content of an array
// then use join to return result
