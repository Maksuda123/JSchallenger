//1. Check if two dates are equal

// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as argument
// It should return true if the dates are equal
// It should return false otherwise

function myFunction(a, b) {
  return a.getTime() === b.getTime();
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
); // false
console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
); // true
console.log(
  myFunction(new Date("2001/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
); // false

//2. Return the number of days between two dates

// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

function myFunction(a, b) {
  return Math.abs(a - b) / 1000 / 60 / 60 / 24;
}

//or
function myFunction(a, b) {
  const dif = Math.abs(a - b);
  return dif / 1000 / 60 / 60 / 24;
}

console.log(myFunction(new Date("2020-06-11"), new Date("2020-06-01"))); // 10
console.log(myFunction(new Date("2000-01-01"), new Date("2020-06-01"))); // 7457

//new Date() creates a new date object with the current date and time
//The Math.abs() function returns the absolute value of a number.

//3. Check if two dates fall on the exact same day

// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

function myFunction(a, b) {

  return a.getTime() === b.getTime();
}

//or
function myFunction(a, b) {
  return (a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate());
}

console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/01"))); // true
console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/02"))); // false
console.log(myFunction(new Date("2001/01/01"), new Date("2000/01/01"))); // false
console.log(myFunction(new Date("2000/11/01"), new Date("2000/01/01"))); // false

//4. Check if two dates are within 1 hour from each other

// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise

function myFunction(a, b) {
  return Math.abs(a - b) / 1000 / 60 <= 60;
}

//or
function myFunction(a, b) {
  return Math.abs(a.getTime() - b.getTime()) <= 60 * 60 * 1000;
}

//or
function myFunction(a, b) {
  return Math.abs(+a - +b) <= 60 * 60 * 1000;
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
); // true
console.log(
  myFunction(new Date("2000/01/01 09:00:00"), new Date("2000/01/01 08:45:00"))
); // true
console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 09:45:00"))
); // false
console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 09:00:00"))
); // true

//5. Check if one date is earlier than another

// Write a function that takes as argument an object with the properties a and b, each containing a date instance
// It should return true if date a is earlier than date b
// It should return false otherwise

function myFunction(obj) {
  return obj.a < obj.b ? true : false;
}

//or
function myFunction({ a, b }) {
  return a < b;
}

//or
function myFunction({ a, b }) {
  return +a < +b;
}

//or
function myFunction({ a, b }) {
  return a.getTime() < b.getTime();
}

console.log(
  myFunction({
    a: new Date("2000/01/01 08:00:00"),
    b: new Date("2000/01/01 08:45:00"),
  })
); // true
console.log(
  myFunction({
    a: new Date("2000/01/01 08:45:00"),
    b: new Date("2000/01/01 08:00:00"),
  })
); // false
console.log(
  myFunction({
    a: new Date("2000/01/01 08:00:00"),
    b: new Date("2000/01/01 08:00:00"),
  })
); // false

//6. Add n days to an existing date

// Write a function that takes as argument an object with the properties date and daysToAdd, containing a Javascript date and a number
// It should add daysToAdd days to the date and return the number of milliseconds since January 1, 1970, 00:00:00 UTC

function myFunction({ date, daysToAdd }) {
  return date.setDate(date.getDate() + daysToAdd);
}

//or
function myFunction({ date, daysToAdd }) {
  const currentDays = date.getDate();
  return date.setDate(currentDays + daysToAdd);
}

console.log(
  myFunction({ date: new Date(Date.UTC(2000, 01, 01)), daysToAdd: 31 })
); // 952041600000
console.log(
  myFunction({ date: new Date(Date.UTC(2000, 01, 01)), daysToAdd: 10 })
); // 950227200000
console.log(
  myFunction({ date: new Date(Date.UTC(2000, 02, 28)), daysToAdd: 2 })
); // 954374400000

//7. Calculate difference between two dates in hours, minutes, and seconds

// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds

function myFunction(a, b) {
  const hrs = Math.abs(a.getHours() - b.getHours());
  const min = Math.abs(a.getMinutes() - b.getMinutes());
  const sec = Math.abs(a.getSeconds() - b.getSeconds());
  return { hrs, min, sec };
}

//or
function myFunction(a, b) {
  const dif = Math.abs(a - b);
  const hrs = Math.floor(dif / 1000 / 60 / 60);
  const min = Math.floor(dif / 1000 / 60) % (hrs * 60 || 60);
  const sec = Math.floor(dif / 1000) % (min * 60 + hrs * 60 * 60 || 60);
  return { hrs, min, sec };
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:10"))
); // { hrs: 0, min: 45, sec: 10 }

console.log(
  myFunction(new Date("2000/01/01 09:50:23"), new Date("2000/01/01 08:00:00"))
); // { hrs: 1, min: 50, sec: 23 }

console.log(
  myFunction(new Date("2000/01/01 11:04:12"), new Date("2000/01/01 08:00:00"))
); // { hrs: 3, min: 4, sec: 12 }

//8. Return the next nearest quarter hour of a date

// Write a function that takes a Date instance as argument
// It should return the next nearest quarter hour in minutes
// For example, if the given date has the time 10:01 the function should return 15

function myFunction(date) {
  const quarter = 15 * 60 * 1000;
  const closestQuarter = new Date(Math.round(date / quarter) * quarter);
  const nextQuarter =
    closestQuarter.getTime() < date.getTime()
      ? new Date(closestQuarter.getTime() + quarter)
      : closestQuarter;
  return nextQuarter.getMinutes();
}

//or
function myFunction(date) {
  const min = date.getMinutes();
  for (let i = 15; i <= 60; i += 15) {
    if (i - min > 0 && min < 45) return i;
    else if (min > 45) return 0;
  }

console.log(myFunction(new Date(2021, 8, 10, 15, 14, 00))); // 15
console.log(myFunction(new Date(2021, 8, 10, 15, 31, 00))); // 45
console.log(myFunction(new Date(2021, 8, 10, 15, 47, 00))); // 0
