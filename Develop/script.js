// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// lowercase letters: #97-122
function randomLow() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(randomLow());

// uppercase letters: #65-90
function randomUp() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(randomUp());

// random numbers, 48-57
function randomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10)+ 48);
}
console.log(randomNum());

// random symbols, 
function randomSym() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
console.log(randomSym());