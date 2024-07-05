const numbers = [
  3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210,
  34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980,
];

// a. Sort the numbers from lowest to highest
function sortAscending(arr) {
  return arr.slice().sort(function (a, b) {
    return a - b;
  });
}
// b. Sort the numbers from highest to lowest
function sortDescending(arr) {
  return arr.slice().sort(function (a, b) {
    return b - a;
  });
}

// c. Return an array of unique numbers. If a number is repeated, it should not occur twice in the returned array.
function getUniqueNumbers(arr) {
  return Array.from(new Set(arr));
}

// d. Calculate the sum of the numbers in the array referred to in the problem statemen
function calculateSum(arr) {
  return arr.reduce(function (total, num) {
    return total + num;
  }, 0);
}

// e. Return a new array with elements that are less than or equal to 100
function filterLessThanOrEqual100(arr) {
  return arr.filter(function (num) {
    return num <= 100;
  });
}

// f. Return a new array with elements that are greater than 50
function filterGreaterThan50(arr) {
  return arr.filter(function (num) {
    return num > 50;
  });
}

// g. Return a new array with elements that are divisible by 2
function filterDivisibleBy2(arr) {
  return arr.filter(function (num) {
    return num % 2 === 0;
  });
}
// h. Return a new array with elements that are divisible by 3
function filterDivisibleBy3(arr) {
  return arr.filter(function (num) {
    return num % 3 === 0;
  });
}

// i. Return a new array with elements that are neither divisible by 2 or 3, if they exist. Otherwise return an empty array.
function filterNotDivisibleBy2or3(arr) {
  return arr.filter(function (num) {
    return num % 2 !== 0 && num % 3 !== 0;
  });
}

// j. Declare a variable that counts how many elements are in the original array
function countElements(arr) {
  return arr.length;
}

// k. Declare a new array that contains the same elements as the original array, but reversed. The array should start at 980 and end at 3.
function reverseArray(arr) {
  return arr.slice().reverse();
}

console.log("Sorted Ascending:", sortAscending(numbers));
console.log("Sorted Descending:", sortDescending(numbers));
console.log("Unique Numbers:", getUniqueNumbers(numbers));
console.log("Sum of Numbers:", calculateSum(numbers));
console.log("Numbers <= 100:", filterLessThanOrEqual100(numbers));
console.log("Numbers > 50:", filterGreaterThan50(numbers));
console.log("Numbers Divisible by 2:", filterDivisibleBy2(numbers));
console.log("Numbers Divisible by 3:", filterDivisibleBy3(numbers));
console.log(
  "Numbers Not Divisible by 2 or 3:",
  filterNotDivisibleBy2or3(numbers)
);
console.log("Count of Elements:", countElements(numbers));
console.log("Reversed Array:", reverseArray(numbers));

// 2.
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

// a. Using a for loop and a variable, return all values that are numbers.
function extractNumbers(arr) {
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numbers.push(arr[i]);
    }
  }
  return numbers;
}
// b. Using a while loop and a variable, return all values that are strings

function extractStrings(arr) {
  let strings = [];
  let i = 0;
  while (i < arr.length) {
    if (typeof arr[i] === "string") {
      strings.push(arr[i]);
    }
    i++;
  }
  return strings;
}

// c. Using a do while loop, return the sum of all values in the array
function sumNumbersInArray(arr) {
  let sum = 0;
  let j = 0;
  do {
    if (typeof arr[j] === "number") {
      sum += arr[j];
    }
    j++;
  } while (j < arr.length);
  return sum;
}

// d. Using any looping structure of your choice and a variable, combine all the strings to form a proper greeting that follows the basic English grammar standards. Eg “Hello, Sarah, Thabo, and Mariah.”.
function combineStringsToGreeting(arr) {
  let greeting = "Hello ";
  let stringElements = [];
  for (var k = 0; k < arr.length; k++) {
    if (typeof arr[k] === "string") {
      stringElements.push(arr[k]);
    }
  }
  greeting += stringElements.join(", ") + ".";
  return greeting;
}

// e. Using any looping structure of your choice and a new variable, remove all values in the array that are strings
function removeStringsFromArray(arr) {
  return arr.filter(function (item) {
    return typeof item !== "string";
  });
}

console.log("Numbers from Mixed Array:", extractNumbers(mixedArray));
console.log("Strings from Mixed Array:", extractStrings(mixedArray));
console.log("Sum of Numbers in Mixed Array:", sumNumbersInArray(mixedArray));
console.log("Greeting:", combineStringsToGreeting(mixedArray));
console.log("Array without Strings:", removeStringsFromArray(mixedArray));
