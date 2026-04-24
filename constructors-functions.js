function getDog(name, age, breed, weightInPounds) {
    return {
        name,
        age,
        breed,
        weightInPounds,
        eat() {
            console.log(this.name + ": Chomp");
        },
        bark() {
            console.log(this.name + ": Woof!");
        }
    };
}
function getDog(name, age, breed, weightInPounds) {
    // this = {};
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.weightInPounds = weightInPounds;

    this.eat = function () {
        console.log(this.name + ": Chomp");

    }
    this.bark = function () {
        console.log(this.name + ": Woof!");
    }
    return this;

}

const myDog = new getDog("Rex", 5, "German Shepherd", 80);
console.log(myDog);