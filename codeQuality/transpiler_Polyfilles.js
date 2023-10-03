// Transpilers
// A transpiler is a special piece of software that translates source code to another source code. It can parse (“read and understand”) modern code and rewrite it using older syntax constructs, so that it’ll also work in outdated engines.
// E.g. JavaScript before year 2020 didn’t have the “nullish coalescing operator” ??. So, if a visitor uses an outdated browser, it may fail to understand the code like height = height ?? 100.

// before running the transpiler
height = height ?? 100;

// after running the transpiler
height = (height !== undefined && height !== null) ? height : 100;

// Speaking of names, Babel is one of the most prominent transpilers out there.
// Modern project build systems, such as webpack, provide a means to run a transpiler automatically on every code change, so it’s very easy to integrate into the development process.

// Polyfills
// New language features may include not only syntax constructs and operators, but also built-in functions.
// For example, Math.trunc(n) is a function that “cuts off” the decimal part of a number, e.g Math.trunc(1.23) returns 1.
// In some (very outdated) JavaScript engines, there’s no Math.trunc, so such code will fail.

// A script that updates/adds new functions is called “polyfill”. It “fills in” the gap and adds missing implementations.
if (!Math.trunc) { // if no such function
    // implement
    Math.trunc = function(number) {
        // Math.ceil and Math.floor exist even in ancient JavaScript engines
        // they are covered later in the tutorial
        return number < 0 ? Math.ceil(number) : Math.floor(number);
    }
}
// JavaScript is a highly dynamic language. Scripts may add/modify any function, even built-in ones.
// Two interesting polyfill libraries are:
// core js that supports a lot, allows to include only needed features.
// polyfill.io service that provides a script with polyfills, depending on the features and user’s browser.