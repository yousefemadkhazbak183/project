function add(num1, num2) {
    return num1 + num2;
}

// const result = add;
// console.log(result(2, 4));

function programming(name) {
    this.name = name;
    this.writeOfCode = function () {
        console.log(this.name + " is writing code");
    }
}
console.log(programming.length);
console.log(programming.constructor);