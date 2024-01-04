/**
 *
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */
const countSmilyFace = (text) => {
  /* ------------------------------- INSTRUCTION ------------------------------ */
  // Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
  //
  // Rules for a smiling face:
  // -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
  // -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
  // -Every smiling face must have a smiling mouth that should be marked with either ) or D
  //
  // No additional characters are allowed except for those mentioned.
  // Valid smiley face examples: :) :D ;-D :~)
  // Invalid smiley faces: ;( :> :} :]
  //
  // Note
  // In case of an empty array return 0. You will not be tested with invalid input (input will always be an array)
  // Order of the face (eyes, nose, mouth) elements will always be the same
  /* -------------------------------------------------------------------------- */
  // TODO : start your code here

  // If input array is empty, return 0
  if (text.length === 0) return 0;

  // Prepare result variable
  let result = 0;

  // Loop through each element in input array
  text.forEach((element) => {
    // Check if element is a valid smily face
    // Regex breakdown:
    // - /[;:] = mean text to match must start with either ; or :
    // - [-~]? = mean text to match can have - or ~, but not required
    // - [)D]/ = mean text to match must end with either ) or D
    if (element.match(/[:;][-~]?[)D]/)) result++;
  });

  // Return result
  return result;
};

module.exports = {
  countSmilyFace,
};
