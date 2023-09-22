// let’s see a couple of functions to interact with the user: alert, prompt and confirm
alert("Hello");

//prompt
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!

//confirm
let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed

//Exercise
let name = prompt("Enter you Name");
console.log(name);