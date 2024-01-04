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

  if (text.length === 0) return [];
  const result = [];

  const permute = (_string, current = "") => {
    if (_string.length === 0) result.push(current);
    _string.split("").forEach((char, index) => {
      const nextChars = _string.slice(0, index) + _string.slice(index + 1);
      permute(nextChars, current + char);
    });
  };

  permute(text);

  const unique = [...new Set(result)];
  
  return unique;
};

module.exports = {
  manipulate,
};
