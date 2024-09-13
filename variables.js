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