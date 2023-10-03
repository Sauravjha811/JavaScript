// function declaration
function sayHi() {
    alert('Hello');
}

// function Expression
let sayHi = function(){
    alert("Hello");
}
// As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.

// function is a value
function sayHi() {
    alert('Hello');
}
alert(sayHi); // shows the function code

// We can copy a function to another variable:
function sayHi() { // 1. create
    alert("Hello");
}
let func = sayHi; // 2. copy
func(); // Hello  // 3. run the copy (it works)!
sayHi();  // Hello 

// We could also have used a Function Expression to declare sayHi, in the first line:
let sayHi = function() { // 1. create
    alert('Hello');
};
let func1 = sayHi;

// Why is there a semicolon at the end?
function sayHi() {
    // ...
  }
  
  let sayHi = function() {
    // ...
  };
// The answer is simple: a Function Expression is created here as function(…) {…} inside the assignment statement: let sayHi = …;. The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.
//The semicolon would be there for a simpler assignment, such as let sayHi = 5;, and it’s also there for a function assignment.

// Callback functions
// Let’s look at more examples of passing functions as values and using function expressions.

function ask(question, yes, no){
    if(confirm(question)) yes()
    else no();
}
function showOk(){
    alert('You agreed.');
}
function showCancel() {
    alert('You cancelled the execution.');
}
// usage: function showOk, showCancel are passed as agrument to ask
ask("Do you agree?", showOk, showCancel);

// The arguments showOk and showCancel of ask are called callback functions or just callbacks.

// We can use Function Expressions to write an equivalent, shorter function:
function ask(question, yes, no){
    if(confirm(question)) yes()
    else no();
}
ask(
    "Do you agree?",
    function() { alert("You agreed.")},
    function() { alert("You cancelled the execution.")}
);
// Here, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here.

// Function expression vs Function declaration

// First, the syntax: how to differentiate between them in the code.
// Function Declaration: a function, declared as a separate statement, in the main code flow:

// function Declaration
function sum(a,b){
    return a + b;
}

// function expression
let sum = function(a,b) {
    return a + b;
};

// A Function Expression is created when the execution reaches it and is usable only from that moment.
// A Function Declaration can be called earlier than it is defined.

sayHi("John");  
function sayHi(name){ // Hello, John
    alert(`Hello, ${name}`);
}

sayHi('Saurav'); // error!
let sayHi = function(name) { // (*) no magic any more
    alert(`hello, ${name}`);
}
 
// If we use Function Declaration, it won’t work as intended:
let age = prompt("What is your age?", 18);
// conditionally declare a function
if(age < 18) {
    function welcome() {
        alert("Hello!");
    }
}
else {
    function welcome(){
        alert("Greetings!");
    }
}
// ... use it later
welcome(); // Error: welcome is not defined.
// That’s because a Function Declaration is only visible inside the code block in which it resides.

let age1 = 16; // take 16 as an example
if (age < 18) {
    welcome();               // \   (runs)
                             //  |
    function welcome() {     //  |
      alert("Hello!");       //  |  Function Declaration is available
    }                        //  |  everywhere in the block where it's declared
                             //  |
    welcome();               // /   (runs)  
}
else {
    function welcome() {
        alert("Greetings!");
    }
}
// Here we're out of curly braces.
// so we can not see Function Declarations made inside of them.
welcome(); // Error: welcome is not defined

// What can we do to make welcome visible outside of if?
// The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.

let age2 = prompt("What is your age?", 18);
let welcome;
if(age2 < 18) {
    welcome = function() {
        alert('Hello!');
    };
}
else {
    welcome = function() {
        alert("Greetings!");
    };
}
welcome(); // ok now

// Or we could simplify it even further using a question mark operator ?:
let age3 = prompt("What is your age?", 18);
let welcome = (age3 < 18)?
    function() {alert('Hello!');}:
    function() {alert("Greetings!");};

welcome(); // ok now

// When to choose Function Declaration versus Function Expression
/* As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.
That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.
…But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), then Function Expression should be used.
*/