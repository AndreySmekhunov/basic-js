const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const season = ['winter', 'spring','summer','autumn'];
  if (!arguments.length) return 'Unable to determine the time of year!'
let today = new Date();
if (isNaN(today - date))   return 'Invalid date!';
let month = date.getMonth();
if (typeof month != 'number' || month > 11 || month < 0) return 'Invalid date!';
if (month == 11) month = 0
 else month += 1;
let idx = Math.trunc(month / 3);
return season[idx];




}

module.exports = {
  getSeason
};
