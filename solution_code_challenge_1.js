/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let codes = [0];
  let count = 0;
  while (count < n) {
    for (let i = codes.length - 1; i >= 0; i--) {
      const value = (codes[i] | (1 << count));
      codes.push(value);
    }
    count++;
  }
  return codes;
};

