// JavaScript specials

// code structure
// Statements are delimited with a semicolon:
alert('Hello'); alert('world');
// Usually, a line-break is also treated as a delimiter, so that would also work:
alert('Hello')
alert('World')
// That’s called “automatic semicolon insertion”. Sometimes it doesn’t work, for instance:
alert("There will be an error after this message")
[1, 2].forEach(alert)

function f(){
    // no semicolon needed after function declaration.
}
for(;;){
    // no semicolon needed after loop
}

// Strict mode
// To fully enable all features of modern JavaScript, we should start scripts with "use strict".
'use strict';

// Variables
/*
let
const
var
*/
// 8 data types:
// Number, bigint, string, boolean, null, undefined, object and symbol

// Interaction
// We’re using a browser as a working environment, so basic UI functions will be:
prompt(question, [default])
// Ask a question, and return either what the visitor entered or null if they clicked “cancel”.

confirm(question)
// Ask a question and suggest to choose between Ok and Cancel. The choice is returned as true/false.

// alert(message)
// Output a message

// All these functions are modal, they pause the code execution and prevent the visitor from interacting with the page until they answer.
let userName = prompt("Your name?", "Saurav");
let isTeaWanted = confirm("Do you want some tea?");

alert("Visitor: " + userName); // Saurav
alert("Tea wanted: " + isTeaWanted);

// Operators
// arithmetical -> *, +, -, /, %, **

// Assignmnets
// simple =
// combined *=, +=, -= ..etc

// Bitwise
// Bitwise operators work with 32-bit integers at the lowest, bit-level: see the docs when they are needed.

// Conditonal
// The only operator with three parameters: cond ? resultA : resultB. If cond is truthy, returns resultA, otherwise resultB.

// Logical operator
// Logical AND && and OR || perform short-circuit evaluation and then return the value where it stopped (not necessary true/false). Logical NOT ! converts the operand to boolean type and returns the inverse value.

// Nullish coalescing operator
// The ?? operator provides a way to choose a defined value from a list of variables. The result of a ?? b is a unless it’s null/undefined, then b.

// Comparison
// alert( 0 == false ); // true
// alert( 0 == '' ); // true

// Loops
// 1
while (condition) {
...
}
// 2
do {
...
} while (condition);
// 3
for(let i = 0; i < 10; i++) {
...
}

// The "switch" construct
let age = prompt('your age?', 18);
switch(age) {
    case 18:
        alert("Won't work"); // the result of prompt is a string, not a number
        break;

    case "18":
        alert('This works!');
        break;

    default:
        alert("Any value not equal to one above");
}

// Functions
//1. Function Declaration: the function in the main code flow
function sum(a,b){
    let result = a+b;
    return result;
}

//2. Function Expression: the function in the context of an expression
let sum = function(a,b) {
    let result = a+b;
    return result;
}

//3. Arrow function
// expression on the right side
let sum = (a,b) => a+b;
// or multi-line syntax with {...}, and need return here:
let sum = (a,b) => {
    // ...
    return a+b;
}
//without argument
let sayHi = () => alert('Hello');

// with a single argument
let double = n => n*2;

