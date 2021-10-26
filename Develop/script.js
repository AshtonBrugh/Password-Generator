var randomUserUpperCase = ["A", "B", "C", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var randomUserLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomUserNumberTrue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var randomUserSpecialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+","-", ".", "/", ":", ";", "<", "=", ">", "?", "@","^", "`", "{", "|", "}", "~"];

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

function generatePassword () {
  
  var lengthChoice = window.prompt('Password length? Min 8 characters - Max 128 characters')
  var upperChoice  = window.confirm('Would you like upper case? Click OK for yes and Cancel for no')
  var lowerChoice = window.confirm('Would you like lower case? Click OK for yes and Cancel for no')
  var numberChoice = window.confirm('Would you like to include numbers? Click OK for yes and Cancel for no')
  var charactersChoice = window.confirm('Would you like to use special characters? Click OK for yes and Cancel for no')


  if (lengthChoice >= 8 && lengthChoice <= 128){
    
  } else {
    alert("pick a better number")
    return "";
  } 







  return "test";

  
  
  
}



//upperCase ()

//lowerCase()

//numberTrue()

//specialCharacters()


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword () 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











