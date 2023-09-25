// Sometimes, we need to perform different actions based on different conditions.
// To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.

// The 'if' statement
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
let year = prompt('In which year was ECMAScript-2015 specification published', '');
if(year == 2015) 
alert('You are right!');

if(year == 2015){
    alert("That's correct");
    alert("You're so smart!");
}

//Boolean conversion
// A number 0, an empty string "", null, undefined, and NaN all
// become false. Because of that they are called "falsy" values.
// Other values become true, so they are called execute.

if(0){
    // 0 is falsy
}

if(1){
    // 1 is truthy
}

// pre-evaluated boolean value to if, like this:
let cond = (year == 2015); // equality evaluates to true or false
if(cond){
    
}

// The "Else" clause
let year1 = prompt('In which year was the ECMAScript-2015 specification published?', '');
if(year1 == 2015){
    alert("You guessed it right!");
}
else {
    alert('How can you be so wrong?'); // any value except 2015;
}

// Several conditions: 'else if'
let year2 = prompt('In which year was the ECMAScript-2015 specification published?', '');
if(year2 < 2015){
    alert('Too early...');
}
else if(year2> 2015){
    alert('Too late');
}
else{
    alert('Exactly');
}

//Conditional Operator '?'
let accessAllowed;
let age = prompt('How old are you?', '');

if(age > 18){
    accessAllowed = true;
}
else {
    accessAllowed = false;
}
alert(accessAllowed);

//The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way
// Syntax
let result = conditon ? value1: value2;
let accessAllowed1 = (age>18) ? true : false;
// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowed2 = age > 18 ? true : false;

// In the example above, you can avoid using the question mark operator because the comparison itself returns true/false
// the same
let accessAllowed3 = age > 18;

// Multiple '?'
let age2 = prompt('age?', 18);
let message = (age2 < 3) ? 'Hi, baby!':
    (age2 < 18) ? 'Hello!' :
    (age2 < 100) ? 'Greetings!':'what an unusual age!';
alert(message);

// Here's how this looks using if..else
if(age < 3){
    message = 'Hi, baby!';
}
else if(age < 18){
    message = 'Hello!';
}
else if(age < 100){
    message = 'Greetings!';
}
else {
    message = 'What an unusual age!';
}

//Non-traditonal use of '?'
// Sometimes the question mark ? is used as a replacement for if
let company = prompt('Which company created JavaScript?', '');
(company == 'Netscape') ? alert('Right') : alert('Wrong.');
// Not recommended to use the conditional operator in this manner

// Here is the same code using if for comparison:
let company1 = prompt('Which company created JavaScript?', '');
if(company1 == 'Netscape') {
    alert('Right');
}
else{
    alert('Wrong');
}


//Exercise

let jname = prompt('What is the "official" name of JavaScript?');
if(jname == 'ECMAScript'){
    alert("Right!");
}
else {
    alert("You don't know? ECMAScript");
}

// Show the sign
let num = prompt('Enter Number please', '');
if(num > 0){
    alert(1);
}
else if(num < 0){
    alert(-1);
}
else {
    alert(0)
}

// Rewrite 'if' into '?':
let result1;
if (a + b < 4) {
  result1 = 'Below';
} else {
  result1 = 'Over';
}
// part-1
let a,b = 3;
let result3 = (a+b<4)?'Below':'Over';
console.log(result3);


let message11;
if (login == 'Employee') {
  message11 = 'Hello';
} else if (login == 'Director') {
  message11 = 'Greetings';
} else if (login == '') {
  message11 = 'No login';
} else {
  message11 = '';
}
// part-2
let login = prompt("Enter your profession",'');
let message1 = (login == 'Employee')? 'Hello' : (login == 'Director')?'Greetings':(login == '')?'No login':'';
alert(message1);