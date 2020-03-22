# More on Functions

- [More on Functions](#more-on-functions)
  - [Recap](#recap)
  - [Parameters vs Arguments](#parameters-vs-arguments)
  - [Function vs Method](#function-vs-method)
  - [Functions are Objects](#functions-are-objects)
  - [Function Expressions: Storing Functions in Variables](#function-expressions-storing-functions-in-variables)
  - [Function Expression vs Function Declarations](#function-expression-vs-function-declarations)
  - [Anonymous Functions](#anonymous-functions)
  - [Arrow Functions](#arrow-functions)
  - [Default Parameters](#default-parameters)
  - [Rest (Spread) Parameter in Functions](#rest-spread-parameter-in-functions)
  - [Function within a Function](#function-within-a-function)
  - [Callback Functions](#callback-functions)
  - [.bind()](#bind)
  - [Other Resources](#other-resources)

---

## Recap

- Functions are **Code on Command**
- Variables and constants created in functions **belong** to that function within the block scope.
- Functions **CAN** take parameters(arguments) and **CAN** return a value
- Functions can be called multiple times (with different arguments)
- Functions can be called **directly** (using greet(name); in the code) & **indirectly** (using addEventLister with a click button to run a function).

## Parameters vs Arguments

- Although these terms are used interchangeably, there is technically a difference between the two.  
  - **Parameters** the variables you specify between parentheses when defining a function.  For example: ```function greet(name) { ... }``` in this example, ```name``` is the parameter.
  - **Arguments** are the **concrete values** you _pass_ to a function when calling that function. For example: ```greet('Taylor');```; ```'Taylor'``` is an argument of the function ```greet();``` for the parameter ```name``` to be precise.

## Function vs Method

- Methods are functions that are attached to an object.  For example:

```javascript
const person = {
    greet: function greet() {
        console.log('Hi there!');
    }
}

person.greet();
```

also

```javascript
const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log('Starting the game!');
}

startGameBtn.addEventListener('click', startGame);
```

## Functions are Objects

- Functions are stored in the Heap
- In memory, they are stored as objects

## Function Expressions: Storing Functions in Variables

- You can express a function with a variable.
  - For Example:

```javascript
const start = function startGame() {
    console.log('Starting the game!');
};

start();
```

- Now you will express the function using the variable ```start``` rather than ```startGame``` because ```startGame``` is unavailable globally.

## Function Expression vs Function Declarations

- Here are two different ways of Defining Functions
    1. Function Declaration / Function Statement
        1. For example

            ```javascript
            function multiply(a, b) {
                return a * b;
            }
            ```

        1. Function Declarations are hoisted to the top of the Heap and can be declared anywhere in the the file (i.e. also after it is used.)
    2. Function Expression
       2. For Example:

            ```javascript
            const multiply = function(a, b) {
                return a * B;
            };

            multiply(2, 3);
            ```

        2. Function expressions are hoisted to the top, but are **not initialized** or **defined**.  Also, they **can't** be declared anywhere in the file (i.e not after it's used).

            ```javascript
            multiply(2, 3);

            const multiply = function(a, b) {
                return a * B;
            };
            ```
        
        **Note** This function will not run because it cannot be initialized before the function is expressed.

## Anonymous Functions

- An anonymous function is a function without a variable, that you need to use in only one spot in the code.

For Example:

```javascript
startGameBtn.addEventListener('click', function() {
    console.log('Starting the game!');
});
```

## Arrow Functions

- Provide a cleaner style to writing functions.

Syntax:

- **No** Arguments / Parameters
  - ```() => { ... }```
  - Empty pair of parenthesis **is** required
- **Exactly one** (1) Argument / Parameters
  - ```arg => { ... }```
  - Parentheses can be omitted
- **Exactly one expression** in function body
  - ```(a, b) => a + b```
  - Curly braces can be **omitted**, result is alway returned
- **More than one expression** in the function body
  - ```(a, b) => { a *= 2; return a + b; }```
  - Curly braces and return statement **required**

- More about Arrow Function Syntax

1. **Default**

```javascript
const add = (a, b) => {
    const result = a + b;
    return result; // very similar to "normal" function, parameters and return statement are OPTIONAL!
};
```

**NOTE** the semi-colon at the end is needed at the end.

2. **Shorter parameter syntax, if exactly one parameter is received.**

```javascript
const log = message => {
    console.log(message);
};
```

**NOTE** parentheses around parameter list can be omitted for exactly one argument.

3. **Empty parameter parentheses if NO arguments are received:**

```javascript
const greet = () => {
    console.log('Hi there!');
};
```

**NOTE** parentheses **must** be added when NO arguments are received.

4. **Shorter function body, if exactly one expression is used:**

```javascript
const add = (a, b) => a + b;
```

**NOTE** curly braces and return statement can be omitted because one express is always returned automatically. 

5. **Function returns an object (with shortened syntax as shown in 4):**

```javascript
const loadPerson = personName = ({name: personName});
```

**NOTE** extra parentheses are required around the object since curly braces would indicate the body of the function.

**Curly Braces** in arrow functions can have two meanings:

1. The can mark the **function body** (the **default** form )

2. They can also **create** an object which you want to return (like above in shorter function body form)

## Default Parameters

JavaScript **is** weird. When you do not pass a parameter into a function, JS sets that parameter to ```undefined``` value. For example:

```javascript
const foo = bar => console.log(bar);

foo(); // undefined
```

However, to set a default parameter the each default parameter will use the (=) operator. For example: ```function funcName(param1 = val1, param2 = val2, ...) {...}```

```javascript
const foo = (bar = 10) => console.log(bar);

foo(); // 10
foo(undefined); // 10
foo(20); //20
```

## Rest (Spread) Parameter in Functions

The spread operator can be used in parameters in functions which we call the rest parameter to represent an indefinite number of arguments as an array.  For example:

```javascript
const sumUp = (...numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
};

console.log(sumUp(1, 5, -4, 10, 7)); // 19
console.log(sumUp(1, 5, -4, 10, 7, 25, 30)); // 74
```

A couple of syntax rules with the rest parameter include:

1. **Must** be the last parameter in the arguments.
   1. ```const sumUP = (...numbers, a) {...} //will throw an error```
2. Can only have  **one** rest parameter in a function because the rest parameter will pull in all data into that one rest parameter.
   1. ```const sumUP = (...numbers, ...letters) {...} //will throw an error```
3. You can have parameters before the rest parameter and they will  evaluated separate the spread parameter.
   1. ```javascript
        const sumUp(a, b, ...numbers) {
            console.log('a', a);
            console.log('b', b);
            let sum = 0;
            for (const num of numbers) {
                sum += num;
            }
            return sum;
        };

        sumUp(1, 4, 9, -7, -5, 10 22);
        //a, 1
        //b, 4
        //29
        ```

## Function within a Function

Because functions are essentially objects and you can store objects within objects, one can run a function within a function and call that function locally.  For example:

```javascript
const sumUp = (...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };
    let sum = 0;
    for (const num of numbers) {
        sum += validateNumber(num);
    }
    return sum;
};

console.log(sumUp(1, 2, 3, 4, 'five'));
// 10
```

Normally, you would want to run functions globally and there is the possibility of a performance hit running functions locally rather than globally.

## Callback Functions

These are functions are called back as some point by something else, the browser for instance.  

A great example of this is when you use ```.addEventListener```.  However, you can build your own.  For example:

```javascript
const sumUp = (resultHandler, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };
    let sum = 0;
    for (const num of numbers) {
        sum += validateNumber(num);
    }
    resultHandler(sum);
};

const showResult = (result) => {
    alert('The result after adding all numbers is: ' + result);
};

console.log(sumUp(showResult, 1, 2, 3, 4, 'five'));
console.log(sumUP(showResult, 1, 4, 10, -3, 6, 12));
```

## .bind()

The ```.bind()``` method is used when you want to pass a value but do not want to pass the value directly to the function.  You can use ```.bind()``` to pass a parameter when you call the function using ```function(otherFunct.bind(this, arg1, arg2, arg3...));```.  For example:

```javascript
const combineOperations = (resultHandler, operator, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };
    let sum = 0;
    for (const num of numbers) {
        if (operator === 'ADD') {
            sum += validateNumber(num);
        } else {
            sum -= validateNumber(num);
        }
    }
    resultHandler(sum);
};

const showResult = (message, result) => {
    alert(message + ' ' + result);
};

combineOperations(showResult.bind(this, 'The result after adding all numbers is:'),
'ADD',
1,
2,
3,
4,
'five');

combineOperations(showResult.bind(this, 'The result after adding all numbers is:'),
'SUBTRACT',
1,
2,
3,
4,
'five');
```

More on ```.bind()``` click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

## Other Resources

[MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)