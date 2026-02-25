// ===================== Q1 =====================
console.log("Question 1");

const states = ["Andhra Pradesh", "Bihar", "Odisha", "Uttar Pradesh", "Kerala", "Assam"];

const filteredStates = states.filter(state => {
  const firstLetter = state[0].toLowerCase();
  return !["a", "e", "i", "o", "u"].includes(firstLetter);
});

console.log(filteredStates);


// ===================== Q2 =====================
console.log("\nQuestion 2");

let str = 'I love my India';
let reversedSentence = str.split(" ").reverse().join(" ");

console.log(reversedSentence);


// ===================== Q3 =====================
console.log("\nQuestion 3");

let string = 'INDIA';
let arr = string.split("");

arr.splice(3, 0, "O", "N", "E", "S");

console.log(arr.join(""));


// ===================== Q4 =====================
console.log("\nQuestion 4");

let text = "This is a simple javascript string example";
let vowels = 0;
let consonants = 0;

for (let char of text.toLowerCase()) {
  if (char >= 'a' && char <= 'z') {
    if ("aeiou".includes(char)) {
      vowels++;
    } else {
      consonants++;
    }
  }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);


// ===================== Q5 =====================
console.log("\nQuestion 5");

function correctfn(string, wrong, correct) {
  return string.replace(wrong, correct);
}

console.log(correctfn("I luv India", "luv", "love"));


// ===================== Q6 =====================
console.log("\nQuestion 6");

let inputArr = [1,2,3,9,10,7,5,4,3];

let answer = inputArr.filter(num => num > 5);

console.log(answer);


// ===================== Q7 =====================
console.log("\nQuestion 7");

const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];

const result = students.map(student => {
  const total = student.scores.reduce((sum, score) => sum + score, 0);
  const avg = total / student.scores.length;
  return { name: student.name, average: avg };
});

console.log(result);


// ===================== Q8 =====================
console.log("\nQuestion 8");

function repeatedSum(num) {
  while (num > 9) {
    num = num.toString()
             .split("")
             .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return num;
}

console.log(repeatedSum(456));


// ===================== Q9 =====================
console.log("\nQuestion 9");

function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}

console.log(countWords("This is a simple paragraph with multiple words inside."));


// ===================== Q10 =====================
console.log("\nQuestion 10");

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello"));


// ===================== Q11 =====================
console.log("\nQuestion11");

const data = {
  student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

const output = Object.keys(data).map(student => {
  const marks = Object.values(data[student]);
  const avg = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
  return { [student]: { average: avg } };
});

console.log(output);
