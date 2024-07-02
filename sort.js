// Given array
const numbers = [
    3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190,
    210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230,
    210, 100, 23, 980
  ];
  
  // Sort numbers from lowest to highest
  const sortedLowestToHighest = numbers.slice().sort((a, b) => a - b);
  
  // Sort numbers from highest to lowest
  const sortedHighestToLowest = numbers.slice().sort((a, b) => b - a);
  
  // Return an array of unique numbers
  const uniqueNumbers = numbers.filter((value, index, self) => self.indexOf(value) === index);
  
  // Calculate the sum of all numbers
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  
  // Displaying results
  console.log('Original Array:', numbers);
  console.log('Sorted (Lowest to Highest):', sortedLowestToHighest);
  console.log('Sorted (Highest to Lowest):', sortedHighestToLowest);
  console.log('Unique Numbers:', uniqueNumbers);
  console.log('Sum of Numbers:', sum);
  