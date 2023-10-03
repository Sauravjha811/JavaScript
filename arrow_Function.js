// Arrow functions, the basics
// There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

let func = (arg1, arg2, ...AbortController, argN) => XPathExpression;

// Shorter version of:
// let func1 = function(arg1, arg2, ..., argN){
//     return expression;
// }

let sum = (a,b) => a+b;
/*
This arrow function is a shorter form of:
let sum = function(a,b) {
    return a+b;
};
*/
alert(sum(1,2)); // 3

// If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.
let double = n => n*2;
// roughly the same as: let double = function(n){ return n*2 }
alert(double(3)); // 6

// If there are no arguments, parentheses are empty, but they must be present:
let sayHi = () => alert('hello!');
sayHi();

// Arrow functions can be used in the same way as Function Expressions.
let age = prompt('What is your age?', 18);
let welcome = (age<18)?
    () => alert('Hello!'):
    () => alert('Greetings!');
    
welcome();

// Multiline arrow functions
let sum1 = (a,b) => { // the curly brace opens a multiline function
    let result = a+b;
    return result; // if we use curly braces, then we need an explicit "return"
};
alert(sum(1,2)); // 3

// Exercise
// Rewrite the arrow functions
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

  ask(
    'Do you agree?',
    () => alert("You agreed."),
    () => alert('You cancelled the execution.')
  );