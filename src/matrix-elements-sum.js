const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(arr) {
let m = arr.length;
let n = arr[0].length;
let sum = 0;
for (let j = 0; j < n; j++) sum += arr[0][j];
for (let i = 1; i < m; i++)
    for (let j = 0; j < n; j++)
        if (arr[i-1][j]) sum += arr[i][j]

return sum
}
module.exports = {
  getMatrixElementsSum
};
