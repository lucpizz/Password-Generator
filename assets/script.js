// Assignment Code
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !@#$%^&*\(\)_-=+\<\>?;:\"\'\'\{\}\[\]";

var chosenLength = document.querySelector("#number").value="#number";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var pword = "";


for (var i = 1; i<chosenLength.length; i++ ) {

  pword += characters.charAt(Math.floor(Math.random() * characters.length));
}
  return pword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
