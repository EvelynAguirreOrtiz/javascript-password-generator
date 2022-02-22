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




// PASSWORD PROMPTS TO DETERMINE PASSWORD LENGTH AND CHARACTERS

var passwordLength = function() {

  var promptLength = window.prompt('Please enter a password length between 8 - 128')
    if (promptLength >= 8 && promptLength <= 128) {
      window.prompt ('Your password will be ' + promptLength + ' characters long.');  
      passwordLength = promptLength;
      console.log(passwordLength);
    } else {
      window.alert ('Your password must be between 8-128 characters long. Please enter a password length between 8 - 128.');  
      return passwordLength ();
    }

};
passwordLength();

//CREATE MASTER ARRAY

//  prompt "Please select at least one character type to include"
var emptyCharacterArray = []
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'y', 'Z']
var lowerCaseArray = ['a', 'b', 'c',]
var numeralArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacterArray = ['!', '@', '#', '$', '&', '*', '?']


var createCharacterArray = function () {
  // include upper case letters
  var promptUpperCase = window.prompt('Please choose at least one character type for your password. Do you want to include upper case letters? Type "YES" or "NO"')
  promptUpperCase = promptUpperCase.toLowerCase();
    if (promptUpperCase === "yes") { 
      var masterCharacterArray1 = emptyCharacterArray.concat(upperCaseArray)
    } else {
      masterCharacterArray1 = emptyCharacterArray
    };
    console.log(masterCharacterArray1)  
  //include lower case letters  
  var promptLowerCase =  window.prompt('Do you want to include lower case letters? Type "YES" or "NO"')
  promptLowerCase = promptLowerCase.toLocaleLowerCase();
    if (promptLowerCase === "yes") {
      var masterCharacterArray2 = masterCharacterArray1.concat(lowerCaseArray)
    } else {
      masterCharacterArray2 = masterCharacterArray1
    };
    console.log(masterCharacterArray2);
  // include numbers  
  var promptNumbers = window.prompt('Do you want to include numbers? Type "YES" or "NO"')
  promptNumbers = promptNumbers.toLocaleLowerCase();
    if (promptNumbers === "yes") {
    var masterCharacterArray3 = masterCharacterArray2.concat(numeralArray)
    } else {
      masterCharacterArray3 = masterCharacterArray2
    };
    console.log(masterCharacterArray3);
  //include special characters
  var promptCharacters = window.prompt('Do you want to include special characters? Type "YES" or "NO"') 
    if (promptCharacters === "yes") {
    var masterCharacterArray4 = masterCharacterArray3.concat(specialCharacterArray)
    } else {
      masterCharacterArray4 = masterCharacterArray3
    };
    console.log(masterCharacterArray4);

  //  if no character chosen, alert "Please choose at least one character type
  if (masterCharacterArray4 === emptyCharacterArray) {
    window.alert('You must choose at least one character type.')
    return createCharacterArray();
  };

};
createCharacterArray();



// LOOP THROUGH masterCharacterArray TO CREATE passwordArray


//for (let i=0; i < passwordLength; i ++); {
//
//  passwordArray = [i]
//
//}
//
// choose character form master array
// randomArrayindex = [Math.floor(Math.random() * masterCharacterArray.length];




