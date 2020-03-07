# JavaScript Intro Notes

---

## What is JavaScript?

![JS Logo](/intro/markdown-photos/jslogo.png)

- JavaScript (JS) is a **dynamic, weakly** typed programming language which is compiled at **runtime**.  It can be executed as part of a webpage in a browser or directly on any machine ("**host environment**").

- JS was created **to make webpages more dynamic** (e.g. change content on a page directly from inside the browser). Originally, it was called LiveScript, but due to the popularity of Java, it was renamed to JavaScript. 

- In other words...
  
  - JS is a **dynamic, weakly** typed programming language
  - JS is an interpreted **"on the fly"** compiled language
  - JS is **"hosted language"** that runs in different environments (browser, Node.js, React)
  - JS mostly runs in a browser (Chrome, Firefox)

## How is JavaScript Executed?

- Your code is executed in a JavaScript Engine.
  
  - JavaScript Engines are built-into the browser.
  
    - V8 (Chrome) || SpiderMonkey (Firefox) for example

- Jobs of the engine.

   1. Parse Code

   2. Compile to Machine

   3. Execute Machine Code

        - Which always happens **on a single thread**
  
- Finally, effects the webpage.

## Dynamic? Weakly Typed?

### Dynamic, interpreted Programming Language

- JS is not pre-compiled, rather it is **parsed** and **compiled** "on the fly" (e.g. in the browser)

- Code **evaluated** and **executed** at runtime

- Code can **change** at runtime (e.g. type of a variable)

### Weakly Typed Programming Language

- Data types are **assumed** (e.g. assigned to variables) automatically

- You don't **define** that some variable **must** hold a certain value (e.g. string or number)

- Data types are _not set in stone_ but can *change*

## Running JS on a Host Environment

### Client-Side (Browser-Side)

- The origin of JS was to **create** more dynamic websites by **executing** in the browser!

- JS can **manipulate** the HTML and CSS code (through the _DOM_) and **send** background HTTP requests.

- JS can use different browser vendors which provide their own JS execution engines (V8)

- Allows **interactions** with webpages and browser API (e.g. get user location)

- However, JS CAN'T **access** the local filesystem or **interact** with the operating system (JS is much like a SandBox)

### Server-Side (Node.js)

- Google's V8 was **extracted** to run JS anywhere! 

- Node.js can be **executed** on any machine and is therefore often **used** to build web backends (server-side JS).

- Node.js CAN **access** the local filesystem and interact with operating system with special non-browser APIs.

- Node.js CANNOT **manipulate** HTML or CSS.

#### Note: The syntax, concepts, core features, etc. ARE exactly the same!

### Why Learn the Client-Side First?

- It is JS's Origin
  
- No Alternatives to JS in the browser

- Node.js used the same syntax

- (My opinion) The Front-end has much more instant satisfaction!

## Some JS History

- 1995 - Netscape introduces "LiveScript" which is changed to "JavaScript" due to the popularity of JAVA.

- 1996 - JS submitted to ECMA (European Computer Manufacturers Association) International to start standardization.

- 1997 - 2005 - Standardization efforts made.

- 2006 - 2011 - Huge progress made in JS ecosystem

- 2012 - 2020 - Exponential growth and evolution of the language

## ECMAScript and JS

### ECMAScript

- ECMA is a standard organization that evolves the ECMAScript language

- ECMA is not directly used, but browsers (Chrome, Firefox) implement the standards into the JS engines

### JS

- JS is the most famous ECMAScript implementation (others include ActionScript and Jscript)

- Each browser comes with its own JS engine that also defines which features are actually supported by that specific browser

#### Both are under ACTIVE development