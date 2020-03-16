const task3Element = document.getElementById('task-3');

function youDidIt() {
    return alert('Hi!');
}

function sayMyName(name) {
    return alert(`Hi, ${name}!`);
}

function combine(a, b, c) {
    const combinedText = `${a} ${b} ${c}`;
    return combinedText;
}

sayMyName('Taylor');

task3Element.addEventListener('click', youDidIt);

const combinedString = combine('This is', 'too', 'cool!!');
alert(combinedString);
