import { isOddOrEven } from "./question-1";

describe("Question 1", () => {
  it.each`
    number | expected
    ${1}   | ${"odd"}
    ${2}   | ${"even"}
    ${3}   | ${"odd"}
    ${4}   | ${"even"}
    ${5}   | ${"odd"}
    ${6}   | ${"even"}
  `("should return $expected for $number", ({ number, expected }) => {
    expect(isOddOrEven(number)).toBe(expected);
  });
});
