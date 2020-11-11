// Assignment Code
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !@#$%^&*\(\)_-=+\<\>?;:\"\'\'\{\}\[\]";


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {

  var pword = "";
  var chosenLength = document.getElementById("number").value;

  
for (var i = 0; i<chosenLength; i++ ) {

  console.log(chosenLength);

  pword += characters.charAt(Math.floor(Math.random() * characters.length)+1);

  
}
  return pword;

}




