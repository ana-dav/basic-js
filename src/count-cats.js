const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0
  matrix.forEach(row => {
    row.forEach(col =>{
      if (col === '^^') count++
    });
  });
  return count
};
