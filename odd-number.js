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

  // If the array is empty, return 0
  if (text.length === 0) return 0;

  // Create an empty array to store the result
  const result = [];
  const count = {};

  // Loop through the array and count the number of occurences of each number
  text.forEach((number) => {
    count[number] = (count[number] || 0) + 1;
  });

  // Loop through the count object
  for (let key in count) {
    // If the number of occurences is odd, push the number to the result array
    if (count[key] % 2 !== 0) {
      result.push(key);
    }
  }

  // Convert the number from string to number and return it
  return Number(result[0]);
};

module.exports = {
  findOddNumber,
};
