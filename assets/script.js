// Variables to store the characters used to generate the password

var characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var symbols_array = "!@#$%^&*()_-=+<>?;:\"''{}[]";

// Variables used to get input from the password generator webpage

var generateBtn = document.querySelector("#generate");
var symbols = document.getElementById("symbols");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

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

function generatePassword() {
  var pword = "";
  var pwordSymbols = "";
  var chosenLength = document.getElementById("charLength").value;

  for (var i = 0; i < chosenLength; i++) {
    if (symbols.checked) {
      var pwordSymbols = Math.round(Math.random() * 8);

      if (pwordSymbols > 1) {
        pword += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      } else {
        pword += symbols_array.charAt(
          Math.floor(Math.random() * symbols_array.length)
        );
      }
    } else {
      pword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }

  return pword;
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
