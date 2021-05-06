/*
let js = "JavaScript is amazing!";
console.log(63 - 19 - 2);

let firstName = "Peter";
console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Peter');

javascriptIsFun = 'YES!';

console.log(typeof javascriptIsFun);

let year;

console.log(year);
console.log(typeof year);

year = 1991;

console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1984;
// birthYear = 1985;

// const job;

var job = 'Programmer';
job = 'Teacher';

lastName = 'Smith';
console.log(lastName);

// Math operators
const nowYear = 2037;
const ageJonas = nowYear - 1991;
const ageSarah = nowYear - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 (2^3 or 2 * 2 * 2 = 8)

const firstName = 'John';
const lastName = 'Smith';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 equals 25
x *= 4; // x = x * 4 equals 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // <, >, <=, >=
const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(nowYear - 1991 > nowYear - 2018);

const nowYear = 2037;
const ageJonas = nowYear - 1991;
const ageSarah = nowYear - 2018;

console.log(nowYear - 1991 > nowYear - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y)

const averaAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averaAge);

*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

/*

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn);
console.log(markHigherBMI);

----------

const firstName = 'John';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const john = "I'm " + firstName + ", a " + (year - birthYear) + "-year-old " + job + "!";
console.log(john);

const johnNew = `I'm ${firstName}, a ${year - birthYear}-year-old ${job}!`;
console.log(johnNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`Template string with
multitple
lines`);

*/

const age = 15;
const drivingAge = 18;
const yearsLeft = drivingAge - age;

if (yearsLeft <= 0) {
    console.log('Sarah can start her driving license 🚗.');
} else {
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
