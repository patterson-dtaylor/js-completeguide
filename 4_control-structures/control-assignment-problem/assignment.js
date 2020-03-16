// produces random number between 0 (including) and 1 (excluding)
const randomNumber = Math.random();
const rndNumber = Math.random();

// #1
if (randomNumber >= 0.7) {
    alert(`Got it! Your number is ${randomNumber}!`);
} else {
    alert(`Nope, ${randomNumber} is less!`);
}

// #4
if (
    (randomNumber > 0.7 && rndNumber > 0.7) || 
    rndNumber <= 0.2 || 
    randomNumber <= 0.2
) {
    alert('Number is greater than 0.7, or smaller than 0.2');
}
console.log(randomNumber);
console.log(rndNumber);

// #2 
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (const num of numbers) {
    console.log(num);
}

let counter = 0;
while (counter < numbers.length) {
    console.log(numbers[counter]);
    counter++;
}

// #3 backwards loops

for (const num of numbers.reverse()) {
    console.log(num);
}

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

