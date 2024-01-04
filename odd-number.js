/**
 *
 * @param {number[]} numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns {number} one number that odd number
 */
const findOddNumber = (text) => {
  /* ------------------------------- INSTRUCTION ------------------------------ */
  // Given an array of integers, find the one that appears an odd number of times.
  // There will always be only one integer that appears an odd number of times.
  /* -------------------------------------------------------------------------- */
  // TODO : start your code here

  if (text.length === 0) return 0;

  const result = [];
  const count = {};

  text.forEach((number) => {
    count[number] = (count[number] || 0) + 1;
  });

  for (let key in count) {
    if (count[key] % 2 !== 0) {
      result.push(key);
    }
  }

  return Number(result[0]);
};

module.exports = {
  findOddNumber,
};
