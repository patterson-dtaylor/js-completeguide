# Behind The Scenes of JavaScript

---

## ES5 vs ES6

- ES = ECMAScript
  - Is still in development.

- JS Evolution:
  | ES5 (and older) | ES6 (and newer): Modern JavaScript |
  | --- | --- |
  | Supported in basically all browsers, including old IE | Supported in modern browsers, can (mostly) be transpiled to ES5 |
  | Only had ```var``` not ```let```, or ```const``` | Many new features that help us write cleaner, better, & faster code |
  | Generally same syntax as ES6, but quite some missing features | Still under active development, but ES6 was a big step forward |

## ```var``` vs ```let``` vs ```const```

| ```var``` | ```let``` | ```const``` |
| --- | --- | --- |
| Creates a variable | Creates a variable | Creates a variable |
| Available since...forever | Available since ES6 | Available since ES6 |
| Function & Global Scope | Block scope | Block scope |

- Functional and Global Scope =  ```var``` variable's scope depends on where they are defined.  If a ```var``` variable is defined inside the function then it has local scope only inside that function.  However, if a ```var``` variable is defined globally or within anything other than a function, it will be a part of the global scope and have the capability to be called anywhere in the program.

- Block Scope = ```let``` and ```const``` variables have strict scope rules. These rules are based on block scope which has to do deal with the block statements of functions and conditional statements. If ```let``` and ```const``` variables are defined inside the block scope, then they are defined in the local scope and cannot be called to the global scope.  However, if ```let``` and ```const``` variables are defined globally (outside the block scope), then they **can** be used locally within the block scope.

### ```var``` vs ```let``` scopes

- How ```let`` handles global and local scopes:

```javascript
let name = 'Taylor'; //Global variable

function greet() {
    let age = 30; // Local variable 
    let name = 'Carrie'; //Local && Shadow variable
    console.log(`Hi, ${name}!`);
}

console.log(name); //Outputs Taylor due to the Global scope
greet(); //Outputs 'Hi, Carrie!' due to the local scope

//This cannot work due to age is in the local scope and
//cannot be called globally
//console.log(age);
```

- How ```var`` handles global and local scopes:

```javascript
var name = 'Taylor'; //Global variable

if (name === 'Taylor') {
    var hobbies = ['sports', 'learning JS']; //Global and local variable
    console.log(hobbies);
}
function greet() {
    var age = 30; //Local variable
    var name = 'Carrie'; //Local && Shadow variable
    console.log(`Hi, ${name}! I hear you like ${hobbies[0]}, and ${hobbies[1]}.`);
}

//Outputs strings and the array hobbies because when a var variable is inside a if statement it has
//global and local scope.
console.log(name, hobbies);
greet();

//This cannot work due to age being undefined due to it's placement inside a function.
//console.log(age);
```

### Hoisting

- Hoisting refers to the initialization of variable and the function running the variable.  For example:

```javascript
console.log(name); //Output is undefined

var name = 'Taylor';
```

As you can see, when var is not hoisted in front of the function ```consol.log```, the output for the function is undefined.

```javascript
console.log(name); //Outputs an error "Cannot access 'name' before initialization"

let name = 'Taylor';
```

This code throws an error because the variable must be hoisted (initialized) before the function.

### Re-declaring vs Reassigning

- With ```let``` and ```const```, you cannot re-declare a variable within the same scope. For example:

```javascript
let userName = 'Taylor';
let userName = 'Carrie';

console.log(userName);
```

Code will not work...due to the strictness of ```let``` and ```const```. 

- However, with ```var``` you can re-declare a variable

```javascript
var userName = 'Taylor';
var userName = 'Carrie';

console.log(userName); //Output is Carrie
```

This code is fine because var can be re-declared at any point in the program.  This is **not** a good thing unless you because it makes your code vulnerable to mistakes. 

- Instead use ```let``` and reassign a variable like this.

```javascript
let userName = 'Taylor';
userName = 'Carrie';

console.log(userName) //Output is Carrie
```

