alert("Hello"); // alert is the function
/////////////////////////////////////////////////
var myName = "Eleanore";
var yourName = prompt("What is your name");
alert("My name is " + myName + ", your name is " + yourName + "!");
/////////////////////////////////////////////////
// Naming Conventions in JavaScript
// camelcase camelCase
// cannot begin with a number
// cannot have a space
// only contain letters number dollar sign and underscore

// length use .length
// Tweet lenght challenge

var tweet = prompt("Please write your tweet");
var tweetCount = tweet.length;
alert(
  "You have used " +
    tweetCount +
    " characters and have " +
    (140 - tweetCount) +
    " characters left."
);
//////////////////////////////////////

// Slicing and Ectracting a String
// slice(x,y) start and end

var myName = "Eleanore";
myName.slice(4, 6);

// Another tweet example
var tweet = prompt("Compose your tweet!");
var tweetCount140 = tweet.slice(0.14);
SpeechRecognitionAlternative(tweetCount140);

//////////////////////////////////////
// word.toUpperCase() nakes all ofthe characters uppercase

var nname = "eleanore";
nname = nname.toUpperCase(); // reassigned

////
var mname = prompt("What is your name?");
var firstChar = mname.slice(0, 1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = mname.slice(1, mname.length);
var restOfName = restOfName.toLowerCase();
var capitaliseName = upperCaseFirstChar + restOfName;
alert("Hello " + capitaliseName + "!");

/////////////////////////////////////////
const person = {
  Name: "Edmond",
  Fullname: "Edmond Dantes",
  Age: 44,
  Occupation: "Count of Monte Christo",
  Powers: "Magic",
  Morality: "Chaotic Good",
};
weapon = ["sword", "wand", "hammer"];

console.log(person["Fullname"]);
console.log(weapon[1]);

console.log(`My name is ${person["Fullname"]}
I am the ${person["Occupation"]}
I sometimes like to do fence with a ${weapon[0]}`);
//////////////////////////////////////////////////
// Numbers
// modulo % returns the raminder;
// Mathematical precidence. Multiply, divide, addition subtraction

var dogAge = prompt("How old is your dog?");
var humanAge = (dogAge - 2) * 4 + 21;
alert("Your dog is " + humanAge + " years old in human years.");

//////////////////////////////////////////////////////

// Increment and Decrement
var x = 5;
x = x + 1;
// or
x++;
x--;
// or you can +=
x += 2;
//or
x += y;

/////////////////////////////
// Creating and Using Functions
// can use console.log to see what is happening in the console at any point
// Lf in Weeks

function lifeInWeeks(age) {
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;

  console.log(
    "You have " +
      days +
      " days, " +
      weeks +
      " weeks and " +
      months +
      " months left."
  );
}

lifeInWeeks(48);

////////////////////////////////////////
//Create your function below this line.

function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  return Math.round(bmi);
}
//The first parameter should be the weight and the second should be the height.
var bmi = bmiCalculator(65, 1.8);
console.log(bmi);

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
///////////////// to simulate a dice
var n = Math.random();
n * 6;
Math.floor(n);

///////////Love Calculator
prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log("Yout love score is " + loveScore + "!");

/////////////////////////// COntrol FLow Statements
if (track === "clear") {
  goStraight();
} else {
  turnRight();
}
// && and ¦¦ or
  
 function bmiCalculator (weight, height) {
   if (bmi < 18.5) {
     console.log(`Your BMI is ${bmi}, so you are underweight.`);
   } else if {
  bmi == (18.5, 24.9) console.log ("Your BMI is " + bmi + ", so you have a normal weight.")
        } else {
  bmi > 24.9 {
    console.log ("You're BMI is " + bmi + ", so you are overweight.")
        }
    return bmi;
}
 ////

var i = 1;
while (i < 2) {
  console.log(i);
  i++
}

// Fizz Buzz

// var output = [];
// var count = 1;

// function fizzBuzz() {
  
//   while (count <= 100) {
    
// if (count % 3 === 0 && count % 5 === 0) {
//       output.push("FizzBuzz");
//     } else if (count % 3 === 0) {
//       output.push("Fizz");
//     } else if (count % 5 === 0) {
//         output.push("Buzz");
//     } else {
//       output.push(count);
//     }
//   count++;
//   console.log(output);
//     }
//   }

var numberOfBottles = 99
while (numberOfBottles >= 0) {
  var bottleWord = "bottles";
  if (numberOfBottles === 1) {
    bottleWord = "bottle";
  }
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
  console.log(numberOfBottles + " " + bottleWord + " of beer");
  console.log("Take on down and pass them around,");
  numberOfBottles--;
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
}
////////////////////////////////////

