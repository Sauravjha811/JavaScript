// Object methods, "this"
// Objects are usually created to represent entities of the real world, like users, orders and so on:
let user = {
    name: "Saurav",
    age: 22
};

// Method examples
let user1 = {
    name: "Saurav",
    age: 22
};

user1.sayHi = function() {
    alert("Hello!");
};
user1.sayHi(); // Hello!
// A function that is a property of an object is called its method.

// Of course, we could use a pre-declared function as a method, like this:
let user2 = {
    // ...
  };
  
  // first, declare
  function sayHi() {
    alert("Hello!");
  }
  
  // then add as a method
  user2.sayHi = sayHi;
  
  user2.sayHi(); // Hello!


// Method shorthand
// There exists a shorter syntax for methods in an object literal:

// these objects do the same
user = {
    sayHi: function() {
        alert("Hello");
    }
};
// method shorthand looks better, right?
user = {
    sayHi() { // same as "sayHi: function() {...}"
        alert("Hello");
    }
};
// As demonstrated, we can omit "function" and just write sayHi().

// "this" in methods
// It’s common that an object method needs to access the information stored in the object to do its job.
// To access the object, a method can use the this keyword

let user3 = {
    name: "Snowber Fayaz",
    age: 22,

    sayHi() {
        // "this" is the "current object"
        alert(this.name);
    }
};
user3.sayHi(); // Snowber Fayaz

// Technically, it’s also possible to access the object without this, by referencing it via the outer variable:
let user4 = {
    name: "Saurav Jha",
    age: 22,

    sayHi() {
        alert(user.name); // "user" instead of "this"
    }
}
// But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.

let user5 = {
    name: "Saurav",
    age: 22,

    sayHi() {
        alert(user.name); // leads to an error
    }
};
let admin = user;
user = null; // overwrite to make things obious
admin.sayHi(); // TypeError: Cannot read property 'name' of null.
// If we used this.name instead of user.name inside the alert, then the code would work.

// "this" is not bound
// no syntax error
function sayHi() {
    alert(this.name);
}
// The value of this is evaluated during the run-time, depending on the context.

//  here the same function is assigned to two different objects and has different “this” in the calls:
let user6 = { name: "Saurav" };
let admin1 = { name: "Snowber Fayaz" };

function sayHi() {
    alert( this.name );
}

// use the same function in two objects
user6.f = sayHi;
admin1.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user6.f(); // Saurav (this == user)
admin1.f(); // Snowber Fayaz (this == admin)

admin1['f'](); // Snowber Fayaz (dot or square brackets access the method - doesn't matter )


// Calling without an object: this == undefined
function sayHi() {
    alert(this);
}
sayHi(); // undefined in strict mode
// In non-strict mode the value of this in such case will be the global object 

// Arrow functions have no "this"
// Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

let user7 = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};
user7.sayHi(); // Ilya

// Exercise:
function makeUser() {
    return {
        name: "Saurav",
        ref: this  // value -> undefined
    };
}
let user8 = makeUser();
alert( user8.ref.name ); // Error: Cannot read property 'name' of undefined.

// We can rewrite the function and return the same this with undefined value:
function makeUser() {
    return this; // this time there's no object literal
}

alert( makeUser().name ); //Error: Cannot read property 'name' of undefined.
// As you can see the result of alert( makeUser().name ) is the same as the result of alert( user.ref.name ) from the previous example.

// Here's the opposite case:
function makeUser() {
    return {
        name: "Saurav",
        ref(){
            return this;
        }
    };
}
let user9 = makeUser();
alert ( user9.ref().name ); // Saurav
// Now it works, because user.ref() is a method. And the value of this is set to the object before dot ..

// Create a calculator
let calculator = {

    read() {
        this.a = +prompt("Enter the first Number",0);
        this.b = +prompt("Enter the Second Number", 0);
    },

    sum() {
        return this.a + this.b;
    },

    Multiply() {
        return this.a * this.b;
    }
}
calculator.read();
alert( calculator.sum() );
alert( calculator.Multiply() );


let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function() { // shows the current step
        alert( this.step );
    }
}
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

// Chaining
let ladder1 = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
};
ladder1.up().up().down().showStep().down().showStep(); // shows 1 then 0

// more readable
ladder
    .up()
    .up()
    .down()
    .showStep() // 1
    .down()
    .showStep(); // 0