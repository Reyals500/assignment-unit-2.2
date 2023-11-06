// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we make a variable called name and set it to equal the string of 'Dane'
// We check if the name is mary and if it was it would console log 'Hi, Mary'
// But our name is Dane so it would then log the value 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We set up the variable for secret and the value will be displayed once conditions are met
// We then set up another variable for code equally the value of 123. Then we set up th econditions theat if the code is equal 
// to 123 then secret will display 'super' and the code variable will also multiply itself by 2 making the new value to 246.
//The next set of conditions is if code is greater than 250 secret will log as 'duper'. However because code only equals 246
//when we console.log at the end secret will display as 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we are setting up 3 variables and values at the begining. isStudent = true, age = 34 and zip =55407
// we then set up conditons of if the sStudent is true and the zip is greater than 80000 the console will log You're a student on the west coast!
// the next condition if the first is not met, is if the isStudent variable is false then the cosole will log What are your hobbies?
// the next condition if the previous 2 have not been met, is if isStudent value is true then the console will log Welcome to Prime!
// the final piece of code is if all the other conditions weren't met and it would display How about the weather? But what would display is Welcome to Prime!

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
//the instructions state that colorOne is to be set to 'blue' it is set to 'red' right now so we would switch that
let colorTwo = 'blue';
//the instructions state that coloTwo is to be set to 'red' and it is currently set to 'blue' we will re-type that up
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  //we need to add colorTwo to 'purple' in order to make the description correct
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
//we need to use let instead of const to make the time variable because the time variable doesn't have to be 4 all the time
if (temp > 39 || time >= 4) {
 //we also need to use &&(= and ) instead of ||(= or) to match the requirments
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  //switch the two variables around to (age >= minAge) to reach the requirements and to show that age will always have to be greater than or equal to minAge
  console.log('no entry');
// from my understanding you want to set the true statement first and if if doesn't meet that requirement then move to the else statement so those two outputs should be switched
} else {
  console.log('enter');
}
*/

