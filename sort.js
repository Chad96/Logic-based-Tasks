// Given array for the first set of tasks
const numbers = [
  3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210,
  34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980,
];

// Sort the numbers from lowest to highest
const sortedAsc = [...numbers].sort((a, b) => a - b);
console.log("Sorted Ascending:", sortedAsc);

// Sort the numbers from highest to lowest
const sortedDesc = [...numbers].sort((a, b) => b - a);
console.log("Sorted Descending:", sortedDesc);

// Return an array of unique numbers
const uniqueNumbers = [...new Set(numbers)];
console.log("Unique Numbers:", uniqueNumbers);

// Calculate the sum of the numbers in the array
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);

// Return a new array with elements that are less than or equal to 100
const lessThanOrEqual100 = numbers.filter((num) => num <= 100);
console.log("Numbers <= 100:", lessThanOrEqual100);

// Return a new array with elements that are greater than 50
const greaterThan50 = numbers.filter((num) => num > 50);
console.log("Numbers > 50:", greaterThan50);

// Return a new array with elements that are divisible by 2
const divisibleBy2 = numbers.filter((num) => num % 2 === 0);
console.log("Numbers Divisible by 2:", divisibleBy2);

// Return a new array with elements that are divisible by 3
const divisibleBy3 = numbers.filter((num) => num % 3 === 0);
console.log("Numbers Divisible by 3:", divisibleBy3);

// Return a new array with elements that are neither divisible by 2 nor 3
const notDivisibleBy2or3 = numbers.filter(
  (num) => num % 2 !== 0 && num % 3 !== 0
);
console.log("Numbers Not Divisible by 2 or 3:", notDivisibleBy2or3);

// Declare a variable that counts how many elements are in the original array
const countElements = numbers.length;
console.log("Count of Elements:", countElements);

// Declare a new array that contains the same elements as the original array, but reversed
const reversedArray = [...numbers].reverse();
console.log("Reversed Array:", reversedArray);

// Given array for the second set of tasks
const mixedArray = [
  7,
  10,
  "Clentan",
  13,
  89,
  true,
  45,
  false,
  "Jerry",
  "Vukona",
  "Reabetswe",
  600,
];

// Using a for loop and a variable, return all values that are numbers
const numbersFromArray = [];
for (let i = 0; i < mixedArray.length; i++) {
  if (typeof mixedArray[i] === "number") {
    numbersFromArray.push(mixedArray[i]);
  }
}
console.log("Numbers from Mixed Array:", numbersFromArray);

// Using a while loop and a variable, return all values that are strings
const stringsFromArray = [];
let i = 0;
while (i < mixedArray.length) {
  if (typeof mixedArray[i] === "string") {
    stringsFromArray.push(mixedArray[i]);
  }
  i++;
}
console.log("Strings from Mixed Array:", stringsFromArray);

// Using a do while loop, return the sum of all values in the array
let sumOfMixedArray = 0;
let j = 0;
do {
  if (typeof mixedArray[j] === "number") {
    sumOfMixedArray += mixedArray[j];
  }
  j++;
} while (j < mixedArray.length);
console.log("Sum of Numbers in Mixed Array:", sumOfMixedArray);

// Using any looping structure of your choice and a variable, combine all the strings to form a proper greeting
let greeting = "Hello ";
let stringElements = mixedArray.filter((item) => typeof item === "string");
greeting += stringElements.join(", ") + ".";
console.log("Greeting:", greeting);

// Using any looping structure of your choice and a new variable, remove all values in the array that are strings
const withoutStrings = mixedArray.filter((item) => typeof item !== "string");
console.log("Array without Strings:", withoutStrings);
