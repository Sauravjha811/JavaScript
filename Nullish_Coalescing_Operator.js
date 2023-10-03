// The nullish coalescing operator is written as two question marks ??.
// As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

// The result of a ?? b is
// if a is defined, then a,
// if a isn't defined, then b.

// In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

// We can rewrite result = a ?? b using the operators that we already know, like this:
result = (a !== null && a !== undefined) ? a:b;

// The common use case for ?? is to provide a default value.
//For example, here we show user if its value isn’t null/undefined, otherwise Anonymous:

let user;
alert(user ?? "Anonymous"); //Anonymous (user is undefined);

let user1 = 'John';
alert(user1 ?? 'Anonymous'); // John (user is not null/undefined).


let firstName = null;
let lastName = null;
let nickName = "Saurav Jha";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Saurav

// Comparison with ||
// The OR || operator can be used in the same way as ??
let firstN = null;
let lastN = null;
let nickN = "Saurav Kumar";

// shows the firsty truthy value:
alert(firstN || lastN || nickN || "Snowber Fayaz");

// On the other hand, the nullish coalescing operator ?? was added to JavaScript only recently, and the reason for that was that people weren’t quite happy with ||
// Important difference between is that
// || returns the first truthy value.
// ?? returns the first defined value.


// In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.
// In practice though, we may want to use default value only when the variable is null/undefined. That is, when the value is really unknown/not set.

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0
// The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed.
// so the result of || is the second argument, 100.
// The height ?? 100 checks height for being null/undefined, and it’s not,
// so the result is height “as is”, that is 0.


// Precedence
// precedence of the ?? operator is the same as ||.
// That means that, just like ||, the nullish coalescing operator ?? is evaluated before = and ?, but after most other operations, such as +, *.

let height2 = null;
let width2 = null;
// important: use parentheses
let area = (height2 ?? 100) * (width ?? 50);
alert(area); // 5000

// Otherwise, if we omit parentheses, then as * has the higher precedence than ??, it would execute first, leading to incorrect results
// Without parentheses
let area1 = height2 ?? 100 * width2 ?? 50;
// ...works this way (not what we want):
let area2 = height ?? (100 * width) ?? 50;

//Using ?? with && or ||
// Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.
let x = 1 && 2 ?? 3; // Syntax error

//Use explicit parentheses to work around it
let x1 = (1 && 2) ?? 3; // works
alert(x);

