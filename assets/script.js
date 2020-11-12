

// Variables to store the characters used to generate the password

var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var symbols = "! @#$%^&*\(\)_-=+\<\>?;:\"\'\'\{\}\[\]";

// Variables used to get input from the password generator webpage

var generateBtn = document.querySelector("#generate");
var symbols = document.getElementById("symbols").checked;

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


/* Function to generate the password
    - variable pword to store created password
    - variable chosenLength to store user selected password size
    - for loop to generate the password upon the user length selected
    - return the password once generated
*/

function generatePassword() {

  var pword = "";
  var chosenLength = document.getElementById("number").value;


          
        for (var i = 0; i<chosenLength; i++ ) {

          console.log(chosenLength);

          pword += characters.charAt(Math.floor(Math.random() * characters.length));

        }

  console.log(pword);

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
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");

  alert("Copied the text: " + copyText.value);

}


