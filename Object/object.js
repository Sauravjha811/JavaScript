// An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

// Empty Object
let user = new Object(); // "object constructor" syntax
let user1 = {}; // "object literal" syntax

// Literals and properties
// We can immediately put some properties into {...} as “key: value” pairs:
let user2 = { // an object
    name: "Saurav Jha", // by key "name" store value "John"
    age: 22 // by key "age" store value 30
}

// Property values are accessible using the dot notation
// get the property vlaues of the object
alert( user2.name ); // Saurav Jha
alert( user2.age ); // 30

// The value can be of any type. Let's add a boolean one:
user2.isAdmin = true;

// To remove a property, we can use the delete operator
delete user.age;

// We can also use mutliword property names, but then they must be quoted
let user3 = {
    name: "Saurav",
    age: 22,
    "like birds": true // multiword property name must be quoted
}

// The last property in the list may end with a comma:
let user4 = {
    name: "Saurav Jha",
    age: 22,
}

// Square brackets
// for multiword properties, the dot access doesn't work
// this would give a syntax error
user.likes birds = true;

// The dot requires the key to be a valid variable identifier. That implies: contains no spaces, doesn’t start with a digit and doesn’t include special characters ($ and _ are allowed).
// There’s an alternative “square bracket notation” that works with any string:

let user5 = {};

// set
user5["like birds"] = true;

// get
alert(user5["like birds"]); // true;

// delete
delete user5["like birds"];

let key = "like birds";
// same as user["like birds"] = true;
user[key] = true;
// Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility.

let user6 = {
    name: "Saurav",
    age: 22
};

let key1 = prompt("What do you want to know about the user?","name");

// access by variable
alert( user6[key1]); // Saurav ( if enter "name");

// The dot notation cannot be used in a similar way
let user7 = {
    name:"Saurav Jha",
    age: 22
};

let key2 = "name";
alert( user7.key2 ) // undefined

// Computed Properties
// We can use square brackets in an object literal, when creating an object. That’s called computed properties.
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};
alert ( bag.apple ); // 5 if fruit="apple"

// The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.
// So, if a visitor enters "apple", bag will become {apple: 5}.

let fruit1 = prompt("Which fruit to buy?", "apple");
let bag1 = {};

// Take property name from the fruit variable
bag1[fruit] = 5;

// We can use more complex expressions inside square brackets:
let fruit2 = 'apple';
let bag2 = {
    [fruit2 + 'Computers']: 6 //bag2.appleComputers = 6
};

// Square brackets are much more powerful than dot notation. 
// They allow any property names and variables. But they are also more cumbersome to write.

// So most of the time, when property names are known and simple, the dot is used. 
// And if we need something more complex, then we switch to square brackets.

// Property value shorthand
function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...other properties
    };
}

let user8 = makeUser("Saurav", 22);
alert(user8.name);

// In the example above, properties have the same names as variables. 
// The use-case of making a property from a variable is so common, 
// that there’s a special property value shorthand to make it shorter.

// Instead of name:name we can just write name, like this
function makeUser(name, age) {
    return {
        name, // same as name: name
        age, // same as age: age
        // ...
    };
}
let user9 = makeUser("Saurav", 22);
alert(user9.name);

// We can use both normal properties and shorthands in the same object
let user10 = {
    name, // same as name: name
    age: 30
};

// Property names limitations
// As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.
// But for an object property, there’s no such restriction:

// these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3
}
alert( obj.for + obj.let + obj.return); // 6

// Other types are automatically converted to strings.
let obj1 = {
    0: "test" // same as "0":"test"
};
// both alerts access the same property ( the number 0 is converted to string "0")
alert(obj1["0"]); // test
alert(obj1[0]); // test (same property)

// There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:
let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

// Property existence test, "in" operator
// Reading a non-existing property just returns undefined. So we can easily test whether the property exists:
let user = {}
alert( user.noSuchProperty === undefined); // true means "no such property"

// There's also a special operator "in" for that
"key" in object

let user2 = { name: "Saurav Jha", age: 22 };
alert( "age" in user2 ); // true, user.age exists
alert( "blabla" in user2 ); // false, user.blabla doesn't exist 
// Please note that on the left side of in there must be a property name. That’s usually a quoted string.

let user5 = { age: 30 };

let key3 = "age";
alert( key3 in user5 ); // true, property "age" exists

// Well, most of the time the comparison with undefined works fine. But there’s a special case when it fails, but "in" works correctly.
// It’s when an object property exists, but stores undefined:

let obj6 = {
    test: undefined
};
alert( obj6.test ); // it's undefined, so - no such property?
alert( "test" in obj6); // true, the property does exist!

// The "for..in" loop
// To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before.

for (key in object) {
    // executes the body for each key among object properties
}

let user11 = {
    name: "Saurav",
    age: 22,
    isAdmin: true
};

for (let key in user11) {
    // keys
    alert( key ); // name, age, isAdmin
    // values for the keys
    alert( user11[key] ); // John, 30, true
}

// Ordered like an object
// The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};

for (let code in codes) {
    alert(code);
}
// Integer property
// The “integer property” term here means a string that can be converted to-and-from an integer without a change.

// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" => not integer property
alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" => not integer property 

// On the other hand, if the keys are non-integer, then they are listed in the creation
let user12 = {
    name: "John",
    surname: "Smith"
};
user12.age = 25; // add one more

// non-integer properties are listed in the creation order
for(let prop in user12 ) {
    alert( prop ); // name, surname, age
}

// So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer. Adding a plus "+" sign before each code is enough.
let codes1 = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
};

for (let code in codes1) {
    alert( +code ); // 49, 41, 44, 1
}

// Exercise
1. let user = {};
1. let user = new obejct();

2. user.name = "John";
3. user.surname = "Smith";
4. user.name = "Pete";
5. delete user.name;

// Check for emptiness
let schedule = {};
alert( isEmpty(schedule)); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule)); // false

// Just loop over the object and return false immediately if there’s at least one property.
function isEmpty(obj) {
    for (let key in obj) {
        // if the loop has started, there is a property
        return false;
    }
    return true;
}

// Sum object properties
// We have an object storing salaries of our team:
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for( let sal in salaries) {
    sum += salaries[sal]; 
}
alert(sum);

// Multiply numeric property values by 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  multipleyNumeric(menu);

  function multipleyNumeric(menu) {
    for(let prop in menu ) {
        if(typeof(menu[prop] == 'number')) {
            menu[prop] *= 2;
        }
    }
  }