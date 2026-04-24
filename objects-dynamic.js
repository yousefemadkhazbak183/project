const person = { name: "yousef" };
console.log(person.name);

person.favoriteFood = "Pizza";
console.log(person.favoriteFood);

person["FavoriteColor"] = "Red";
console.log(person);


delete person.favoriteFood;
console.log(person);

person.eat = function () {
    console.log("Start eating");
}
person.eat();