  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  };


  



  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


// DETERMINE PASSWORD LENGTH
var passwordLength = function() {

  var promptLength = window.prompt('Please enter a password length between 8 - 128')
    if (promptLength >= 8 && promptLength <= 128) {
      window.prompt ('Your password will be ' + promptLength + ' characters long.');  
      passwordLength = promptLength;
//      console.log(passwordLength);
    } else {
      window.alert ('Your password must be between 8-128 characters long. Please enter a password length between 8 - 128.');  
      return passwordLength ();
    }
};
passwordLength();
console.log(passwordLength);

// CREATE MASTER ARRAY
var emptyCharacterArray = []
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'y', 'Z']
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 
var numeralArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacterArray = ['!', '@', '#', '$', '&', '*', '?']

var masterCharacterArray = function () {
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
      masterCharacterArray = masterCharacterArray3.concat(specialCharacterArray)
    } else {
      masterCharacterArray = masterCharacterArray3
    };
 //   console.log(masterCharacterArray);

  //  if no character chosen, repeat prompts
  if (masterCharacterArray === emptyCharacterArray) {
    window.alert('You must choose at least one character type.')
    return masterCharacterArray();
  }

};
masterCharacterArray();
console.log(masterCharacterArray);

// LOOP THROUGH masterCharacterArray TO CREATE passwordArray
var passwordArray = [];
var randomPasswordArray = function() {

  for (i = 0; i < passwordLength; i++) {
// index of character from masterCharacterArray
  var randomPasswordCharacter = masterCharacterArray[Math.floor(Math.random() * masterCharacterArray.length)];
// add randomPasswordCharacter to passwordArray
  passwordArray.push(randomPasswordCharacter)
  }
};
randomPasswordArray();
console.log(passwordArray);

// CONVERT ARRAY TO STRING
// this code works
//var password = passwordArray.join('');
//console.log(password);
//

   
   var generatePassword = function() {
     var password = passwordArray.join('');
     console.log(password);
   
     window.alert("Your password is " + password);
   
   };
   generatePassword();
