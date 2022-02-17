// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// PASSWORD PROMPTS NEEDED

// CHOOSE PASSWORD LENGTH BETWEEN 8 AND 128

//Enter password length (between 8 and 128 characters)

//Is passwordLength < 8 && > 128

//You must choose a valid length

// CHOOSE WHICH CHARACTER TYPES ARE ALLOWED

//Please select at least one character type to include.
//(repeat if null or blank)

// ---lower case, upper case, numeric, special characters
// ---must choose at least one type


