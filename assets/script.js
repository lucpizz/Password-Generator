// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var numbersRange = "";
  var characters = " !#$%^&*()_+=<>?,.~`'";
  var lowCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";

  const char = document.getElementById('characters');
  const lCase = document.getElementById('lowCaseLetters');
  const uCase = document.getElementById('upperCaseLetters');
  const num = document.getElementById('numbers');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
