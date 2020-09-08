// const removeFromArray = function (array, toRemove) {
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] === toRemove) {
//       array.splice(i, 1);
//     }
//   }
//   return array;
// };

const removeFromArray = function (array, ...moreArgs) {
  for (arg of moreArgs) {
    for (let i = 0; i <= array.length; i++) {
      if (array[i] === arg) {
        array.splice(i, 1);
      }
    }
  }
  return array;
};

module.exports = removeFromArray;
