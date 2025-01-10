type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

/**
 * Combines two values of type number or string into a single value.
 * If both values are numbers, the result is the sum of the two numbers.
 * If one or both values are strings, the result is a concatenation of the two strings.
 * @param {number|string} arg1 The first value to combine.
 * @param {number|string} arg2 The second value to combine.
 * @returns {number|string} The combined value.
 */
function combine(
  arg1: Combinable,
  arg2: Combinable,
  resultConversion: ConversionDescriptor
): Combinable {
  let result: any;
  if (
    (typeof arg1 === "number" && typeof arg2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +arg1 + +arg2;
  } else {
    result = arg1.toString() + arg2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);

const combinedNamesAndAges = combine("Max", 26, "as-text");
console.log(combinedNamesAndAges);

const combinedAgesAsString = combine("30", "26", "as-number");
console.log(combinedAgesAsString);
