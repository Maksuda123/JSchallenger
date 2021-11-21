// 1. Return the percentage of a number

// Write a function that takes an object with the properties number and percentage as argument
// Return the given percentage of the number

function myFunction(obj) {
  const dividateResut = obj.percentage / 100;
  return (dividateResut * obj.number).toFixed(2);
}

//or
function myFunction(obj) {
  const halfResult = obj.number * obj.percentage;
  return halfResult / 100;
}

//or
function myFunction({ number, percentage }) {
  return (number / 100) * percentage;
}

console.log(myFunction({ number: 100, percentage: 50 })); // 50
console.log(myFunction({ number: 777, percentage: 2 })); // 15.54
console.log(myFunction({ number: 500, percentage: 99 })); // 495

// 2. Check if a number is even
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

function myFunction(number) {
  return number % 2 === 0 ? true : false;
}

console.log(myFunction(10)); // true
console.log(myFunction(-4)); // true
console.log(myFunction(5)); // false
console.log(myFunction(-111)); // false

// 3. How many times does a character occur?
// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

function myFunction(letter, string) {
  let letterCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (letter == string[i]) {
      letterCount += 1;
    }
  }
  return letterCount;
}

console.log(
  myFunction("m", "How many times does the character occur in this sentence?")
); // 2
console.log(
  myFunction("h", "How many times does the character occur in this sentence?")
); // 4
console.log(
  myFunction("z", "How many times does the character occur in this sentence?")
); // 0

//4. Check if a number is a whole number
// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false

// function myFunction(num) {
//   return num === Math.floor(num);
// }

//or
function myFunction(num) {
  return num - Math.floor(num) === 0;
}

console.log(myFunction(4)); // true
console.log(myFunction(1.123)); // false
console.log(myFunction(1048)); // true
console.log(myFunction(10.48)); // false

//5. Multiplication, division, and comparison operators
// Write a function that takes two numbers, say a and b, as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

function myFunction(num1, num2) {
  if (num1 < num2) {
    return (result1 = num1 / num2);
  } else {
    return (result2 = num1 * num2);
  }
}

//or
function myFunction(num1, num2) {
  return num1 < num2 ? num1 / num2 : num1 * num2;
}

console.log(myFunction(10, 100)); // 0.1
console.log(myFunction(90, 45)); // 4050
console.log(myFunction(8, 20)); // 0.4
console.log(myFunction(2, 0.5)); // 1

//6. Check whether a string contains another string and concatenate
// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction(a, b) {
  return a.includes(b) ? b + a : a + b;
}

//or
function myFunction(a, b) {
  return a.indexOf(b) !== -1 ? b + a : a + b;
}

console.log(myFunction("cheese", "cake")); // "cheesecake"
console.log(myFunction("lips", "s")); // "slips"
console.log(myFunction("Java", "script")); // "Javascript"
console.log(myFunction(" think, therefore I am", "I")); // 'I think, therefore I am'

//7. Split a number into its digits
// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction(numbers) {
  let array = numbers.toString().split(""); //stringify the number, then make each digit an item in an array
  return array.map((num) => parseInt(num)); //convert all the items back into numbers
}

//or
function myFunction(num) {
  const arr = num.toString().split("");
  return arr.map((num) => +num);
}

//or
function myFunction(num) {
  const string = num + "";
  const strings = string.split("");
  return strings.map((digit) => Number(digit));
}

console.log(myFunction(193278)); // [1,9,3,2,7,8]

//8. Clear up the chaos behind these strings
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(str1, str2) {
  const string1 = str1
    .split("")
    .map((st1) => st1.replace("%", ""))
    .join("");
  const string2 = str2
    .split("")
    .reverse()
    .map((st2) => st2.replace("%", ""))
    .join("");

  return string1 + string2;
}

console.log(myFunction("java", "tpi%rcs")); // 'Javascript'
console.log(myFunction("c%ountry", "edis")); // 'Countryside'
console.log(myFunction("do%wn", "nw%ot")); // 'Downtown'

//9. Return the next higher prime number
// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number

function myFunction(input) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  let n = input;
  while (!isPrime(n)) n++;
  return n;
}
//or
function myFunction(num) {
  let counter = 0;
  do {
    counter = 0;
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) counter++;
    }
    num++;
  } while (counter > 1);
  return num - 1;
}

//or
function myFunction(number) {
  function checkPrime(number) {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  if (checkPrime(number)) {
    return number;
  } else {
    while (checkPrime(number) === false) {
      number++;
    }
  }
  return number;
}
console.log(myFunction(38)); // 41
console.log(myFunction(7)); // 7
console.log(myFunction(115)); // 127
console.log(myFunction(2000)); // 2003

//10. Find next higher natural number that is divisble by y
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

function myFunction(a, b) {
  while (a % b !== 0) a++;
  return a;
}
console.log(myFunction(1, 23)); // 23
console.log(myFunction(23, 23)); // 23
console.log(myFunction(7, 3)); // 9
console.log(myFunction(-5, 7)); // 0

//11.Round a number to 2 decimal places
// Write a function that takes a number as argument
// Round the number to the 2nd digit after the comma
// Return the rounded number

function myFunction(number) {
  return Number(number.toFixed(2));
}

//or
function myFunction(number) {
  return Math.round(number * 100) / 100;
}

console.log(myFunction(2.12397)); // 2.12
console.log(myFunction(3.136)); // 3.14
console.log(myFunction(26.1379)); // 26.14

//12.Comparison operators, strict equality
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

function myFunction(a, b) {
  return a === b ? true : false;
}

//or
function myFunction(a, b) {
  return a === b;
}

console.log(myFunction(2, 3)); // false
console.log(myFunction(3, 3)); // true
console.log(myFunction(1, "1")); // false
console.log(myFunction("10", "10")); // true

//13. Find the correct word by incrementing letters in alphabet
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

//In JavaScript, fromCharCode() is a string method that is used to create a string from a sequence of Unicode values.

//In JavaScript, charCodeAt() is a string method that is used to retrieve a Unicode value for a character at a specific position in a string.

function myFunction(str) {
  return str
    .split("")
    .map((str) => String.fromCharCode(str.charCodeAt() + 1))
    .join("");
}

//or
function myFunction(string) {
  const arr = [...string];
  const correctedArray = arr.map((e) =>
    String.fromCharCode(e.charCodeAt() + 1)
  );
  return correctedArray.join("");
}

console.log(myFunction("bnchmf")); // 'coding'
console.log(myFunction("bgddrd")); // 'cheese'
console.log(myFunction("sdrshmf")); // 'testing'
