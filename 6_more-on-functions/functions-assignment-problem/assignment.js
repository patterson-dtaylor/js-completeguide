// function sayHello(name) {
//     console.log('Hi ' + name);
// }

//# 1
const sayHello1 = name => console.log('Hi, ' + name);

//# 2
const sayHello2 = (greeting, name) => console.log(greeting + name);

const sayHello3 = () => {
    console.log('Hi, Taylor!');
};

const sayHello4 = name => 'Hi, ' + name;

sayHello1('Taylor!');
sayHello2("What's up, ", "Taylor!");
sayHello3();
console.log(sayHello4('Taylor!'));

//# 3
const sayHello5 = (greeting, name = 'Taylor!') => {
    console.log(greeting + name);
};

sayHello5('Hi, ');

//# 4
const checkInput = (callBack, ...strings) => {
    let hasEmptyText = false;
    for (const text of strings) {
        if (!text) {
            hasEmptyText = true;
            break;
        }
    }
    if (!hasEmptyText) {
        callBack();
    }
};

const callBack = (result) => {
    alert('The result after combining the string is: ' + result);
};

checkInput(() => { console.log('All not empty!'); }, 
    'Hi', 
    ', ', 
    'Taylor!'
);