## Strict Mode

- Introduced in ES5, strict mode disables certain behavior like declaring a variable without a keyword.  To initiate, put ```'use strict';``` within a program or function.  ES6 took care of many of the issues that strict mode takes care of, so for now just use ES6 standards for variables.

- For more info read this: [Strick Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#Changes_in_strict_mode)

## How JS is Parsed and Compiled

![how-js-is-parsed](https://i.imgur.com/LZ1ua7j.jpg)

For more info, check out these two articles on [V8](https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef "JavaScript V8 Engine Explained") and [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Internals "SpiderMonkey Internals").

## How Code Gets Executed (The Steps of Logic)

- Inside the JavaScript Engine there are two things is the engine is concerned with **Managing Memory** and **Managing Executing Steps**.
- There are two important concepts to take into consideration when dealing with JS code execution.
- **Remember** JavaScript is _single-threaded_: _"One thing at a time."_

| The Heap | The Stack |
| :--- | :--- |
| Memory Allocation: the Heap stores data in your system memory and manages to access to it. This deals with long-term, browser memory, and operating system memory. This is where the functions exists.| Execution Context (short-term memory): Manages program flow (function calls and communication to browser DOM).  The browser engine will push functions into the stack to be executed. The stack itself is like a data structure (a short living data structure) where is it populated by short-living data and popped off when the function has ran. The more functions you call the longer the stack. Esentially, the stack cares about "which thing is happeneing". |

## Primitive vs Reference Types

- Data structures can be categorized into two types/values: **Primitive Values** & **Reference Values**.
  - **Primitive Values**:
    - String, Numbers, Booleans, null, undefined, and Symbol
    - They are stored in memory (usually on the Stack) which means they use low memory and are cheaply duplicated, and variables store the value itself.
    - **The Big Difference** Copying a variable (=assigning it to a different variable) **copies the value**!!  For example:

```javascript
let name = 'Taylor'; //output is undefined

name //output is Taylor

let anotherName = name; //output is undefined

anotherName //output is Taylor

name = 'Carrie'; //output is Carrie

anotherName //output is still Taylor
```

One would assume when you changed the value of ```name```, it would have changed the value of ```anotherName```; however, because ***Primitive Values** copies a new value in memory, ```anotherName``` cannot therefore be influenced by ```name``` because name has been copied into a new place in memory.

  - **Reference Values**:
    - All other objects("more expensive to create") think about what is involved when creating an array or object.
    - These are stored in long-term memory (the Heap), a variable stores a pointer (address) to the location in the Heap. Simply, variables are a **reference** to the object stored in memory (hence the name "Reference Values").
    - Copying a variable (=assign to different variable) **copies the pointer/reference**.  For example:

```javascript
let hobbies = ['Sports'];
let newHobbies = hobbies;

hobbies //output is ["Sports"]
newHobbies //output is ["Sports"]

hobbies.push('Cooking');

hobbies //output is ["Sports", "Cooking"]
newHobbies //output is ["Sports", "Cooking"]
```

Unlike Primitive Values, **Reference Values** are more dynamic in their approach to copying values.  Instead of copying the value in a new slot in memory, **Reference Values** copy a new reference point to the data in memory. Thus, changing the values in all variables that are tied to that specific reference point.

- For more info check out this [link](https://academind.com/learn/javascript/reference-vs-primitive-values/)

## Garbage Collection & Memory Management

- How is the Heap managed?  If it overflows it will kill Chrome or Mozilla, however this will never happen because they also have memory, and instead will kill your app before it kills chrome.
  - **Remeber**: the Stack is managed by popping off items after being used. 
- The V8's Garbage Collector periodically checks the Heap memory for unused objects and removes or clears unused objects from the memory.  
  - For more info check out this [article](https://v8.dev/blog/free-garbage-collection) and this [article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management) about the garbage collector algorithm.
- Beware of **Memory Leaks** which are unused objects, where you still hold references to. 

