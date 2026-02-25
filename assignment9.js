console.log("=== Question 1: var, let, const ===");
var globalVar = "I am var";
let blockLet = "I am let";
const blockConst = "I am const";
function scopeExample() {
  if (true) {
    var x = 1;
    let y = 2;
    const z = 3;
  }
  console.log(x);
}
scopeExample();

console.log("\n=== Question 2: Second Fruit ===");
const fruits = ["apple", "banana", "mango", "orange", "grape"];
function getSecondFruit() { return fruits[1]; }
console.log(getSecondFruit());

console.log("\n=== Question 3: Push and Pop ===");
function modifyArray(arr) { arr.push("newElement"); arr.pop(); return arr; }
console.log(modifyArray([1, 2, 3]));

console.log("\n=== Question 4: Square Numbers ===");
const numbers = [1, 2, 3, 4, 5];
function squareNumbers(arr) { return arr.map(num => num * num); }
console.log(squareNumbers(numbers));

console.log("\n=== Question 5: Filter Odd Numbers ===");
function filterOdd(arr) { return arr.filter(num => num % 2 !== 0); }
console.log(filterOdd([1, 2, 3, 4, 5, 6]));

console.log("\n=== Question 6: Person Greeting ===");
const person = { name: "Honey", age: 20, occupation: "Student" };
function greet(p) { console.log(`Hi, my name is ${p.name}, I am ${p.age} years old and I am a ${p.occupation}.`); }
greet(person);

console.log("\n=== Question 7: Rectangle Area ===");
function getArea(obj) { return obj.width * obj.height; }
console.log(getArea({ width: 5, height: 10 }));

console.log("\n=== Question 8: Object Keys ===");
function getKeys(obj) { return Object.keys(obj); }
console.log(getKeys({ name: "Honey", age: 20, city: "Kolkata" }));

console.log("\n=== Question 9: Merge Objects ===");
function mergeObjects(obj1, obj2) { return Object.assign({}, obj1, obj2); }
console.log(mergeObjects({ name: "Honey" }, { age: 20 }));

console.log("\n=== Question 10: Sum with Reduce ===");
const nums = [1, 2, 3, 4, 5];
function sumArray(arr) { return arr.reduce((acc, curr) => acc + curr, 0); }
console.log(sumArray(nums));