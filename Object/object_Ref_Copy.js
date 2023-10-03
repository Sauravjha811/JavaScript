// Object references and copying
// One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

let message = "Hello";
let phrase = message;

// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
let user = {
    name: "Saurav"
};

// When an object variable is copied, the reference is copied, but the object itself is not duplicated.
let user1 = { name: "Saurav Jha" };
let admin = user1; // copy the reference

admin.name = "Snowber Fayaz"; // changed by the "admin" refernce
alert(user1.name); // 'Snowber Fayaz', changes are seen from the "user1" reference

// Comparison by reference
// Two objects
let a = {};
let b = a; // copy the reference

alert( a==b ); // true, both variables reference the same object
alert( a===b ); // true

// And here two independent objects are not equal, even though they look alike (both are empty):
let a1 = {};
let b1 = {}; // two independent objects
alert( a1==b1 ); // false

// Const objects can be modified
// An important side effect of storing objects as references is that an object declared as const can be modified.
const user3 = {
    name: "Saurav"
};

user3.name = 'Snowber Fayaz'; 
alert(user3.name); 

// Cloning and merging, Object.assign
let user4 = {
    name: "Saurav Jha",
    age: 22
}
let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user4) {
    clone[key] = user4[key];
}

// now clone is a fully independent object with the same content
clone.name = "Snow"; // changed the data in it

alert( user4.name ); // still John in the original object

// We can also use the method Object.assign
Object.assign(dest,...sources);
// The first argument dest is a target object.
// Further arguments is a list of source objects.

let user5 = { name:"Saurav Jha"};

let permission1 = { canView: true };
let permission2 = { canEdit:true };

// Copies all properties from permissions1 and permissions2 into user
Object.assign(user5, permission1, permission2);

// now user = {name: "Saurav Jha", canView: true, canEdit:true }
alert(user5.name); // Saurav Jha
alert(user5.canView); // true;
alert(user5.canEdit); // true;

// If the copied property name already exists, it gets overwritten:
let user6 = { name: "Saurav Jha" };
Object.assign(user6, { name: "Snowber Jha" });
alert(user6.name); // now user6 = { name:"Snowber fayaz "}; 

// We also can use Object.assign to perform a simple object cloning:
let user7 = {
    name:"Snowber Fayaz",
    age: 22
};
let clone = Object.assign({}, user7);
alert(clone.name); // Snowber Fayaz
alert(clone.age); // 30
// There are also other methods of cloning an object, e.g. using the spread syntax clone = {...user}


// Nested cloning
// Until now we assumed that all properties of user are primitive. But properties can be references to other objects.
let user8 = {
    name: "Saurav",
    sizes: {
        height: 182,
        width: 50
    }
};
alert(user8.sizes.height); // 182
alert(user8.sizes.width); // 50

// Now it’s not enough to copy clone.sizes = user.sizes, because user.sizes is an object, and will be copied by reference, so clone and user will share the same sizes:
let user9 = {
    name: "Saurav",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user9);
alert( user9.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user9.sizes.width = 60; // change a property from one place 
alert(clone.sizes.width); // 60, get the result from the other one

/*
To fix that and make user and clone truly separate objects, 
we should use a cloning loop that examines each value of user[key] 
and, if it’s an object, then replicate its structure as well. 
That is called a “deep cloning” or “structured cloning”. 
There’s structuredClone method that implements deep cloning.
*/

// Structured clone
// The call structuredClone(object) clones the object with all nested properties.

let user10 = {
    name: "Saurav Kumar",
    sizes: {
        height: 182,
        width:50
    }
};

let clone = structuredClone(user10);

alert( user10.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user10.sizes.width = 60; // change a property from one place
alert(clone.sizes.width); // 50, not related.

// The structuredClone method can clone most data types, such as objects, arrays, primitive values.


// It also supports circular references, 
// when an object property references the object itself (directly or via a chain or references).
let user11 = {};
// let's create a circular reference
// user.me references the user itself
user.me = user;

let clone = structuredClone(user);
alert(clone.me === clone); // true
// As you can see, clone.me references the clone, not the user! So the circular reference was cloned correctly as well.

// Although, there are cases when structuredClone fails
// error
structuredClone({
    f: function() {}
});


