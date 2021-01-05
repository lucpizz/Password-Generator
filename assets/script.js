// Variables used to get input from the password generator webpage

var generateBtn = document.querySelector("#generate");
var copyPasswordBtn = document.querySelector("#copyPassword");
var chosenLength = document.getElementById("charLength").value;
var symbols = document.getElementById("symbols").checked;
var numbers = document.getElementById("numbers").checked;
var upperCase = document.getElementById("upperCase").checked;
var lowerCase = document.getElementById("lowerCase").checked;

/*  Function to excute generate password function()
    - set variable "password" to generatePassword function
    - set variable "passwordText" to the document querySelector for the password button
    - pass the password to the "passwordText.value"
*/

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listeners to capture button clicks to execute functions

generateBtn.addEventListener("click", writePassword);
copyPasswordBtn.addEventListener("click", copyToClipboard);

/* Function to generate the password
    - variables to store the characters used to generate the password
    - variable "password" set to null until generated at the end of the program
    - variable "pword" to store created password with letters and numbers
    - variable "chosenLength" to store user selected password size
    - variable "pwordSymbols" to store user created password with symbols
    - if statements to create password with letters and number
    - last if statment sends the alert if no boxes are checked and reloads the page
    - for loop to generate the password upon the user length selected
    - pword[] array to store generate "random" password wihin the for loop
    - return the password once generated
*/

function generatePassword() {
  var pword = "";
  var password = "";

  var symbols = "!@#$%^&*()_-=+<>?;:\"''{}[]";
  var numbers = "0123456789";
  var lowerCase = "abcdefghijklnmopqrstuvxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var c_symbols = document.getElementById("symbols").checked;
  var c_numbers = document.getElementById("numbers").checked;
  var c_upperCase = document.getElementById("upperCase").checked;
  var c_lowerCase = document.getElementById("lowerCase").checked;

  var chosenLength = document.getElementById("charLength").value;

  if (document.getElementById("lowerCase").checked) {
    pword = pword + lowerCase;

  }
  if (document.getElementById("upperCase").checked) {
    pword = pword + upperCase;

  }
  if (document.getElementById("numbers").checked) {
    pword = pword + numbers;

  }
  if (document.getElementById("symbols").checked) {
    pword = pword + symbols;

<<<<<<< HEAD
    console.log(symbols);
  } else {
=======
  }
   if (!c_lowerCase && !c_upperCase && !c_numbers && !c_symbols) {
>>>>>>> c324ed5cfcda448b5ede93fa476fc25851413afa
    alert(
      "Please check any of the boxes to create your desired password!"
    );
  
    location.reload();
  }
  for (var i = 0; i < chosenLength; i++) {
    var gen_random = Math.floor(Math.random() * pword.length);

    password += pword[gen_random];
  }

  return password;
}

/* Function to add copy password feature to computer clipboard
  - variable to get user click input from password generator webpage
  - adds copy to clipboard function to the "Copy Password" button
  - sends an alert to the browser to notify user password was copied
*/

function copyToClipboard() {
  var copyText = document.getElementById("password");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");

  alert("Your new password was copied!");
}
