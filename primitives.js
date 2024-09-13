// Question 1: Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and undefined types using (when possible) literals and constructor functions.

let b1 = true;
let b2 = Boolean(false);

let n1 = 23;
let n2 = Number('3.14');

let bi1 = 43n;
let bi2 = BigInt('98765432109876543210');

let s1 = 'Hello, World!';
let s2 = String('123');

let un = undefined;

// Question 2: Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single console.log call, e.g. in the following form: 1000 [number].

console.log(`${b1} [${typeof b1}]`);
console.log(`${b2} [${typeof b2}]`);

console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);

console.log(`${bi1} [${typeof bi1}]`);
console.log(`${bi2} [${typeof bi2}]`);

console.log(`${s1} [${typeof s1}]`);
console.log(`${s2} [${typeof s2}]`);

console.log(`${un} [${typeof un}]`);

// Question 3: Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?

let b = Boolean(BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`);

// Question 4: Try adding two values of the same type and check the result type. Try it for all primitive types.

let sumOfTwoBooleans = true + false;
let sumOfTwoNumbers = 2 + 3.14;
let sumOfTwoBigInts = 43n + 98765432109876543210n;
let sumOfTwoStrings = '123' + '456';
let sumOfTwoUndefineds = undefined + undefined;

console.log(`true + false = ${sumOfTwoBooleans} [${typeof sumOfTwoBooleans}]`);
console.log(`2 + 3.14 = ${sumOfTwoNumbers} [${typeof sumOfTwoNumbers}]`);
console.log(`43n + 98765432109876543210n = ${sumOfTwoBigInts} [${typeof sumOfTwoBigInts}]`);
console.log(`'123' + '456' = ${sumOfTwoStrings} [${typeof sumOfTwoStrings}]`);
console.log(`undefined + undefined = ${sumOfTwoUndefineds} [${typeof sumOfTwoUndefineds}]`);

// Question 5: Try adding two values of different types and check the results.

let sumOfBooleanAndNumber = true + 3.14;
// let sumOfBooleanAndBigInt = true + 43n; // -> error
let sumOfBooleanAndString = true + '456';
let sumOfBooleanAndUndefined = true + undefined;

console.log(`true + 3.14 = ${sumOfBooleanAndNumber} [${typeof sumOfBooleanAndNumber}]`);
// console.log(`true + 43n = ${sumOfBooleanAndBigInt} [${typeof sumOfBooleanAndBigInt}]`); // -> error
console.log(`true + '456' = ${sumOfBooleanAndString} [${typeof sumOfBooleanAndString}]`);
console.log(`true + undefined = ${sumOfBooleanAndUndefined} [${typeof sumOfBooleanAndUndefined}]`);

// let sumOfNumberAndBigInt = 3.14 + 10n; // -> error
let sumOfNumberAndString = 3.14 + '456';
let sumOfNumberAndUndefined = 3.14 + undefined;

// console.log(`3.14 + 10n = ${sumOfNumberAndBigInt} [${typeof sumOfNumberAndBigInt}]`); // -> error
console.log(`3.14 + '456' = ${sumOfNumberAndString} [${typeof sumOfNumberAndString}]`);
console.log(`3.14 + undefined = ${sumOfNumberAndUndefined} [${typeof sumOfNumberAndUndefined}]`);

let sumOfBigIntAndString = 10n + '456';
// let sumOfBigIntAndUndefined = 10n + undefined; // -> error

console.log(`10n + '456' = ${sumOfBigIntAndString} [${typeof sumOfBigIntAndString}]`);
// console.log(`10n + undefined = ${sumOfBigIntAndUndefined} [${typeof sumOfBigIntAndUndefined}]`); // -> error

let sumOfStringAndUndefined = '456' + undefined;

console.log(`'456' + undefined = ${sumOfStringAndUndefined} [${typeof sumOfStringAndUndefined}]`);

// Question 6: Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1).

const str1 = 42 + +"1";
console.log(str1); // -> 43
