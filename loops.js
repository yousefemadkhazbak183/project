let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let idx = 0; idx < numbers.length; idx++) {
//     console.log(numbers[idx]);
// }
for (let index in numbers) {
    console.log(index + ": " + numbers[index]);
}

// While loop
let count = 0;

while (count < numbers.length) {
    console.log(numbers[count]);
    count++;
}

// Do-while loop
let count2 = 0;

do {
    console.log(numbers[count2]);
    count2++;
} while (count2 < numbers.length);

// for in loop
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

let colors = ['Red', 'Green', 'Blue'];

for (let index in colors) {
    console.log(index + ": " + colors[index]);
}