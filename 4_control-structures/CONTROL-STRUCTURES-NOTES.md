# Control Structures (Conditional Code & Loops)

---

## Conditional Statements (if statements) & Expressions

### Boolean Operators

**Boolean Operators** or (Conditional Operators): these operators are important for conditional code that return ```true``` or ```false```.

|  Operator | What does it do?  | Examples |
|:---:|---|:---:|
| ```==``` | checks for equality  | ```a == b```  |
| ```!=```  | checks for value inequality  | ```a != b```  |
| ```=== and !==```  | checks for value **AND** type (in)equality | ```a === b``` or ```a !== b```  |
|```>``` and ```>```| checks for value being greater or smaller | ```a > b``` or ```a < b```|
| ```>=``` and ```<=``` | checks for value being greater or equal to or smaller or equal to | ```a >= b``` and ```a <= b```|
| ```!``` | checks if **NOT** true or for negation | ```!a```|
| ```&&``` | checks if condition a and condition b together are equal | ```name === 'Taylor && age === 30``` |
| ```||``` | checks if condition or condition b are equal as an alternative | ```name === 'Taylor || age === 30``` |

- **Note**: JS is weird. The difference between ```==``` and ```===``` is bizarre.

  - For example: if I compare the equality of numbers using ```2 == 2``` is will reslut with ```true```. Simple enough...however, if I compare the equality of ```2 == '2'``` the result will be true as well!  How can a number equal a string?
    - For most cases always use ```===``` or ```!==``` when comparing equality because ```===``` will check for equality **AND** value.  e.g. ```2 === '2'``` //```false```

### Conditional Code

**Conditional Code**: is a function that has an if statement (someCondition) that runs either option A or option B.  The condition relies on a boolean that is set to either ```true``` or ```false```.

- Always keep in mind that an if statement **has** to be a **boolean value**.
  - ```if (condition) {...}```
- Often, you'll generate a boolean value with the help of boolean operators ```===, >, and <```.
- If you have a variable that holds a boolean, you can use it without any extra operator.
Example:

```javascript
const isLoggedIn = true;
if (isLoggedIn) {
    // This code will execute because isLoggedIn is true
}
```

- You can also use negation or invert the value using an if/else statement.
Example:

```javascript
const isLoggedIn = true;
if (!isLoggedIn) {
    // This code will NOT execute
} else {
    // This code will execute because isLoggedIn is true
}
```

- Another example:
  
```javascript
if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
```
  
- Comparing strings are a little more tricky... Strings can be compared using ```>``` or ```<``` operators.  However, JS compares the strings using standard lexicographical ordering that is based on Unicode Values.  This means: ```b``` is greater than ```a```.
  - To do this, JS always looks at the first character and only considers the other characters if the first characters are similar.  
**Note**: Capital letters are considers smaller than lowercase letters.

Example:

```javascript
'ab' > 'aa' //true
'a' < 'B' //false
'a' > 'b' //false
```

### Comparing Objects and Arrays

- When comparing objects and arrays, they will always return false!  
  - ```{name: 'Taylor'} ===``` or ```== {name: 'Taylor'}``` will return false.

- Array are the same, for arrays are essentially objects. 

- Why is this?  Because Objects and Arrays are special in JS, Objects and Arrays are stored in different parts of memory.

- You can compare values from arrays and key value pairs from objects, just not as a whole. 
Example:

```javascript
const person1 = [name: 'Carrie'];
const person2 = [name: 'Carrie'];

person1.name === person2.name  //true
```

### Combining Conditions

- You can combine conditions with ```&&``` or ```||```.
- ```&&``` evaluates together and yields true if **each** condition yields true.
- ```||``` evaluates as an alternative.
- This code will yield true if Part 1 **OR** Part 2 yields true
  - ```name === 'Max' && age === 30 || isAdmin```
- If you want to control what is evaluated use parentheses. 

Example:

```javascript
if (
        calculationType !== 'Add' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE'
    ) {
        return;
    }
```

### Operator Precedence

**Operator precedence** determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.

- Click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) for reference on operator precedence.

### Falsy and Truthy Values

JavaScript Conditions work with booleans (true/false) **or** with "falsy"/"truthy" values. 

Consider this:
```javascript
const nameInput = 'Taylor';
if (nameInput) {...}
```
Because ```nameInput``` yields a string and **NOT** a boolean, JavaScript tries to coerce the value to boolean if a boolean is required!  

**Note1**: Of course, JavaScript **doesn't check** if ```naveInput``` is equal to ```'Taylor'```.  ```if (nameInput)``` yields true if ```nameInput``` is a **non-empty string**.

| Value | Boolean|
| :--- | ---: |
| 0 | false |
| Any number (including negative numbers) | true |
| '' or "" or `` (empty string) | false |
| ANY other non-empty string (incuding 'false') | true |
| ALL objects {} and arrays [] | true |
| null, undefined, and NaN | false |

