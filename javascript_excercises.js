// #1 Variable and data types
console.log("#1 Variable and data types");
let myNumber = 10;
let myString = "Hello, Dialogue systems!";
let isTrue = true;
console.log("These are my data types:", myNumber, myString, isTrue, "\n")

//#2 Conditional statemsnts and loops
console.log("#2 Conditional statemsnts and loops");

let number = 5;
if (number > 0) {
    console.log("This is Positive number.\n");    
} else {
    console.log("This is Not a positive number.\n")

}
//#3 Basic Function creation
console.log("#3 Basic Function creation");

function add(a, b){
    return a + b;
}
console.log("The sum of 5 and 10 is equal to", add(5,10), "\n");

//#4 Working with Arrays and Obejcts
console.log("#4 Working with Arrays and Obejcts");

let fruit = ["apple", "banana", "cherry"];
let person = {name: "Gorge", age: 34};
console.log(fruit[0]);
console.log(person.name);

//#Practicing common Algorithm

// //Exercise 1
console.log("\nExercise 1: randomize and input/prompt");
// let randomNumber = Math.floor(Math.random() * 10) + 1;
// let userGuess = parseInt(prompt("Guess a number between 1 and 10"));
// if (userGuess === randomNumber){
//     console.log("Good work!");
//     alert("Good work! You Guessed it correct!");
// } else {
//     console.log("Not correct guess.")
//     alert(`Not correct guess. The correct number was ${randomNumber}.`)

// }

console.log("\nExercise 2: operations and functions");

function checkFifty(num1, num2) {
let number1 = Number(num1);
let number2 = Number(num2);

return number1 === 50 || number2 === 50 || (number1 + number2 === 50);

}

console.log(checkFifty(50,10));
console.log(checkFifty(20,30));
console.log(checkFifty(25,25));
console.log(checkFifty(40,10));
console.log(checkFifty(50,0));
console.log(checkFifty("20","30"));

console.log("\Exercise 3: finding string");

const names = ["Anna", "Johannes", "Paula", "Daisy"];

const index = names.indexOf("Paula");
console.log("The index of Paula is:", index);

const exist = names.includes("Paula");
console.log(exist);
console.log(`It ${exist} that the name with index ${index} is in ${names}`);

const searchName = "PAULA".toLowerCase();
const existInsensitive = names.some(name => name.toLowerCase() === searchName);
console.log(existInsensitive);

console.log("\Exercise 4: strings and length");
function addThree(str){
    if (str.length < 3) {
        return "String length must be 3 or more.";
    }
    const lastThree = str.slice(-3);
    return lastThree + str + lastThree;
}

console.log(addThree("umbrella"));
console.log(addThree("cap"));
console.log(addThree("hi"));


console.log("\Exercise 5: looping");

const names_list = ["Anna", "Johannes", "Paula", "Daisy"];

const names_listWithLength = names_list.map(name =>{
    const lengthDoubled = name.length * 2;
    return `${name} ${lengthDoubled}`
});
console.log(names_listWithLength);


console.log("\Exercise 6: objects");

let zooAnimals = {
    "giraffe": { "weight": 910, "origin": "Tanzania" },
    "lion": { "weight": 200, "origin": "Tanzania" },
    "elephant": { "weight": 5000, "origin": "India" },
    "penguin": { "weight": 30, "origin": "Argentina" },
    "koala": { "weight": 10, "origin": "Australia" },
  };
console.log("\n -a) Check if exists")
console.log("giraffe" in zooAnimals);
console.log(zooAnimals.hasOwnProperty("giraffe"));

console.log("\n -b) Check weight 200 kg");

const hasWeight200 = Object.values(zooAnimals).some(animal => animal.weight === 200);
console.log(hasWeight200);

console.log("\n -c) Check origin India");
const hasOriginIndia = Object.values(zooAnimals).some(animal => animal.origin === "India");
console.log(hasOriginIndia);

console.log("\n -d) Add new animal");
zooAnimals["panda"] = {"weight": 100, "origin": "China"};
console.log(zooAnimals);

console.log("\n -e) Adding the about method");
zooAnimals.about = function(animal) {
    if (this[animal]) {
        const { weight, origin } = this[animal];
        return `${animal} weight ${weight} kg and comes from ${origin}.`;
    } else {
        return "We don't have this animal in the zoo."
    };
};

console.log(zooAnimals.about("giraffe"));
console.log(zooAnimals.about("panda"));
console.log(zooAnimals.about("unicorn"));


console.log("\Part 2. Getting started with JavaScript tooling");


console.log("\Part 3. Your first XState program");


