const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(str) {
if (!arguments.length) return false;
if (typeof str != 'string') return false;
let num = Number(str);
if (typeof num != 'number') return false;
if (num <= 0 || num > 15) return false;
let result = Math.ceil(Math.log(15 / num) / 0.693 * 5730);
if (isNaN(result)) return false;
return result; 
}

module.exports = {
  dateSample
};
