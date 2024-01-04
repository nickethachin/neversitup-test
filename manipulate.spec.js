// Write your test here
const { manipulate } = require("./manipulate");

describe("manipulate function", () => {
  it("should return an empty array for an empty string", () => {
    const result = manipulate("");
    expect(result).toEqual([]);
  });

  it("should return an array with a single element for a single-character string", () => {
    const result = manipulate("a");
    expect(result).toEqual(["a"]);
  });

  it("should return all permutations for a two-character string", () => {
    const result = manipulate("ab");
    expect(result).toEqual(["ab", "ba"]);
  });

  it("should return all permutations without duplicates for a three-character string", () => {
    const result = manipulate("abc");
    expect(result).toEqual(["abc", "acb", "bac", "bca", "cab", "cba"]);
  });

  it("should handle a string with repeated characters", () => {
    const result = manipulate("aabb");
    expect(result).toEqual(["aabb", "abab", "abba", "baab", "baba", "bbaa"]);
  });
});
