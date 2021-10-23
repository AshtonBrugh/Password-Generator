// Assignment code here

//How long would you like your password to be? (min 8 - max 128)

function passwordLength () {
  var userPasswordLength =  window.prompt('Password length? Min 8 characters - Max 128 characters')
  //console.log(userPasswordLength)
  return userPasswordLength
} 

//Would you like upper case?

function upperCase () {
  var userUpperCase = window.confirm('Would you like upper case? Click OK for yes and Cancel for no')
  //console.log(userUpperCase)
  return userUpperCase
}

//Would you like lower case?

function lowerCase () {
  var userLowerCase = window.confirm('Would you like lower case? Click OK for yes and Cancel for no')
  //console.log(userLowerCase)
  return userLowerCase
}


//Would you like to include numbers?

function numberTrue () {
  var userNumberTrue = window.confirm('Would you like to include numbers? Click OK for yes and Cancel for no')
  //console.log(userNumberTrue)
  return userNumberTrue
}

//Would you like to include special characters?

function specialCharacters () {
  var userSpecialCharacters = window.confirm('Would you like to use special characters? Click OK for yes and Cancel for no')
 // console.log (userSpecialCharacters)
 return userSpecialCharacters
}

//validate each input, make sure at least one character type is selected

//generate password

function generatePassword (passwordLength, upperCase, lowerCase, numberTrue, specialCharacters) {
  console.log(passwordLength);
  console.log(upperCase);
  console.log(lowerCase);
  console.log(numberTrue);
  console.log(specialCharacters);
  
}

// for passwordLength.length 
// 





//upperCase ()

//lowerCase()

//numberTrue()

//specialCharacters()


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLength(), upperCase(), lowerCase(), numberTrue(), specialCharacters());
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
