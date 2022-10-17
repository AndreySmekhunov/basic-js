const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(arr) {
  let m = arr.length;
  let n = arr[0].length;
  let result = [];
  let addStr = []; 
  let addArr = [];
  let str = [];
  for (let i = 0; i < m; i++)
    arr[i] = [false].concat(arr[i], [false]);
   
  for (let j = 0; j < n + 2; j++) 
      addStr.push(false);
  addArr.push(addStr);    

  arr = addArr.concat(arr,addArr)

  for (let j = 1; j < m+1; j++) {
      str = [];
      for (let i = 1; i < n+1; i++) {
        let count = 0;
        if (arr[j - 1][i - 1]) count ++;
        if (arr[j][i - 1]) count ++;
        if (arr[j + 1][i - 1]) count ++;
        if (arr[j - 1][i]) count ++;
        if (arr[j + 1][i]) count ++;
        if (arr[j - 1][i + 1]) count ++;
        if (arr[j][i + 1]) count ++;
        if (arr[j + 1][i + 1]) count ++;
        str.push(count);
      }
      result.push(str);
    }
    return result;
}

module.exports = {
  minesweeper
};
