// 1. Declare and assign the variables here:
const input = require('readline-sync')
let shuttleName = input.question("Enter your shuttle name: ");
let shuttleSpeed = 17500;
let distToMars = 225000000;
let distToMoon = 384400;
const milesPerKM = 0.621;

// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(shuttleName));
console.log(typeof(shuttleSpeed));
console.log(typeof(distToMars));
console.log(typeof(distToMoon));
console.log(typeof(milesPerKM));



// Code your solution to exercises 3 and 4 here:
let milesToMars = distToMars * milesPerKM;
let hoursToMars = milesToMars /shuttleSpeed;
let daysToMars = hoursToMars / 24;
console.log(shuttleName+ " will take " +daysToMars+ " days to reach Mars");





// Code your solution to exercise 5 here:
let milesToMoon = distToMoon * milesPerKM;
let hoursToMoon = milesToMoon /shuttleSpeed;
let daysToMoon = hoursToMoon / 24;
console.log(shuttleName+ " will take " +daysToMoon+ " days to reach the moon, that seems quick doesn't it?");