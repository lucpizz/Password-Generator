// Assignment Code
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var symbols = "! @#$%^&*\(\)_-=+\<\>?;:\"\'\'\{\}\[\]";

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
  var symbols = document.getElementById("symbols").checked = true;

  
for (var i = 0; i<chosenLength; i++ ) {

  console.log(chosenLength);

  pword += characters.charAt(Math.floor(Math.random() * characters.length));

  
}
  console.log(pword);

  return pword;

 

}

//adds copy to clipboard function to the "Copy Password" button

function copyToClipboard() {

var copyText = document.getElementById("password");

copyText.select();
copyText.setSelectionRange(0, 99999)
document.execCommand("copy");
alert("Copied the text: " + copyText.value);

}


