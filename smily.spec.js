// Write your test here
const { countSmilyFace } = require("./smily");

describe("countSmilyFace function", () => {
  it("should return 0 for an empty array", () => {
    const result = countSmilyFace([]);
    expect(result).toEqual(0);
  });

  it("should return 0 for an empty array", () => {
    const result = countSmilyFace([":)", ";(", ";}", ":-D"]);
    expect(result).toEqual(2);
  });

  it("should return 0 for an empty array", () => {
    const result = countSmilyFace([";D", ":-(", ":-)", ";~)"]);
    expect(result).toEqual(3);
  });

  it("should return 0 for an empty array", () => {
    const result = countSmilyFace([";]", ":[", ";*", ":$", ";-D"]);
    expect(result).toEqual(1);
  });
});
