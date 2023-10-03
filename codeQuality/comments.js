// Comments
// single line //
// multi line /* ... */

// Bad comments
// Novices tend to use comments to explain “what is going on in the code”. Like this:

// this code will do this thing (...) and that thing (...)
// ... and who knows what else ...
very;
complex;
ConvolverNode;
// There’s a great rule about that: “if the code is so unclear that it requires a comment, then maybe it should be rewritten instead”.

// Recipe: factor out functions
function showPrimes(n) {
    nextPrime:
    for (let i = 2; i < n; i++) {

        // check if i is a prime number
        for (let j = 2; j < n; i++) {
            if ( i % j == 0) continue nextPrime;
        }
        alert(i);
    }
}
// The better variant, with a factored out function isPrime:
function showPrimes(n) {

    for (let i = 2; i < n; i++) {
        if(!isPrime(i)) continue;

        alert(i);
    }
}
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
// Now we can understand the code easily. The function itself becomes the comment. Such code is called self-descriptive.

// Recipe: create functions

// here we add whiskey
for (let i = 0; i < 10; i++) {
    let drop = getWhiskey();
    smell(drop);
    add(drop, glass);
}
// here we add juice
for (let t = 0; t < 3; t++) {
    let tomato = getTomato();
    examine(tomato);
    let juice = press(tomato);
    add(juice, glass);
}

// Then it might be a better variant to refactor it into functions like:
addWhiskey(glass);
addJuice(glass);

function addWhiskey(container) {
    for (let i = 0; i < 10; i++) {
        let drop = getWhiskey();
        // ...
    }
}
function addJuice(container) {
    for(let t = 0; t < 3; t++) {
        let tomato = getTomato();
        // ...
    }
}

// Good comments
// Describe the architecture
// Provide a high-level overview of components, how they interact, what’s the control flow in various situations… 
// In short – the bird’s eye view of the code. There’s a special language UML to build high-level architecture diagrams explaining the code. Definitely worth studying.

/**
 * 
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
    ...
  }

/* Comment this:
Overall architecture, high-level view.
Function usage.
Important solutions, especially when not immediately obvious.

Avoid comments:
That tell “how code works” and “what it does”.
Put them in only if it’s impossible to make the code so simple and self-descriptive that it doesn’t require them.
*/
