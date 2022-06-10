import { fahrenheitToCelsius } from "./question-3";

describe("fahrenheitToCelsius", () => {
  it.each`
    fahrenheit | celsius
    ${32}      | ${0}
    ${68}      | ${20}
    ${122}     | ${50}
    ${230}     | ${110}
  `(
    "should be able return $fahrenheit to $celsius",
    ({ celsius, fahrenheit }) => {
      expect(fahrenheitToCelsius(fahrenheit)).toBe(celsius);
    }
  );
});
