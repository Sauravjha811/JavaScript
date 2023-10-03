// Curly Braces
if (conditon) {
    // do this
    // ... and that
    // ... and that
}

// Beginners sometimes do that.Bad! Curly braces are not needed:
if (n < 0) {alert(`Power ${n} is not supported`);} // wrong
if (n < 0) alert(`Power ${n} is not supported`); // correct

// Split to a separate line without braces. Never do that, easy to make an 
// error when adding new lines.
if (n < 0)
  alert(`power ${n} is not supported`); // wrong

if (n < 0) {
    alert(`Power ${n} is not supported`);
} // correct
// For a very brief code, one line is allowed, e.g. if (cond) return null. But a code block (the last variant) is usually more readable.

// Line Length
// No one likes to read a long horizontal line of code. It’s best practice to split them.

// backtick quotes ` allow to split the string into multiple lines
let str = `
ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;

// And for if statement
if (
    id === 123 &&
    moonPhase === 'Warning Gibbous' &&
    zodiacSign === 'Libra'
) {
    // Execution something
}
// The maximum line length should be agreed upon at the team-level. It’s usually 80 or 120 characters.

// Indents
// Two types: Horizontal indents: 2 or 4 spaces
// One advantage of spaces over tabs is that spaces allow more flexible configurations of indents than the tab symbol.s
show(parameters,
    aligned, // 5 spaces padding at the left
    one,
    after,
    another
 ) {
 // ...
}

// Vertical indents: empty lines for splitting code into logical blocks.
// Even a single function can often be divided into logical blocks. In the example below, the initialization of variables, the main loop and returning the result are split vertically:

function pow(x, n) {
    let result = 1;
    //      vertical indentation
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    //     vertical indentation
    return result;
}

// Nesting levels
for (let i = 0; i < 10; i++) {
    if (cond) {
        // -> one more  nesting level
    }
}

for (let i = 0; i < 10; i++) {
    if (!cond) continue;
       // -> no extra nesting level
}

// A similar thing can be done with if/else and return.
// For example, two constructs below are identical.

function pow(x, n) {
    if (n < 0) {
        alert("Negative 'n' is not supported");
    } else {
        let result = 1;

        for (let i = 0; i < n; i++) {
            result *= x;
        }

        return result;
    }
}

function pow(x, n) {
    if (n < 0) {
        alert("Negative 'n' not supported");
        return;
    }

    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}
// The second one is more readable because the “special case” of n < 0 is handled early on. Once the check is done we can move on to the “main” code flow without the need for additional nesting.

// Function placement
// If you are writing several “helper” functions and the code that uses them, there are three ways to organize the functions.

// 1. Declare the function above the code that uses them:
function createElement() {
    ...
}

function setHandler(elem) {
    ...
}

function walkAround() {
    ...
}

// the code which uses them
let elem = createElement();
setHandler(elem);
walkAround();

// 2. Code first, then functions
// the code which uses the functions
let elem1 =  createElement();
setHandler(elem1);
walkAround();

// ---- helper functions ----
function createElement() {
    ...
}

function setHandler(elem) {
    ...
}
  
function walkAround() {
    ...
}

// 3. Mixed: a function is declared whre it's first used.
// Most of time, the second variant is preferred.
// That’s because when reading code, we first want to know what it does. If the code goes first, then it becomes clear from the start. Then, maybe we won’t need to read the functions at all, especially if their names are descriptive of what they actually do.

// Automated Linters
// Linters are tools that can automatically check the style of your code and make improving suggestions.
/* Here are some well-known linting tools:
JSLint – one of the first linters.
JSHint – more settings than JSLint.
ESLint – probably the newest one.
*/

// Exercise
function pow(x, n) {
    let result = 1;

    for(let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if(n <= 0) {
    alert(
    `
      Power ${n} is not supported, 
      please enter an integer number 
      greater than zero
    `
    );
} else {
    alert( pow(x, n));
}