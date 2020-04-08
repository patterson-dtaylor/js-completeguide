# THE DOM

---

## What Is The DOM (Document Object Model)

Within the browser, HTML code is parsed and rendered by the browser.  JS can interact with this parsed and rendered code through the DOM which exposes Web API to allow JS to work with the parsed document.  In other words, the DOM is an object model of the parsed HTML code the browser makes behind the scenes to interact with JS, thus allowing JS to manipulate and expose HTML code.

A short example:
```html
<body>
    <h1>Welcome!</h1>
</body>
```

```javascript
const bodyTitle = document.querySelector('h1');
```

Through the dome JS can grab and manipulate the ```<h1>``` tag.  

### DOM Tree

When HTML source code is rendered to the window, the window creates the DOM behind the scenes.  The DOM creates a node tree of each HTML element (```<html>, <head>, <body>, <h1>,``` etc.) node that is structured like the HTML code.  White space and text in side the HTML code is rendered as a text node in the DOM as well.

## Document & Window

| document | window |
|---|---|
| Root DOM Node (top most entry point to rendered HTML code) | The real global, active Browser Window or Tab. |
| Provides access to element querying, DOM content, etc | Acts a global storage for script. Also provides access to window-specific properties and methods. |

## DOM Nodes and Elements

### Querying Elements

| Querying a Single Element | Querying Multiple Elements |
|---|---|
| ```.querySelector(<CSS Selector>)```, ```.getElementById(<ID>)``` | ```.querySelectorAll(<CSS Selector>)```, ```.getElementsByClassName(<CSS Class Name>)```, ```.getElementsByTagName(<HTML Tag Name>)``` |
| Returns a **single** element | Returns a **collection** of elements (array-like objects): NodeList |
| Different ways of querying elements (by CSS selector, by ID) | Different ways of querying elements (by CSS selector, by tag name, by CSS class) |
| Direct reference to DOM element is returned | querySelectorAll() returns a non-live NodeList; getXByY return live NodeList |

**Note**: Nodes are just **JS objects** in the end (i.e **reference values**); these methods **return the object references** (address)

| Nodes | Elements |
|---|---|
| Nodes are objects that make up the DOM | Elements are one type of nodes; they have special properties and methods to interact with the elements  |
| HTML tags are "element nodes" or just "elements" | Available methods and properties depend on the kind of element |
| Texts create "text nodes" | Can be selected in various different ways (via JS) |
| Attributes create "attribute nodes" | Can be created and removed via JS |

#### Examples of Querying Elements

- Getting Elements by id (single node):

```javascript
document.getElementById('main-title');
// --> Will grab the node with the id="main-title"

//You can also set an element to a variable:
const h1 = document.getElementById('main-title');

//Then you can use methods using the created variable
h1.innerText // --> This will show the text inside the node attached to id="main-title"
```

- Getting Elements by class or tags (single or multiple nodes):

```javascript
document.querySelector('.item-list'); //You must put the CSS syntax for the selector.
//--> Will output the first element with classname="item-list"

document.querySelectorAll('.item-list');
//--> Will output all elements with classname="item-list"

//Selecting a child of a parent changes with syntax.
//For example: getting the first child of a list (li) from the parent unordered list (ul)
document.querySelector('ul li:first-of-type');
//--> Outputs the fist li in the ul

document.querySelector('ul li:last-of-type');
//--> Outputs the last li in the ul

document.querySelector('ul li:nth-of-type(2)');
//--> Outputs the second li in the ul

//You can also store elements as variables or constants and then select certain elements.
const ul = document.querySelector('ul');

ul.querySelector('li');
//--> Outputs the first li of the ul.
```

## Evaluating & Manipulating Elements

Here is an example of evaluating and manipulating elements in the DOM.


```html
<!-- Take this p tag -->
<p id="welcom-text" class="text-default">Welcome!</p>
```

Using js we can evaluate and manipulate the p tag using:

