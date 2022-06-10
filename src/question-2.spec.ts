import { celsiusToFahrenheit } from "./question-2";

describe("celsiusToFahrenheit", () => {
  it.each`
    celsius | fahrenheit
    ${10}   | ${50}
    ${15}   | ${59}
    ${20}   | ${68}
    ${320}  | ${608}
  `(
    "should be able return $celsius to $fahrenheit",
    ({ celsius, fahrenheit }) => {
      expect(celsiusToFahrenheit(celsius)).toBe(fahrenheit);
    }
  );
});
