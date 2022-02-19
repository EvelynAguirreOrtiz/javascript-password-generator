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

var passwordLength = function () {

  var promptLength = window.prompt('Please enter a password length between 8 - 128')
  if (promptLength < 8 || promptLength > 128) { 
      passwordLength = promptLength;
  } else { 

// if empty
//You must choose a valid length
//  alert "Please choose a password length between 8 and 128"
window.alert ('Your password must be between 8-128 characters long. Please enter a password length between 8 - 128.');
    return passwordLength();

  }
};

//CREATE MASTER ARRAY

//  prompt "Please select at least one character type to include"

var passwordCharacterArray = function() {
  var promptCharacters = window.prompt('Please choose at least one character type for your password. Do you want to include upper case letters?')
  //if yes, add upper case array to master array  master array + [uppercase]

    window.prompt('Do you want to include lower case letters?')
  //if yes, add lower case array to master array   master array + [lowercase]

    window.prompt('Do you want to include numbers?')
    //if yes. add number array to master array  master array + [numbers]

    window.prompt('Do you want to include special characters?')
    //if yes, add special characters to master array master array + [special]

  //  if no character chosen, alert "Please choose at least one character type
  if (promptCharacters === null) {
    window.alert('You must choose at least one character type. Please choose at least one charactertype')
  }


//CHARACTER ARRRAYS


var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'y', 'Z']

var lowerCaseArray =

var numeralArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var specialCharacterArray = ['!', '@', '#', '$', '&', '*', '?']
 

//CONCATENATE ARRAY TO MAKE MASTER ARRAY

var masterCharacterArray = 


//create password using Math.random * masterarraylength, i = password length


};




//for(var i+0; i < choosePassword length, i++) {
          // ----add character to array
//}