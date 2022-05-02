const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = [...arr];
  let lastArr = [];

  for (let i = 0; i < newArr.length; i++) {


    if (newArr[i] === '--discard-next') {
      if (typeof newArr[i + 2] !== 'string') {
        i++;
      } else {
        i += 2;
      }
    } else if (newArr[i] === '--discard-prev') {
      lastArr.pop();
    } else if (newArr[i] === '--double-next') {
      if (newArr[i + 1]) {
        lastArr.push(newArr[i + 1]);
      }
    } else if (newArr[i] === '--double-prev') {
      if (newArr[i - 1]) {
        lastArr.push(newArr[i - 1]);
      }
    } else {
      lastArr.push(newArr[i]);
    }

  }
  
  return lastArr;

}

module.exports = {
  transform
};
