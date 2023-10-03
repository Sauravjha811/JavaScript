// Garbage Collection
// Memory management in JavaScript is performed automatically and invisibly to us. We create primitives, objects, functions… All that takes memory.

// Reachability
//  main concept of memory management in JavaScript is reachability.
// Simply put, “reachable” values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.


/*
 There’s a base set of inherently reachable values, that cannot be deleted for obvious reasons.
The currently executing function, its local variables and parameters.
Other functions on the current chain of nested calls, their local variables and parameters.
Global variables.
(there are some other, internal ones as well)
*/
// These values are called roots.

// Any other value is considered reachable if it’s reachable from a root by a reference or by a chain of references.
// There’s a background process in the JavaScript engine that is called garbage collector. It monitors all objects and removes those that have become unreachable.

// user has a reference to the object
let user = {
    name: "john"
};
//  The global variable "user" references the object {name: "John"} (we’ll call it John for brevity). The "name" property of John stores a primitive, so it’s painted inside the object.
// if the value of user is overwritten, the reference is lost:
user = null;
// Now John becomes unreachable. There’s no way to access it, no references to it. Garbage collector will junk the data and free the memory.

// Two references
// Now let's imagine we copied the reference from user to admin.
// user has a reference to the object
let user1 = {
    name: "Saurav"
};
let admin = user1;
// Now if we do the same:
user1 = null;
// Then the object is still reachable via admin global variable, so it must stay in memory. If we overwrite admin too, then it can be removed.

// Interlinked objects
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}
let family = marry({
    name:"Saurav Jha"
}, {
    name: "Snowber Fayaz"
})
// As of now, all objects are reachable
// Now let's remove two references:
delete family.father;
delete family.mother.husband;

// Unreachable island
// It is possible that the whole island of interlinked objects becomes unreachable and is removed from the memory.
family = null;
// It’s obvious that John and Ann are still linked, both have incoming references. But that’s not enough.
// The former "family" object has been unlinked from the root, there’s no reference to it any more, so the whole island becomes unreachable and will be removed.

// Internal algorithms
// The basic garbage collection algortihm is called "mark-and-sweep".
/*
1. The following “garbage collection” steps are regularly performed:
2. The garbage collector takes root and "marks" (remembers) them.
3. Then it visits and "marks" all references from them.
4. Then it visits marked objects and marks their references. All visited objects are remembered, so as
not to visit the same object twice in the future 
5. ...And so on until every reachable (from the roots) references are visited.
6. All objects except marked ones are removed.

/* some of the optimizations in garbage collector.
1. Generational collection.
2. Incremental collection.
3. Idle-time collection.
