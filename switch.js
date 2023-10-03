// Switch statement
// A switch statement can replace multiple if checks.

// Syntax
// switch(x){
//     case 'value1': // if(x === 'value1')
//     ...
//     [break]

//     case 'value2': // if (x === 'value2')
//     ...
//     [break]

//     default:
//     ...
//     [break]
// }

let a = 2+2;
switch(a) {
    case 3:
        alert('Too small');
        break;

    case 4:
        alert('Exactly!');
        break;

    case 5:
        alert('Too big');
        break;

    default:
        alert("I don't know such values");
}

// without break
let a1 = 2+2;
switch (a1) {
    case 3:
        alert('Too small');

    case 4:
        alert('Exactly');

    case 5:
        alert('Too big');

    default:
        alert("I don't know such values");
}

// Any expression can be a switch/case argument
// both switch and case allow arbitrary expressions.
let a2 = "1";
let b = 0;

switch(+a2){
    case b+1:
        alert("this runs, because +a is 1, exactly equals b+1");
        break;

    default:
        alert("this doesn't run");
}

// Grouping of "case"
let a3 = 3;
switch (a3) {
    case 4:
        alert('Right!');
        break;

    case 3: // grouped two cases
    case 5:
        alert('Wrong');
        alert("Why don't you take a math class?");
        break;

    default:
        alert('The result is strange. Really.');
}

// Type matters
let arg = prompt('Enter a value?');
switch(arg){
    case '0':
    case '1':
        alert('One or Zero');
        break;

    case '2':
        alert('Two');
        break;

    case 3:
        alert('Never executes!');
        break;

    default:
        alert('An unknown value');
}

//Exercise
// Rewrite the "Switch" into an "if"

let browser = prompt('Enter Your favorite Browser', "");
if(browser == 'Edge'){
    alert("You've got the Edge!");
}
else if(browser == 'Chrome' 
    || browser == 'FireFox' 
    || browser == 'Safari' 
    || browser == 'Opera'){
    alert('Okay we support these browsers too');
}
else {
    alert('We hope that this page looks ok!');
}

//Rewrite "if" into "switch"
let s = +prompt('a?','');

switch(s){
    case 0:
        alert(0);
        break;

    case 1:
        alert(1);
        break;

    case 2:
    case 3:
        alert('2,3');
        break;
}