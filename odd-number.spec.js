// Write your test here
const { findOddNumber } = require("./odd-number");

describe("findOddNumber function", () => {
  it("should return 0 for an empty array", () => {
    const result = findOddNumber([]);
    expect(result).toEqual(0);
  });

  it("should return the number for an array with a single element", () => {
    const result = findOddNumber([7]);
    expect(result).toEqual(7);
  });

  it("should return the number for an array with a single element", () => {
    const result = findOddNumber([0]);
    expect(result).toEqual(0);
  });

  it("should return the number for an array with a single element", () => {
    const result = findOddNumber([1, 1, 2]);
    expect(result).toEqual(2);
  });

  it("should return the number for an array with a single element", () => {
    const result = findOddNumber([0, 1, 0, 0, 1]);
    expect(result).toEqual(0);
  });

  it("should return the number for an array with a single element", () => {
    const result = findOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    expect(result).toEqual(0);
  });

  it("should return the number for an array with a single element", () => {
    const result = findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
    expect(result).toEqual(4);
  });
});
