// Variables to store the characters used to generate the password

//var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//var specialChar = "!@#$%^&*()_-=+<>?;:\"''{}[]";
//var numbers = "0123456789";
//var lowerCase = "abcdefghijklnmopqrstuvxyz";
//var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

// Add event listener to capture button clicks to execute functions

generateBtn.addEventListener("click", writePassword);
copyPasswordBtn.addEventListener("click", copyToClipboard);

/* Function to generate the password
    - variable "pword" to store created password with letters and numbers
    - variable "chosenLength" to store user selected password size
    - variable "pwordSymbols" to store user created password with symbols
    - for loop to generate the password upon the user length selected
    - if / else statements to create password with letters and number
      * if / else statements to create password with letters, numbers, and symbols
        - Note: symbols generated at a frequency of 1 per 10 letters/numbers
    - return the password once generated
*/

//let pwd = [lowerCase, upperCase, numbers, specialChar];

function generatePassword() {
  var pword = "";
  var password = "";

  var symbols = "!@#$%^&*()_-=+<>?;:\"''{}[]";
  var numbers = "0123456789";
  var lowerCase = "abcdefghijklnmopqrstuvxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var chosenLength = document.getElementById("charLength").value;

  switch (true) {
    case document.getElementById("lowerCase").checked:
      pword = pword + lowerCase;
      console.log(lowerCase);

    case document.getElementById("upperCase").checked:
      pword = pword + upperCase;

    case document.getElementById("numbers").checked:
      pword = pword + numbers;

    case document.getElementById("symbols").checked:
      pword = pword + symbols;
      break;
    default:
      alert(
        "Please check any of the checkboxes to recreate your desired password!"
      );
      location.reload();
  }

  for (var i = 0; i < chosenLength; i++) {
    var gen_random = Math.floor(Math.random() * pword.length);

    console.log(gen_random);

    password += pword[gen_random];
  }

  return password;
}

/* Function to add copy password to computer clipboard
  - variable get user click input from password generator webpage
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

/*
function generatePassword() {
  var pword = "";
  var pwordSymbols = "";
  var chosenLength = document.getElementById("charLength").value;

  for (var i = 0; i < chosenLength; i++) {
    if (symbols.checked) {
      var pwordSymbols = Math.round(Math.random() * 5);

      if (pwordSymbols > 1) {
        pword += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      } else {
        pword += specialChar.charAt(
          Math.floor(Math.random() * specialChar.length)
        );
      }
    } else {
      pword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }

  return pword;
}

function getUpperCase() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

console.log(getUpperCase());

function getLowerCase() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

console.log(getLowerCase());

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

console.log(getNumber());

function getSpecailChar() {
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

console.log(getSpecailChar());



------------

if (document.getElementById("lowerCase").checked) {
    pword = pword + lowerCase;

    console.log(lowerCase);
  } else if (document.getElementById("upperCase").checked) {
    pword = pword + upperCase;

    console.log(upperCase);
  } else if (document.getElementById("numbers").checked) {
    pword = pword + numbers;

    console.log(numbers);
  } else if (document.getElementById("symbols").checked) {
    pword = pword + symbols;

    console.log(symbols);
  } else {
    alert(
      "Please check any of the checkboxes to recreate your desired password!"
    );
    location.reload();
  }

*/
