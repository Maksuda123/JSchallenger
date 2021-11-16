//1. Check if all array elements are equal

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function myFunction(arr) {
  return arr.every((el) => el === arr[0]);
}

//or
function myFunction(arr) {
  return new Set(arr).size === 1;
}

console.log(myFunction([true, true, true, true])); // true
console.log(myFunction(["test", "test", "test"])); // true
console.log(myFunction([1, 1, 1, 2])); // false
console.log(myFunction(["10", 10, 10, 10])); // false

// every((element, index, array) => { ... } )
// every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

//The size accessor property returns the number of (unique) elements in a Set object.The size accessor property returns the number of (unique) elements in a Set object.

//2. Sort an array of numbers in descending order

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

function myFunction(arr) {
  return arr.sort().reverse();
}

//or
function myFunction(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(myFunction([1, 3, 2])); // [3,2,1]
console.log(myFunction([4, 2, 3, 1])); // [4,3,2,1]

//3. Sort an array of strings alphabetically

// Write a function that takes an array of strings as argument
// It should return the array with its values sorted alphabetically

function myFunction(arr) {
  return arr.sort();
}

console.log(myFunction(["b", "c", "d", "a"])); // ['a', 'b', 'c', 'd']
console.log(myFunction(["z", "c", "d", "a", "y", "a", "w"])); // ['a', 'a', 'c', 'd', 'w', 'y', 'z']

//4. Return the average of an array of numbers

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function myFunction(arr) {
  const result =
    arr.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    ) / arr.length;
  return result;
}

console.log(myFunction([10, 100, 40])); // 50
console.log(myFunction([10, 100, 1000])); // 370
console.log(myFunction([-50, 0, 50, 200])); // 50
// //syntax: reduce((previousValue, currentValue, currentIndex, array) => { ... } )

//5. Return the longest string from an array of strings

// Write a function that takes an array of strings as argument
// It should return the longest string

function myFunction(arr) {
  return arr.reduce((preValue, currValue) =>
    preValue.length <= currValue.length ? currValue : preValue
  );
}

console.log(myFunction(["help", "me"])); // 'help'
console.log(myFunction(["I", "need", "candy"])); // 'candy'

//6. Merge an arbitrary number of arrays

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

function myFunction(...arr) {
  return arr.flat();
}

console.log(myFunction([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(myFunction(["a", "b", "c"], [4, 5, 6])); // ['a', 'b', 'c', 4, 5, 6]
console.log(myFunction([true, true], [1, 2], ["a", "b"])); // [true, true, 1, 2, 'a', 'b']

//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

//7. Remove a specific array element

// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version

function myFunction(arry, val) {
  return arry.filter((el) => el !== val);
}

console.log(myFunction([1, 2, 3], 2)); // [1, 3]
console.log(myFunction([1, 2, "2"], "2")); // [1, 2]
console.log(myFunction([false, "2", 1], false)); // ['2', 1]
console.log(myFunction([1, 2, "2", 1], 1)); // [2, '2']

//8. Merge two arrays with duplicate values

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

function myFunction(a, b) {
  return [...new Set([...a, ...b])].sort((a, b) => a - b);
}

//or
function myFunction(a, b) {
  return Array.from(new Set([...a, ...b])).sort((a, b) => a - b);
}

console.log(myFunction([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); // [-11, -10, 5, 22, 41,  42, 333]

//9. Sum up all array elements with values greater than

// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum

function myFunction(arr, num) {
  return arr.filter((el) => el > num).reduce((pre, curr) => pre + curr);
}

//or
function myFunction(arr, num) {
  return arr.reduce((sum, curr) => {
    if (curr > num) return sum + curr;
    return sum;
  }, 0);
}

console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2)); // 25
console.log(myFunction([-10, -11, -3, 1, -4], -3)); // 1
console.log(myFunction([78, 99, 100, 101, 401], 99)); // 602

//10. Create a range of numbers

// Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max

function myFunction(min, max) {
  let arr = [];

  for (let i = min; i <= max; i++) arr.push(i);
  return arr;
}

console.log(myFunction(2, 10)); // [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myFunction(1, 3)); // [1, 2, 3]
console.log(myFunction(-5, 5)); // [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(myFunction(2, 7)); // [2, 3, 4, 5, 6, 7]

//11. Return last n array elements

// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all

function myFunction(arr, n) {
  return arr.slice(-n);
}

console.log(myFunction([1, 2, 3, 4, 5], 2)); // [4, 5]
console.log(myFunction([1, 2, 3], 6)); // [1, 2, 3]
console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [6, 7, 8]

//Note: const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// slice() returns selected elements in an array, as a new array.

// slice() selects from a given start, up to a (not inclusive) given end.

// slice() does not change the original array.

//12. Group array of strings by first letter.

// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}
