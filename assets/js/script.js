// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
var letters = "abcdefghijklmnopqrstvwxyz";
var numbers ="0123456789";
var special = "!@#$%^&*_-+=";

// Write password to the #password input
function writePassword() { 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  var password = generatePassword();
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
for(i=0; i < length; i++) {
  password+= characters.charAt(
    Math.floor(Math.random()*charcters.length)
  )
}
return password;

function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");
  
  var special = confrim("Do you want special characters in your password?");
}
