// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
let x = 1;
x = -x;
alert(x); // -1, unary negation was applied.

// An operator is binary if it has two operands. The same minus exists in binary form as well:
let xx = 1, y = 3;
alert(y - xx); // 2, Binary minus subtract values.

//Maths
// Addition +
// Subtraction -
// Multiplication *
// Division /
// Remainder %
// Exponentiation **

// Remainder %
alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

//Exponentiation **
//The exponentiation operator a ** b raises a to the power of b.
alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

// Square root
alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

//String concatenation with binary + 
let s = "my" + "string";
alert(s); //mystring
//any of the operands is a string, then the other one is converted to a string too.
alert('1' + 2); // '12'
alert(2 + '1'); // '21'

// complex-example
alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"


// The binary + is the only operator that supports strings in such a way. 
// Other arithmetic operators work only with numbers and always convert their operands to numbers.
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to number

//Numeric Conversion, unary + 
// No effect on numbers
let x1 = 1;
alert(+x1); // 1;
let y1 = -2;
alert( +y1 ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

//It actually does the same thing as Number(...), but is shorter.
//The need to convert strings to numbers arises very often. 
//For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?

let apples = "2";
let oranges = "3";
alert(apples+oranges); // "23", the binary plus concatenates strings

// If we want to treat them as numbers, we need to convert and then sum them:
let apples1 = "2";
let oranges1 = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5
// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

// Operator Precedence
// 14 => unary plus +
// 14 => unary negation -
// 13 => exponentiation **
// 12 => multiplication *
// 12 => division /
// 11 => addition +
// 11 => subtraction -
// ...
// 2 => assignment =

//Assigment
let x2 = 2*2+1;
alert(x2);
// Assignement = returns a value
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
alert( a ); // 3
alert( c ); // 0
// Chaining assigments
let a1, b1, c1;
a1 = b1 = c1 = 2 + 2;
alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
//purposes of readability it’s better to split such code into few lines:
c = 2 + 2;
b = c;
a = c;

//Modify-in-place
let n1 = 2;
n1 = n1 + 5;
n1 = n1 * 2;
//his notation can be shortened using the operators += and *=
let n2 = 2;
n2 += 5; // now n = 7 (same as n = n + 5)
n2 *= 2; // now n = 14 (same as n = n * 2)
alert(n);
// same precedence as a normal assignment,
let n3 = 2;
n3 *= 3 + 5; // right part evaluated first, same as n *= 8
alert( n3 ); // 16

//Increment/decrement
let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

let counter1 = 2;
counter1--;        // works the same as counter = counter - 1, but is shorter
alert( counter1 ); // 1
// Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

// postfix = a++, a--;
// prefix = ++a, --a;

let counter2 = 1;
let a2 = ++counter2; // (*)
alert(a2); // 2

let counter3 = 1;
let a3 = counter++; // (*) changed ++counter to counter++
alert(a3); // 1

//If the result of increment/decrement is not used, there is no difference in which form to use:
let counter4 = 0;
counter4++;
++counter4;
alert(counter4); // 2, hte lines above did the same

//If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
let counter5 = 0;
alert(++counter5);

//If we’d like to increment a value but use its previous value, we need the postfix form
let counter6 = 0;
alert( counter6++ ); // 0

//The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.
let counter7 = 1;
alert( 2 * ++counter7 ); // 4

let counter8 = 1;
alert( 2 * counter8++ ); // 2, because counter8++ returns the "old" value

// We advise a style of “one line – one action”:
let counter9 = 1;
alert( 2 * counter9 );
counter9++;

// Comma
let a4 = (1 + 2, 3 + 4);
alert(a4);

//Comma has a very low precedence
// Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.
//a = 1 + 2, 3 + 4
// a = 3, 7 => a = 3 7 is ignore.

// Why do we need an operator that throws away everything except the last expression?
// people use it in more complex constructs to put several actions in one line.
// three operations in one line
// for (a = 1, b = 3, c = a * b; a < 10; a++) {
//     ...
//    }

//Exercise
let a11 = prompt("First number?", 1);
let b11 = prompt("Second number?", 2);

alert(a11 + b11); // 12

// alert(+a11 + +b11);
//alert(Number(a11) + Number(b11));

