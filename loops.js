// The "While" loop
// while(condition){
    // code
    // so-called "loop body"
// }

//While the condition is truthy, the code from the loop body is executed.
let i = 0;
while( i < 3){ // shows 0, then 1, then 2
    alert(i);
    i++;
}
// A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.
// For instance, a shorter way to write while (i != 0) is while (i)
let i1 = 3;
while(i){
    // when i becomes 0, the condition becomes falsy, and the loop stops
    alert(i1);
    i1--;
}

// Curly braces are not required for a single-line body
let i2 = 3;
while(i2) alert(i2--);

// The "do-while" loop
// do{
//     loop body
// }while(condition);
// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
let i3 = 0;
do {
    alert(i3);
    i3++;
}while(i3 < 3);
// This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

// The "for" loop
// for(Begin; condition; step){
//     loop body
// }
// Let’s learn the meaning of these parts by example. The loop below runs alert(i) for i from 0 up to (but not including) 3:
for (let i = 0; i < 3; i++){
    alert(i); // shows 0, then 1, then 2
}
// begin	let i = 0	Executes once upon entering the loop
// condition	i < 3	Checked before every loop iteration. If false, the loop stops.
// body	alert(i)	Runs again and again while the condition is truthy.
// step	i++	Executes after the body on each iteration.

// for (let x = 0; x < 3; x++) alert(x)

// run begin
let x = 0;
// if condition -> run body and run step
if(x < 3) { alert(x); x++}
// if condition -> run body and run step
if(x < 3) { alert(x); x++}
// if condition -> run body and run step
if(x < 3) { alert(x); x++}
// finish, because now i == 3;

//Inline-variable declaration
// Here, the “counter” variable i is declared right in the loop. This is called an “inline” variable declaration. Such variables are visible only inside the loop
for(let y = 0; y< 3; y++){
    alert(y); // 0, 1, 2
}
alert(y); // error, no such variable

// Instead of defining a variable, we could use an existing one:
let s = 0;
for( s = 0; s < 3; s++){
    alert(s); // 0, 1, 2
}
alert(s); // 3, visible, because declared outside of the loop.

// Skipping parts
let z = 0; // we have z already declared and assigned.
for(; z < 3; z++){
    alert(z); // 0, 1, 2
}
// we can also remove the step part
let k = 0;
for(;k < 3;){
    alert(k++);
}
// This makes the loop identical to while (i < 3).
// We can actually remove everything, creating an infinite loop
// for(;;){
     // repeat without limits
// }

// Breaking the loop
let sum = 0;
while (true){
    let value = +prompt("Enter a number", "");
    if(!value) break; 
    sum += value;
}
alert('Sum: '+ sum);

//Continue to the next iteration
for (let i = 0; i < 10; i++){
    // if true, skip the remaining part of the body
    if ( i % 2 == 0) continue;

    alert(i); //1, then 3, 5, 7, 9
}

// The continue directive helps decrease nesting
for( let i = 0; i < 10; i++) {
    if(i % 2){
        alert(i); // 1, then 3, 5, 7, 9
    }
}

// No break/continue to the right side of '?'
for(let i = 0; i<10 ; i++){
    if (i > 5) {
        alert(i);
      } 
      else {
        continue;
      }
}
// Using ternary operator
(i > 5) ? alert(i): continue; // continue isn't allowed here
// This is just another reason not to use the question mark operator ? instead of if.

// Labels for break/continue
// Sometimes we need to break out from multiple nested loops at once.

// For example, in the code below we loop over i and j, prompting for the coordinates (i, j) from (0,0) to (2,2):
for (let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        let input = prompt(`Value at coords (${i}, ${j}`,'');
        // what if we want to exit from here to Done (below)?
    }
}
alert('Done!');

// We need a way to stop the process if the user cancels the input.
//The ordinary break after input would only break the inner loop. That’s not sufficient – labels, come to the rescue!

// A label is an identifier with a colon before a loop:
// labelName: for(...) {
//     ...
// }

// The break <labelName> statement in the loop below breaks out to the label:
outer: for(let i = 0; i < 3; i++){
    for( let j = 0; j < 3; j++){
        let input = prompt(`Value at coords (${i}, ${j})`, '');

        // if an empty string or canceled, then break out of both loops
        if(!input) break outer;
        
    }
}
alert('Done');

// We can also move the label onto separate line:
// outer:
// for(let i = 0; i < 3; i++){
//     ...
// }
// The continue directive can also be used with a label. In this case, code execution jumps to the next iteration of the labeled loop.

// Labels do not allow to “jump” anywhere
// For example, it is impossible to do this:

// break label; // jump to the label below (doesn't work)
// label: for(...)

// A break directive must be inside a code block. Technically, any labelled code block will do, e.g.
label: {
    // ..
    break label; // works
    // ...
}

// Output even numbers in the loop
for(let i=0; i<=10; i++){
    if(i%2 == 0){
        alert(i);
    }
}
let y = 0;
while(y<3){
    alert(`number ${y}!`);
    y++;
}

// Repeat until the input is correct
let num;
do{
    num = prompt('Enter the Number',0);
}while(num <= 100 && num);

// Output prime numbers
// Prime numbers between : 2 to n (n=10)
let n = +prompt("Enter the Number", '');

nextPrime:for(let i=2;i<=n;i++){ // for each i...
    for(let j=2;j<i;j++){
        if(i%j == 0){ // look for a divisor
            continue nextPrime; // not a prime, go next i
        }
    }
    alert(i); // a prime
}