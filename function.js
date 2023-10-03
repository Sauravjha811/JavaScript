// Functions
// We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). But we can create functions of our own as well.

// Function Declaration
function showMessage(){
    alert('Hello everyone!');
}

// function name(parameter1, parameter2, ...parameterN){
    // body
// }

// Our new function can be called by its name: showMessage()
function showMessage(){
    alert('Hello everyone!');
}
showMessage();
showMessage();

// Local Variable
function showMessage(){
    let message = "Hello, I'm JavaScript!"; // local variable
    alert(message); 
}
showMessage(); //Hello, I'm JavaScript!
alert(message); // <-- Error! The variable is local to the function

// Outer variables
let userName = 'Saurav';
function showMessage(){
    let message = 'Hello, '+ userName;
    alert(message);
}
showMessage(); // Hello, Saurav

// The function has full access to the outer variable. It can modify it as well.
let userN = 'Snowber Fayaz';
function showMessage() {
    userN = 'Nidhi Rana'; // (1) changed the outer variable

    let message = 'Hello, '+userN;
    alert(message);
}
alert(userN); // Snowber Fayaz before the function call
showMessage();
alert(userN); // Nidhi Rana, the value was modified by the function 

let userNa = 'Saurav';
function showMessage() {
    let userNa = "Snowber"; // declare a local variable
    let message = 'Hello, '+ userName; // Bob
    alert(message);
}
// the function will create and use its own userName
showMessage();
alert(userN); // John, unchanged, the function did not access the outer variable

// Parameters
// We can pass arbitrary data to functions using parameters.
// In the example below, the function has two parameters: from and text
function showMessage(from, text){ // parameters: from, text
    alert(from + ': '+text);
}
showMessage('Saurav', 'Hello'); //Saurav: Hello!
showMessage('Snowber',"What's up?"); // Snowber: What's up?


// Here’s one more example: we have a variable from and pass it to the function. Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:
function showMessage(from, text) {
    from = '*' + from + '*'; // make "from" look nicer
    alert(from +': ' +text);
}

let from = 'Ann';
showMessage(from, 'Hello'); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann

// A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
// An argument is the value that is passed to the function when it is called (it’s a call time term).

//Default values
// If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

function showMessage(from, text = 'no text given'){
    alert(from + ": " + text);
}
showMessage("Snowber"); // Snowber: no text given
// The default value also jumps in if the parameter exists, but strictly equals undefined, like this:
showMessage("Ann", undefined); // Ann: no text given

function showMessage(from, text = anotherFunction()) {
    // anotherFunction() only executed if no text given
    // its result becomes the value of text

}
// In the example above, anotherFunction() isn’t called at all, if the text parameter is provided.
// On the other hand, it’s independently called every time when text is missing.

// Default parameters in old JavaScript code
function showMessage(from, text){
    if(text === undefined) {
        text = 'no text given';
    }
    alert( from + ": "+text);
}
// Or Using the || operator.
function showMessage(from, text) {
    // if the value of text is falsy, assign hte default value 
    // this assumes that text == "" is the same as no text at all
    text = text || 'no text given';
}

// Alternative default parameters
function showMessage(text){
    // ...
    if(text === undefined) { // if the parameter is missing
        text = 'empty message';
    }
    alert(text);
}
showMessage(); // empty message

// || operator
function showMessage(text){
    // if text is undefined or otherwise falsy, set it to 'empty'
    text = text || 'empty';
    alert(text);
}
showMessage();

// Modern JavaScript engines support the nullish coalescing operator ??, it’s better when most falsy values, such as 0, should be considered “normal”:
function showCount(count) {
    // if count is undefined or null, show "unknown"
    alert(count ?? "unknown");
}
showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
showCount(undefined); // unknown

function showCount(count) {
    // if count is undefined or null, show "unknown"
    alert(count || "unknown");
}
showCount(0); // unknown
showCount(12); // 12
showCount(null); // unknown
showCount(); // unknown
showCount(undefined); // unknown

// Returning a value
// A function can return a value back into the calling code as the result.
function sum(a,b){
    return a+b;
}
let result = sum(2,3);
alert(result); // 5;

function checkAge(age) {
    if(age >= 18) {
        return true;
    }
    else {
        return confirm('Do you have permission from your parents?');
    }
}
let age = prompt('How old are you?', 18);
if(checkAge(age)){
    alert('Access granted');
}
else {
    alert('Access denied');
}

// It is possible to use return without a value. That causes the function to exit immediately.
function showMovie(age) {
    if(!checkAge(age)){
        return;
    }
    alert("Showing you the movie");
}
// In the code above, if checkAge(age) returns false, then showMovie won’t proceed to the alert.


// A function with an empty return or without it returns undefined
function doNothing() {
    // empty
}
alert(doNothing() === undefined); // true;

function doNothing() {
    return;
}
alert( doNothing() === undefined); // true;

// Never add a newline between return and the value
// return
//  (some + long + expression + or + whatever * f(a) + f(b))
// That doesn’t work, because JavaScript assumes a semicolon after return. That’ll work the same as:
// return;
//  (some + long + expression + or + whatever * f(a) + f(b))

// If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses there as follows:
return (
    some + long + XPathExpression
    + or +
    whatever * f(a) + f(b)
)
// it will work 

// Naming a function
/* Function starting with
. "get.." - return value,
. "calc.." - calculate something,
. "create.." - create something,
. "check.." - check something and returns a boolean, etc
*/
// Examples
showMessage(); // shows a message
getAge(); // returns the age (gets it somehow)
calcSum(); // calculates a sum and returns the result
createForm() // create a form ( and usually returns it)
checkPermission() // check a permission, returns true/false

// One function - one action
/*
getAge – would be bad if it shows an alert with the age (should only get).
createForm – would be bad if it modifies the document, adding a form to it (should only create it and return).
checkPermission – would be bad if it displays the access granted/denied message (should only perform the check and return the result).
*/

// Functions == comment
// For instance, compare the two functions showPrimes(n) below. Each one outputs prime numbers up to n.
// The first variant uses a label:
function showPrimes(n){
    nextPrime: for(let i=2; i<n; i++) {
        for(let j=2; j<i; j++) {
            if(i%j == 0) continue nextPrime;
        }
        alert(i); // a prime;
    }
}
// The second variant uses an additional function isPrime(n) to test for primality
function showPrimes(n) {
    for(let i=2; i<n; i++) {
        if(!isPrime(i)) continue;

        alert(i); // a prime
    }
}
function isPrime(n) {
    for(let i=2; i<n; i++) {
        if(n%i == 0) return false;
    }
    return true;
}

// Exercise
// Rewrite the function using '?' or '||'

// First variant using ?
function checkAge(age) {
    return (age>18)?true:confirm('Did parents allow you?');
   
}
result = checkAge(12);
console.log(result);

// Second variant using ||
function checkAge(age){
    return (age>18) || confirm('Did parent allow you?');
}

// function to min(a, b)
function min(a,b){
    if(a<b){
        return a;
    }
    else{
        return b;
    }
}
// using ? operator
// function min(a,b) {
//     return a < b ? a : b;
// }
min(1,1); // 1
min(3, -1); // -1
min(2, 5); // 2

let n1 = +prompt('Enter the first number', "");
let n2 = +prompt('Enter the second number',"");
// function pow(x,n);
function pow(a,b){
    let result = a;
    for(let i=1; i<b; i++){
        result *= a;
    }
    return result;
}
if(n2<1){
    alert(`Power ${n2} is not supported, use a positive integer`);
}
else {
    alert(pow(n1,n2));
}

