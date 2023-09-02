function reduce<T>(array: T[], callback: (accumulator: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
function reduce<T, U>(array: T[], callback: (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

function reduce(array: any[], callback: (accumulator: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue?: any): any {
  if (!Array.isArray(array) || typeof callback !== "function") {
    throw new TypeError("Invalid input. Expected an array and a callback function.");
  }
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

const numbers: number[] = [1, 2, 3, 4, 5];
const sum: number = reduce(numbers, (accumulator, currentValue) => accumulator + currentValue, 0);

const strings: string[] = ["Hello", " ", "World"];
const concatenated: string = reduce(strings, (accumulator, currentValue) => accumulator + currentValue, "");

const concatenatedNumbers: string = reduce(numbers, (accumulator, currentValue) => accumulator + currentValue.toString(), "");

console.log(sum); // Output: 15
console.log(concatenated); // Output: "Hello World"
console.log(concatenatedNumbers); // Output: "Hello World"

export {};
