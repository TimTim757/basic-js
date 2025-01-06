const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strNum = n.toString();
  let maxNum = -Infinity;

  for (let i = 0; i < strNum.length; i++) {
    let newNum = strNum.slice(0, i) + strNum.slice(i + 1);
    let num = Number(newNum);
    if (num > maxNum) {
      maxNum = num;
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
