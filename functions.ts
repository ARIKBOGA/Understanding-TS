/**
 * Function that takes two numbers and returns their sum.
 * @param {number} n1 - First number to add.
 * @param {number} n2 - Second number to add.
 * @returns {number} The result of adding n1 and n2.
 */
function add(n1: number, n2: number): number {
  return n1 + n2;
}

/**
 * Function that prints the result of a calculation.
 * @param {number} result - The result of a calculation.
 */
function printResult(result: number) {
  console.log("Result: " + result);
}

/**
 * Function that takes two numbers and a callback function.
 * It adds the two numbers and calls the callback with the result.
 * @param {number} n1 - First number to add.
 * @param {number} n2 - Second number to add.
 * @param {(result: number) => void} cb - Callback function to call with the result.
 */
function addAndHandle(n1: number, n2: number, cb: (result: number) => void) {
  cb(n1 + n2);
}

printResult(add(25, 44));

let combineValues: (a: number, b: number) => number; // It is a function that takes no parameters and returns a number

combineValues = add;
//combineValues = printResult; // This line will throw an error because printResult function asks one number parameter and returns nothing

console.log(combineValues(4, 5));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
