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
  //throw new NotImplementedError('Not implemented');
  if (!date || typeof (date) === 'undefined') return 'Unable to determine the time of year!';

  if (Object.prototype.toString.call(date) !== '[object Date]')  throw new Error('Invalid date!');

	if (date instanceof Date) {
		try {
			date.getTime()
		}
		catch {
			throw new Error('Invalid date!')
		}


		return (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1 ) ? 'winter'
		: (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4 ) ? 'spring'
		: (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7 ) ? 'summer'
		: 'autumn'
	}


  throw new Error('Invalid date!');        

}
  
module.exports = {
  getSeason
};
