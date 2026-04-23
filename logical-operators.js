// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
 
// || (logical OR) operator returns true if at least one of the operands is true, and false if both operands are false. It is commonly used in conditional statements to check multiple conditions and execute code if at least one condition is met.

let hasLicense = true;
let hasCar = false;

const canDrive = hasLicense || hasCar;
console.log(canDrive);




// console.log(true && true); true
// console.log(true && false); false
// console.log(false && true); false
// console.log(false && false); false


// && (logical AND) operator returns true if both operands are true, and false if at least one operand is false. It is commonly used in conditional statements to check multiple conditions and execute code only if all conditions are met.
let isAdult = true;
let hasID = false;

const canEnterClub = isAdult && hasID;
console.log(canEnterClub);


// ! (logical NOT) operator returns the opposite of the operand's boolean value. It is commonly used to reverse the truthiness of a value.
let isClosedOnSunday = true;
const isRestaurantOpen = !isClosedOnSunday;
console.log(isRestaurantOpen);

// ?? 

let a = null;
const result = (a !== null && a !== undefined) ? a : "Default Value";
console.log(result);

