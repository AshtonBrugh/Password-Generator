var randomUserUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var randomUserLowerCase = "abcdefghijklmnopqrstuvwxyz";
var randomUserNumberTrue = "0123456789";
var randomUserSpecialCharacters = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";




//generate password
function generatePassword() {
  var passwordCharacters = [];
  // validating password length is between 8-128 before moving on
  var lengthChoice = prompt('Password length? Min 8 characters - Max 128 characters')
      if (lengthChoice <= 8 || lengthChoice >= 128) {
        alert("Password must be between 8 - 128 characters!");
        return "";
      }
  var upperChoice  = confirm('Would you like upper case? Click OK for yes and Cancel for no')
      if (upperChoice) {
        passwordCharacters = passwordCharacters.concat(randomUserUpperCase)
      }
      
  var lowerChoice = confirm('Would you like lower case? Click OK for yes and Cancel for no')
     if (lowerChoice) {
     passwordCharacters = passwordCharacters.concat(randomUserLowerCase)
   }
      
  var numberChoice = confirm('Would you like to include numbers? Click OK for yes and Cancel for no')
    if (numberChoice) {
    passwordCharacters = passwordCharacters.concat(randomUserNumberTrue)
  }
     
  var charactersChoice = confirm('Would you like to use special characters? Click OK for yes and Cancel for no')
    if (charactersChoice) {
    passwordCharacters = passwordCharacters.concat(randomUserSpecialCharacters);
  }

  console.log(passwordCharacters)

    var randomPassword = "";
      
      for (var i = 0; i < lengthChoice; i++) {
          randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
          console.log(randomPassword)
        }
        return randomPassword;
  };
       
  



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);












