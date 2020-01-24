// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// function for when the button is clicked to prompt user to enter password length
function promptMe() {
  var pLength = prompt("Choose a password length between 8 and 128 characters");
}


// DOM elements
const resultEl = document.querySelector("#password");

const randomFunc = {
  lower: randomLow,
  upper: randomUp,
  number: randomNum,
  symbol: randomSym
};

// RANDOM GENERATORS 
// generates random lowercase letter
function randomLow() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// generates random uppercase letter
function randomUp() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// generates random number
function randomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10)+ 48);
}
// generates random symbol
function randomSym() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
