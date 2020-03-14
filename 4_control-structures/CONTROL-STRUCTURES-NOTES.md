# Control Structures (Conditional Code & Loops)

---

## Conditional Statements (if statements) & Expressions

---

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

## Boolean Values & Operators

---



## Loops in JavaScript

---

## Error Handling

---