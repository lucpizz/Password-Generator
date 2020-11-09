// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var charsCharacters = " !#$%^&*()_+=<>?,.~`'";
  var lowCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numNumbers = "0123456789";

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
