// Assignment code here
//assigning arrays


var randomUserUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randomUserLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomUserNumberTrue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var randomUserSpecialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+","-", ".", "/", ":", ";", "<", "=", ">", "?", "@","^", "`", "{", "|", "}", "~"];

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

function generatePasswordLog (passwordLength, upperCase, lowerCase, numberTrue, specialCharacters, generatePassword) {
  console.log(passwordLength);
  console.log(upperCase);
  console.log(lowerCase);
  console.log(numberTrue);
  console.log(specialCharacters);
  console.log(generatePassword); 

}

const randomUserUpperCaseValue = Math.floor(Math.random() * randomUserUpperCase.length);
//console.log(randomUserUpperCaseValue, randomUserUpperCase[random]);

function generatePassword () {
  if (upperCase == true & lowerCase == true & numberTrue == true & specialCharacters == true){
    var gPassword = randomUserUpperCaseValue }

  else var gPassword = null
  
  
};



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
  var password = generatePassword (passwordLength(), upperCase(), lowerCase(), numberTrue(), specialCharacters());
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
