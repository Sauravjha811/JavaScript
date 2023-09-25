// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
// Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

// Boolean is the result - all comparison operators return a boolean value
alert(2 > 1); // true
alert(2 == 1); //false
alert(2 != 1); // true

let result = 5 > 4; // assign the result of the comparison
alert(result); // true

//String Comparison.
//javaScript uses the so-called “dictionary” or “lexicographical” order.
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

//Comparison of different types
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1


//A funny Consequence
// Two values are equal.
// One of them is true as a boolean and the other one is false as a boolean.
let a = 0;
alert( Boolean(a)); // false;
let b = '0';
alert(Boolean(b)); // true;

alert(a == b); // true;

//Strict equality
// == regulat equality check
alert(0 == false); // true;
alert('' == false); // true;

//A strict equality operator === checks the equality without type conversion.
alert(0 === false); //false, because the types are different

// strict non-eaulity operator !==

//Comparison with null and undefined.
// For a strict equality check
alert(null === undefined); // false;
//For a non-strict check ==
alert(null == undefined); //true;

//Strange result: null vs 0
alert( null > 0); // false;
alert(null == 0); // false;
alert(null>=0); // true;

//Mathematically, that’s strange. The last result states 
//that "null is greater than or equal to zero", so in one of the 
//comparisons above it must be true, but they are both false.

// The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.
// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

//An incomparable undefined
// The value undefined shouldn’t be compared to other values:
alert(undefined > 0); // false
alert(undefined < 0); // false
alert(undefined == 0); // false
// Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
// The equality check (3) returns false because undefined only equals null, undefined, and no other value