```javascript
//create a constant by selecting the p tag with:
const p = document.getElementById('welcome-text');

//Here we can evaluate the constant with:
p.textContent //--> Outputs "Welcome!"
p.id //--> Outputs "welcome-text"
p.className //--> Outputs "text-default"

//Here we can manipulate the constant with:
p.className = "new-class" //--> <p ... class="new-class">

//Here we can manipulate the constant with CSS styling:
p.style.color = "gold"; //--> Outputs the text in gold color
p.style.backgroundColor = "black"; //--> Outputs the background color to black
p.style.textAlign = "center"; //--> Outputs the text centered
```

How do I know what to use?

```console.dir(<whatever element you want to select>);```

or use [MDN](https://developer.mozilla.org/en-US/), search fo the tag you want to explore, and **click** the DOM interface link and explore from there.

## Attributes vs Properties

- Often (but **not** always!), attributes are mapped to properties and "live synchronization" is set up.
  - Remember **attributes** are placed in HTML code on event tags (```id```, ```class```, ```value```)
  - Also, **properties** are automatically added on created DOM objects.

Examples of how "live synchronization" is set up:

```<input id="input-1" class="input-default" value="Enter text">```

```javascript
const input = document.querySelector('input');

input.id // 1:1 mapping plus live-sync
input.className // Different names but live-sync
input.value // 1:1 mapping but 1-way live-sync on property not attribute
```

To change the attribute you must use ```.setAttribute``` for example:

```javascript
input.setAttribute('value', 'Enter text!'); 
//This changes the attribute, but does not change the value.

input.value = input.getAttribute('value');
//This will change the value of the property to reflect what is in the input attribute.
```

## Selecting Multiple Elements

Here are examples of a couple of ways to select multiple elements:

- Using ```.querySelectorAll()```

```javascript
//Selects all li elements
const allLis = document.querySelectorAll('li');

allLis;
//--> Outputs the li in array

allLis[1];
//--> Outputs the index of the array
```

- Using **script.js** file with loops

```javascript
const listItemElements = document.querySelectorAll('li');

for (const listItemEl of listItemElements) {
    console.dir(listItemEl);
}
```

## Traversing the DOM

- Traversing the DOM is when you select an element and then traverse to it children. 

### Children, Descendants, Parents, & Ancestors Elements

- **Child Element**:
  - A direct child node or element
  - Example:

    ```html
    <div>
        <p>
        A <em>test!</em>
        <p>
    </div>
    ```

  - ```<p>``` is a child of ```<div>```. ```<em>``` isn't!

- **Descendant Element**:
  - Direct or indirect child node or element
  - Example:

     ```html
    <div>
        <p>
        A <em>test!</em>
        <p>
    </div>
    ```

  - ```<p>``` is a descendant of ```<div>``` and so is ```<em>```!

- **Parent Element**:
  - Direct parent node or element
  - Example:
  
  ```html
    <div>
        <p>
        A <em>test!</em>
        <p>
    </div>
    ```

  - ```<div>``` is a parent of ```<p>``` but not of ```<em>```!

- **Ancestor Element**:
  - Direct or indirect parent node or element
  - Example:
  
  ```html
    <div>
        <p>
        A <em>test!</em>
        <p>
    </div>
    ```

  - ```<div>``` is a ancestor of ```<p>``` and of ```<em>```!

### Traversing Methods

Here are some examples of traversing the DOM. 

Current node = ```<div>```

- If I want traverse this node's **parent** I could use:
  - ```.parentNode```
  - ```.parentElement```
  - ```.closest('')```
- If I want to traverse to this node's **children** I could use:
  - ```.firstChild```
  - ```.firstElementChild```
  - ```.childNodes```
  - ```.children[index]```
  - ```.querySelector('')```
  - ```.lastChild```
  - ```.lastElementChild```
- If I want to traverse to this node's **siblings** I could use:
  - ```.previousSibling```
  - ```.previousElementSibling```
  - ```.nextSibling```
  - ```.nextElementSibling```

## Styling DOM Elements

- 3 ways to Style DOM Elements

| Via style Property | Via className | Via classList |
|---|---|---|
| Directly target individual CSS styles (on the element) | Directly set the CSS classes assigned to the element | Conveniently add, remove or toggle  CSS classes |
| Controls styles as inline styles on the element | Set or Control all classes at once | Fine-grained control over classes that are added |
| Style property names are based on CSS properties but have adjusted JS names (e.g. backgroundColor) | You can also control the ```id``` or other properties | Can be used with className (with care) |

Example of styling DOM Elements:

```javascript
// Declare variables
const section = document.querySelector('section');
const visibleButton = document.querySelector('button');

// Section background color:
// With style property:
section.style.backgroundColor = 'teal';
// With adding class names from CSS styleSheet
section.className = 'red-bg';

// Using the DOM to manipulate a button
visibleButton.addEventListener('click', () => {
  // Using an if statement to toggle the button

//     if (section.className === 'red-bg visible') {
//         section.className = 'red-bg invisible';
//     } else {
//         section.className = 'red-bg visible';
//     }

    section.classList.toggle('invisible');
});
```

## Creating & Inserting Elements

- Two ways to create or insert elements in the DOM
  1. HTML string(s)
       - innerHTML
         - Renders a HTML string
       - insertAdjacentHTML()
         - Renders a HTML string in a specific position
  2. createElement()
       - appendChild() or append()
         - Append new DOM elements or nodes
       - prepend(), before(), after(), insertBefore()
         - Insert new DOM elements or nodes in specific position
       - replaceChild(), replaceWith()
         - Replace existing DOM elements and nodes with new ones

### Adding Elements or Nodes via HTML in Code

```javascript
//If you want to re-render an HTML Element, use innerHTML.
//innerHTML re-renders the HTML element which will loose the user's input.
//Only use when you want to change all HTML of the element.
section.innerHTML = '<h2>Helllooooo!!</h2>';

//If you want to add to an HTML element without loosing user input,
//use insertAdjacentHTML(position, text);
div.insertAdjacentHTML('beforeend', '<p>Everything is going to be okay!</p>');
```

- **NOTE** Although this insertAdjacentHTML() works better than .innerHTMl, it still requires more work to traverse to the new element you created.  A better method is below.

Checkout more about ```insertAdjacentHTML()``` [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) on MND.

### Adding Elements via createElement()

- If I want to create a new element and append it to the end of a list I would use JS.

```javascript
const list = document.querySelector('ul');
const newLi = document.createElement('li'); //Always use .createElement() on the document!!

newLi.textContent = 'Item 4'; //first manipulate the element how you want.
newLi.style.backgroundColor = 'blue'; //next style how you want
list.appendChild(newLi); //last use .appendChild(element); to place the element
```

### Insertingn DOM Elements with append(), prepend()

- **NOTE** the difference between ```appendChild()``` and ```append()``` is not much except that you can add variables and strings to ```append()``` where you can only add variables to ```appendChild()```. Also, ```append()``` doesn't work on Internet Exporler.  See more [here](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append)

- Here are some examples of how to add elements with ```append()``` and ```prepend()```

```javascript
const list = document.querySelector('ul');
const newLi4 = document.createElement('li');
const newLi5 = document.createElement('li');
const newLi6 = document.createElement('li');
const newLi7 = document.createElement('li');

newLi4.textContent = 'Item 4';
newLi5.textContent = 'Item 5';
newLi6.textContent = 'Item 6';
newLi7.textContent = 'Item 7';

list.prepend(newLi4);
list.firstElementChild.nextElementSibling.after(newLi5);
list.lastElementChild.before(newLi6);
list.lastElementChild.after(newLi7);

list.append('This does not look good...');
list.lastElementChild.replaceWith(newLi6);

// This works better with Safari
const lastChild = list.lastElementChild
lastChild.insertAdjacentElement('afterend', newLi7);
```

### Cloning DOM Nodes

- You can clone DOM Nodes simply with ```.cloneNode(boolean)```

For example:

```javascript
const list = document.querySelector('ul');
const newLi4 = document.createElement('li');
const cloneLi4 = newLi4.cloneNode(true);

// This will create two new nodes in the ul where one is the clone of the other. 
list.append(newLi4, cloneLi4);
```

## Removing Elements

- Two ways to remove elements from the DOM 
  - ```.remove();``` 
    - Cannot be used in Internet Explore
  - ```.removeChild(element);```
    - Must reference the parentElement prior to removing the child. 

```javascript
const list = document.querySelector('ul');

list.remove(); //removes from the DOM

//A more IE friendly process
list.parentElement.removeChild(list);
```

