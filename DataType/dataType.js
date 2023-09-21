// no error
let message = 'hello';
message = 123456;

//Number
let n = 123;
n = 12.345;
// Numbers - Infinity, -Infinity and NaN.

alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
alert( "not a number" / 2 ); // NaN, such division

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

//String
let str = "Hello"; // Double quotes
let str2 = 'Single quotes are ok too'; // Single quotes
let phrase = `can embed another ${str}`; // Backticks


//Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
let name = "Saurav Jha";
// embed a variable
alert(`Hello, ${name}!!!`); // Hello, Saurav Jha!!!
//embed an expression
alert(`the result is ${1+2}`); // the result is 3

//Boolean
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")

// null  value
// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.
let age1 = null;

//Undefined Value
let age;
alert(age);
// Technically, it is possible to explicitly assign undefined to a variable:
let age2 = 100;
// change the value to undefined
age = undefined;
alert(age); // "undefined"

//typeof operator
// The typeof operator returns the type of the operand
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)

