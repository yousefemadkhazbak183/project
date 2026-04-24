const dog = {
    name: "Rex",
    age: 5,
    breed: "German Shepherd",
    wightInPounds: 80,
    eat: function () {
        console.log("Chomp");

    },
    bark() {
        console.log("Woof!");
    }
}

function getDogInfo(name, age, breed, wightInPounds) {
    return {
        name,
        age,
        breed,
        wightInPounds,
        eat() {
            console.log("Chomp");
        },
        bark() {
            console.log("Woof!");
        }

    }
}

const anotherDog = getDogInfo("Buddy", 3, "Labrador Retriever", 70);
console.log(anotherDog);