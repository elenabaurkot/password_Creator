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
  var lowCase = confirm("Do you want to include lowercase letters in your password?");
  var upCase = confirm("Do you want to include uppercase letters in your password?");
  var num = confirm("Do you want to include numbers in your password?");
  var symb = confirm("Do you want to include special characters in your password?");

  var length = +pLength;
  var hasLower = (lowCase === true);
  var hasUp = (upCase === true); 
  var hasNum = (num === true);
  var hasSymb = (symb) === true; 
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