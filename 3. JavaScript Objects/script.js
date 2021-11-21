//1. Accessing object properties one

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

function myFunction(obj) {

  return obj.country;
}

console.log(myFunction({ continent: "Asia", country: "Japan" })); // 'Japan'
console.log(myFunction({ country: "Sweden", continent: "Europe" })); // 'Sweden'

//2. Accessing object properties two

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor

function myFunction(obj) {

  return obj["prop-2"];
}

console.log(myFunction({ one: 1, "prop-2": 2 })); // 2
console.log(myFunction({ "prop-2": "two", prop: "test" })); // 'two'

//3. Accessing object properties three

// Write a function that takes a string and an object with two properties as arguments
// It should return the value of the property with key equal to the value of the string

function myFunction(obj, str) {

  return obj[str];
}

console.log(myFunction({ continent: "Asia", country: "Japan" }, "continent")); // 'Asia'
console.log(myFunction({ country: "Sweden", continent: "Europe" }, "country")); // 'Sweden'

//4. Remove a property from an object

// Write a function that takes an object as argument
// It should return an object with all original object properties but the property with key 'country'

function myFunction(obj) {
  const { country, ...rest } = obj;
  return rest;
}

console.log(
  myFunction({ continent: "Asia", country: "Japan", region: "Kansai" })
); // { continent: 'Asia', region: 'Kansai' }

console.log(
  myFunction({ country: "Sweden", continent: "Europe", planet: "Earth" })
); // { continent: 'Europe', planet: 'Earth' }

console.log(
  myFunction({
    city: "Sacramento",
    state: "California",
    country: "USA",
    continent: "North America",
  })
); // { city: 'Sacramento', state: 'California', continent: 'North America' }

//5. Merge two objects with matching keys

// Write a function that takes two objects as arguments
// Unfortunately, the property 'country' in the second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'

function myFunction(a, b) {

  const { country, ...rest } = b;
  return { ...a, ...rest, city: country };
}

//or
function myFunction(a, b) {
  for (let key in b)
    if (key === "country") {
      b.city = b[key];
      delete b[key];
    }
  return { ...a, ...b };
}

console.log(
  myFunction(
    { continent: "Europe", country: "Germany" },
    { planet: "Earth", country: "Munich", state: "Bavaria" }
  )
); // { continent: 'Europe', country: 'Germany', planet: 'Earth', state: 'Bavaria', city: 'Munich'}

console.log(
  myFunction(
    { continent: "North America", country: "USA" },
    { planet: "Earth", country: "Los Angeles", state: "California" }
  )
); // { continent: 'North America', country: 'USA', planet: 'Earth', state: 'California', city: 'Los Angeles'}

//The JavaScript for in statement loops through the properties of an Object
//The forEach() method calls a function (a callback function) once for each array element.

//6. Swap object keys and values

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function myFunction(obj) {
  const res = {};
  for (let key in obj) res[obj[key]] = key;
  return res;
}
//or
function myFunction(obj) {
  return Object.keys(obj).reduce((acc, cur) => {
    return { ...acc, [obj[cur]]: cur };
}, {});
}

console.log(
  myFunction({ bear: "animal", sow: "female", boar: "male", cub: "young" })
); // { animal: 'bear', female: 'sow', male: 'boar', young: 'cub' }

console.log(
  myFunction({ sheep: "animal", ewe: "female", ram: "male", lamb: "young" })
); // { animal: 'sheep', female: 'ewe', male: 'ram', young: 'lamb' }

console.log(myFunction({ Berlin: "city", Germany: "country" })); // { city: 'Berlin', country: 'Germany' }

//7. Replace empty strings in object with null values

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

// function myFunction(obj) {
//   for (let key in obj)
//     (obj[key] === "" || obj[key] === " ") && (obj[key] = null);
//   return obj;
// }

//or
function myFunction(obj) {
  const newObj = { ...obj };
  for (key in newObj) {
    if (newObj[key].trim() === "") newObj[key] = null;
  }
  return newObj;
}

console.log(myFunction({ a: "a", b: "b", c: "" })); // { a: 'a', b: 'b', c: null }

console.log(myFunction({ a: "", b: "b", c: " ", d: "d" })); // { a: null, b: 'b', c: null, d: 'd' }

console.log(myFunction({ a: "a", b: "b ", c: " ", d: "" })); // { a: 'a', b: 'b ', c: null, d: null }

//Spread Operator
// JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
// Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.
// let objClone = { ...obj }; // pass all key:value pairs from an object
// let obj = {'key1': 'value1'};  let array = [...obj]; // TypeError: obj is not iterable

//Rest Parameters
//Using rest parameters in combination with ordinary parameters
//Array methods can be used on rest parameters, but not on the arguments object
//The arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly;
//The ...restParam bundles all the extra parameters into a single array
//The rest parameter must be the last parameter in the function definition.
//Rest parameters were introduced to reduce the boilerplate code that was commonly used for converting a set of arguments to an array.

//Rest Parameters Example
function fun1(...theArgs) {
  console.log(theArgs.length);
}
fun1(5, 6, 7);
//output: 3
//Without Rest Parameters Example
function fun1(theArgs) {
  console.log(theArgs.length);
}
fun1(5, 6, 7);
//output: undefine

//8. Extracting information from objects

// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

function myFunction(obj) {
  return {
    fn: obj.fn,
    ln: obj.ln,
    ...(obj.size && { size: `${obj.size}cm` }),
    ...(obj.weight && { weight: `${obj.weight}kg` }),
  };
}

//or
function myFunction(obj) {
  const { fn, ln, size, weight, ...rest } = obj;
  const newObj = { fn, ln };
  if (size) newObj.size = `${size}cm`;
  if (weight) newObj.weight = `${weight}kg`;
  return newObj;
}

console.log(
  myFunction({ fn: "Lisa", ln: "Müller", age: 17, size: 175, weight: 67 })
); // {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}

console.log(
  myFunction({
    fn: "Martin",
    ln: "Harper",
    age: 26,
    email: "martin.harper@test.de",
    weight: 102,
  })
); // {fn: 'Martin', ln: 'Harper', weight: '102kg'}

console.log(
  myFunction({ fn: "Andrew", ln: "Harper", age: 81, size: 175, weight: 71 })
); // {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}

console.log(
  myFunction({
    fn: "Matthew",
    ln: "Müller",
    age: 19,
    email: "matthew@mueller.de",
  })
); // {fn: 'Matthew', ln: 'Müller'}


//9. Add property to each object in array

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

function myFunction(arr, str) {

    return arr.map((obj) => ({ ...obj, continent: str }));
}

//or
function myFunction(arr, str) {
    arr.map((obj) => (obj.continent = str));
    return arr;
}

console.log(
  myFunction(
    [
      { city: "Tokyo", country: "Japan" },
      { city: "Bangkok", country: "Thailand" },
    ],
    "Asia"
  )
); // [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

console.log(
  myFunction(
    [
      { city: "Stockholm", country: "Sweden" },
      { city: "Paris", country: "France" },
    ],
    "Europe"
  )
); // [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

 

//Map()
//map() creates a new array from calling a function for every array element. map() calls a function once for each element in an array. map() does not execute the function for empty elements. map() does not change the original array.
//You shouldn't be using map if:
// you're not using the array it returns; and/or
// you're not returning a value from the callback.

//Using map to reformat objects in an array. Example
let kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value
    return rObj
})
console.log(reformattedArray);
//output: [{1: 10}, {2: 20}, {3: 30}]