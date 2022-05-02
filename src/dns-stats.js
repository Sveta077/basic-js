const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  let res = {};
  
  domains.forEach(str => {
    str.split('.').forEach((current, i, arr) => {
      let subdomain = '.' + arr.slice(i).reverse().join('.')
      if(res.hasOwnProperty(subdomain)) {
        res[subdomain] += 1;
      } else {
        res[subdomain] = 1;
      }
    })
  })
  return res;
}


console.log(getDNSStats([
    'google.com',
    'nodejs.org',
    'w3schools.com'
   ]));

module.exports = {
  getDNSStats
};
