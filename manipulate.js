/**
 *
 * @param {string} text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
const manipulate = (text) => {
  /* ------------------------------- INSTRUCTION ------------------------------ */
  // Create all permutations of a non-empty input string
  /* -------------------------------------------------------------------------- */
  // TODO : start your code here

  // If input string is empty, return empty array
  if (text.length === 0) return [];
  // Prepare result array
  const result = [];

  // Recursive function to generate permutations
  const permute = (_string, current = "") => {
    // If input string is empty, push current permutation to result array
    if (_string.length === 0) result.push(current);

    // Loop through each character in input string
    _string.split("").forEach((char, index) => {
      // Remove current character from input string
      const nextChars = _string.slice(0, index) + _string.slice(index + 1);
      // Call recursive function with new input string and current permutation
      permute(nextChars, current + char);
    });
  };

  // Start recursive function with input string
  permute(text);

  // Remove duplicates, if present
  const unique = [...new Set(result)];

  // Return result array
  return unique;
};

module.exports = {
  manipulate,
};
