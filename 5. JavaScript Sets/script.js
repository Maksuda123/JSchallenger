//1. Check if value is present in Set

// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set

function myFunction(set, val) {
  return set.has(val);
}

console.log(myFunction(new Set([1, 2, 3]), 2)); // true
console.log(myFunction(new Set([123]), 2)); // false
console.log(myFunction(new Set(["1", "2", "3"]), "2")); // true
console.log(myFunction(new Set("123"), "2")); // true

//2. Convert a Set to Array

// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array

function myFunction(set) {
  return [...set];
}

console.log(myFunction(new Set([1, 2, 3]))); // [1, 2, 3]

console.log(myFunction(new Set([123]))); // [123]

console.log(myFunction(new Set(["1", "2", "3"]))); // ['1', '2', '3']

console.log(myFunction(new Set("123"))); // ['1', '2', '3']

//3. Get union of two sets

// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code

function myFunction(a, b) {
  const result = new Set(a);
  b.forEach((el) => result.add(el));
  return result;
}

//or
function myFunction(a, b) {
  for (let el of b) a.add(el);
  return a;
}

console.log(myFunction(new Set("123"), new Set("234"))); // new Set('1234')

console.log(myFunction(new Set([1, 2, 3]), new Set([3, 4, 5]))); // new Set([1, 2, 3, 4, 5])

console.log(
  myFunction(new Set([false, false, NaN]), new Set([true, true, NaN]))
); // new Set([false, NaN, true])

//4. Creating Javascript Sets

// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result

function myFunction(a, b, c) {
  const set = new Set();
  set.add(a);
  set.add(b);
  set.add(c);
  return set;
}

//or
function myFunction(a, b, c) {
  return new Set([a, b, c]);   //transform an array into set using reguler Set constructure
}

console.log(myFunction(1, "b", 3)); // Set {1, 'b', 3}

console.log(myFunction(NaN, null, false)); // Set {NaN, null, false}

console.log(myFunction("a", ["b"], { c: 3 })); // Set {'a', ['b'], { c: 3 }

//5. Delete element from Set

// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result

function myFunction(set, val) {
  set.delete(val);
  return set;
}

console.log(myFunction(new Set([1, 2, 3]), 1)); // new Set([2, 3])

console.log(myFunction(new Set("12345"), "3")); // new Set(['1', '2', '4', '5'])

console.log(myFunction(new Set([1, 2, 3]), 4)); // new Set([1, 2, 3])

//6. Add multiple elements to Set

// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set

function myFunction(set, arr) {
  arr.forEach((el) => set.add(el));
  return set;
}

console.log(myFunction(new Set([1, 2, 3]), [4, 5, 6])); // new Set([1, 2, 3, 4, 5, 6 ])

console.log(myFunction(new Set("12345"), [..."6789"])); // new Set([...'123456789'])

console.log(myFunction(new Set([1, 2, 3]), [2, 3])); // new Set([1, 2, 3])

//7. Get Intersection of two Javascript Sets

// Write a function that takes two sets, say setA and setB, as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in setA as well as setB

function myFunction(setA, setB) {
  const set = new Set();
  setB.forEach((el) => setA.has(el) && set.add(el));
  return set;
}

console.log(myFunction(new Set([1, 2, 3]), new Set([4, 5, 6]))); // new Set()

console.log(myFunction(new Set("12345"), new Set([..."45678"]))); // new Set('45')

console.log(myFunction(new Set([1, 2, 3]), new Set([2, 3, 4]))); // new Set([2, 3])
