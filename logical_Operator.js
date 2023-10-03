//four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

// || (OR)
// result = a || b;

// In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false
// In JavaScript, the operator is a little bit trickier and more powerful.

alert(true || true); // true;
alert(false || true); // true;
alert(true || false); // true;
alert(false || false); // false;


if( 1 || 0){
    // works just like if( true || false)
    alert('truthy!');
}
// Most of the time, OR || is used in an if statement to test if any of the given conditions is true.
let hour = 9;
if(hour < 10 || hour > 18){
    alert('The office is closed.');
}
//More condition
let hour1 = 12;
let isWeekend = true;

if(hour < 10 || hour > 18 || isWeekend) {
    alert('The office is closed.'); // it is the weekend
}

// OR '||' finds the first truthy value
// In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found

alert( 1 || 0); // 1 (1 is truthy)
alert( null || 1); // 1 (1 is the first truthy value)
alert( undefined || null || 0); // 0 (all falsy, returns the last value)

// Getting the first truthy value from a list of variables or expressions.
let firstName = "";
let lastName = "";
let nickName = "Saurav";
alert(firstName || lastName || nickName || "Anonymous"); //Saurav

//Short-circuit evalutation.
// It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.
// In the example below, only the second message is printed:
true || alert("not printed");
false || alert("printed");
// In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.
// Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.

// && (AND)
// result = a && b;
// In classical programming, AND returns true if both operands are truthy and false otherwise:

alert( true && true); // true
alert( false && true); // false
alert( true && false); // false
alert( false && false); // false

let hour2 = 12;
let minute = 30;
if (hour2 == 12 && minute == 30) {
    alert('The time is 12:30');
}

if (1 && 0) { // evaluated as true && false
    alert( "won't work, because the result is falsy" );
}

// AND "&&" finds the first falsy value
// result = value1 && value2 && value3;
// In other words, AND returns the first falsy value or the last value if none were found.

//The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

//if the first operand is truthy,
//AND returns the second operand:
alert(1 && 0); // 0;
alert(1 && 5); // 5;

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5); //null
alert( 0 && "no matter what");// 0

alert( 1 && 2 && null && 3); // null
alert( 1 && 2 && 3); // 3, the last one

// Precedence of AND && is higher than OR ||
// The precedence of AND && operator is higher than OR ||.
// So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d)

// Don't replace if with || or &&.
// Sometimes, people use the AND && operator as a "shorter way to write if".
let x = 1;
(x > 0) && alert('Greater than zero!');

// So we basically have an analogue for:
let xx = 1;
if(xx > 0) alert ('Greater than zero!');
// So we recommend using every construct for its purpose: use if if we want if and use && if we want AND


// ! (NOT)
// result = !value;

alert(!true); // false;
alert(!0); // true;

// A double NOT !! is sometimes used for converting a value to boolean type:
//alert( !"none-empty string"); // false;
alert( !!"none-empty string"); // true;
alert( !! null); // false;
// That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion

alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false

// The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||

//Exercise
let age = prompt('Enter your age', '');
if(age >=14 && age<=90){
    console.log('14 - 90');
}
else{
    console.log('>14 - 90<');
}

let age1 = prompt('Enter your age', '');
if( !(age1>=14 && age<=90)){
    console.log('>14 - 90<');
}
else {
    console.log('14 - 90');
}

if( age<14 || age> 90){
    console.log('>14 - 90<');
}
else {
    console.log( '14 - 20');
}

//Check the login
let login = prompt('Enter the login details','');

if(login == 'Admin' || login == 'admin'){
    let password = prompt('Enter the password please')
    if(password == 'TheMaster'){
        alert('Welcome');
    }
    else if(password == ''){
        alert("Canceled");
    }
    else{
        alert("I don't know you");
    }
}
else if(login == ''){
    alert('Canceled');
}
else {
    alert("I don't know you");
}