## Ternary Operators (Conditional Expressions)

**Remember** if statements return **NO** value!

- This will not work!

```javascript
const userName = if (isLogin) {
    return 'Taylor';
} else {
    return null;
}
```
- You **can** use this, however!

```javascript
const userName = isLogin ? 'Taylor' : null;
```

- This reads as: if condition (isLogin) is truthy return (?) value ('Taylor'), else ( : ) return null.

## "Boolean Tricks" with Logical Operators

- Boolean Coercion via double negative (**double bang: !!**) operator
  - Example: ```!!""``` or ```!!1```
  - Reason: this gives a true boolean rather than a truthy or falsy value.

- Default value assignment via **OR** ( || ) operator
  - Example: ```const name = someInput || 'Taylor';```
  - Reason: return someInput if not falsy, return 'Taylor' otherwise.

- Use value if condition is true via **AND** ( && ) operator
  - Example: ```const name = isLoggedIn && 'Taylor';```
  - Reason: if isLoggedIn is true, then 'Taylor' will be return.  Return false otherwise.

## Working with "switch-case" Statements

Much like an if/else if statement, a switch statement takes an expression that yields a value.

- Best used in the case where you have many else if statements. 

- Here's the structure:

```javascript
switch (condition) {
    case condition met:
        return value;
        break;
}
```

## Loops in JavaScript

Loops offer a quick and easy way to repeat an action some number of times.

There are 4 main types of loops:

1. for loop:
   - Executes code a certain amount of times (with counter variable)

Example: incrementing the variable:

```javascript
for (let i = 0; i < 3; i++) {
    console.log(i);
}
```

Example: decrementing the variable:

```javascript
for (let i = 10; i > 0; i--) {
    console.log(i)
}
```

Example of for loop with an array

```javascript
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

2. for-of loop:
   - Executes for every element in an array

Example: incrementing the variable:

```javascript
for (const el of array) {
    console.log(el);
}
```
Another example:

```javascript
for (const logEntry of array) {
    console.log(logEntry);
}
```
**Note** if you want the index of eace value in the array you **must** set a variable for index before the loop and **increment** the variable.  Such as:

```javascript
let i = 0;
for (const el of array) {
    console.log(el);
    console.log(i);
    i++;
}
```

3. for-in loop:
   - Executes for every key in an object
   - Example:

```javascript
for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
}
```

or you can use a nested loop such as:

```javascript
let i = 0;
    for (const logEntry of battleLog) {
        console.log(`#${i}`);
        for (const key in logEntry) {
            console.log(`${key} => ${logEntry[key]}`);
        }
        i++;
    }
```

4. while loop:
   - Executes code as long as a condition is true
   - Example

```javascript
let n = 0;
let x = 0;
while (n < 3) {
    n++;
    x += n;
}
```

- After the first pass: ```n``` = ```1``` and ```x``` = ```1```
- After the second pass: ```n``` = ```2``` and ```x``` = ```3```
- After the third pass: ```n``` = ```3``` and ```x``` = ```6```

or

```javascript
let randomNumbers = [];
let finished = false;
while (!finished) {
    const rndNumber = Math.random();
    randomNumbers.push(rndNumber);
    if (rndNumber > 0.5) {
        finished = true;
        console.log(randomNumbers);
    }
}
```

**do** while loop executes the condition prior to the loop. For example:

```javascript
let i = 3;
do {
    console.log(i);
    i++;
} while (i < 3);
```

**note** the result is 3 because the ```do``` loop block is ran before the loop.

## Break and Continue Keywords

- **break** is a keyword used when you want to stop a loop at a certain point. 
- Example:

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
```

This will stop the loop at 3.

- **continue** is a keyword much like break, however it allows the loop to continue rather than fully stopping the loop
- Example:

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
```

This will skip 3 and continue with the rest of the loop.

## Labeled Statements

- Although rarely seen, these are developer generated keywords for loops.
- Example:

```javascript
let i = 3;
outerWhile: do {
    console.log('Outer', i);
    for (let i = 0; i < 5; i++) {
        if (i === 3) {
            break outerWhile;
            //continue outerWhile;  This is dangerous! Infinite LOOP!
        }
        console.log('Inner', i);
    }
    i++;
} while (i < 3);
```

This will break the outerWhile loop when the inner for loop outputs 3.

## Error Handling

- **First**, Some errors can't be avoided (beyond your control as a developer)
  - User Input Errors
    - For example: users enters text like 'hi' instead of a number
  - Network Errors
    - For example: server is offline

- To combat this you need to **throw** and **catch** errors to fail gracefully or recover if possible

- ```throw``` example:

```javascript
const userInput = prompt('Give me a number.');
if (isNaN(userInput) || userInput <= 0) {
    throw { message: 'Invalid user input, not a number!' };
}
```

- the **try catch** error handling is mostly used in the server-side, however you can use it on the front-side.  

-Typical **try catch** syntax.

```try {...} catch(error) {...}```