// Exercise one : Output your name
// console.log("Hey!, I am Shashank");

// //Execrise two / three / four: Read the name of the user
var readfilesync = require('readline-sync');
// var username = readfilesync.question("What is your name? ");
// console.log("Welcome!" + username);

// //Execrise Five: print right/wrong
// var userAge = readfilesync.question("Enter your age: ");
// if(userAge>25)console.log("Right");
// else console.log("Wrong");

//Execrise Six : 
// var score = 0;
// var check = readfilesync.question("Am I from Patna?");
// if(check==="yes" || check==="Yes" || check==="YES") {
//   score++;
//   console.log("You are Correct :)\nScore : "+score );
// } else {
//   score--;
//   console.log("You are Wrong :(\nScore : "+score );
  
// }

//Execrise Seven : function to add 2 numbers (user input my version)

function sum2num( num1, num2){
  var sum = parseInt(num1,10) + parseInt(num2,10);
  return sum;
}
function prod2num( num1, num2){
  var sum = parseInt(num1,10) * parseInt(num2,10);
  return sum;
}
var num1 = readfilesync.question("Enter first number :");
var num2 = readfilesync.question("Enter second number :");
var result = sum2num(num1,num2);
var result2 = prod2num(num1,num2);
console.log("Sum of "+num1+" and "+num2+" is "+result);
console.log("Product of "+num1+" and "+num2+" is "+result2);