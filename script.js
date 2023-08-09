// generating the criteria for the password
var characterLength = 8;
var choice = [];
// setting the specific criteria allowed and prompted for the password to generate
var specialChar = [ '!', '@', '#', '$', '%', '^', '*', '?', '/', '<', '>', '.',];
var lowerCase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's' , 't' , 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var number = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

// Write password to the #password input
function writePassword() {
  var correctPromtps = getPrompt(); //Needed to add this to return true or false in the write password
  var passwordText = document.querySelector("#password");
  
  if (correctPromtps) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  } else {
    passwordText.value = '';
  }
}




// generating password per prompt asnwering
function generatePassword() {
var password = '';
for(var i = 0; i < characterLength; i++) {
  var randomIndex = Math.floor(Math.random() * choice.length);
  password = password + choice[randomIndex];
}
return password;
}

function getPrompt(){
  choice = []

  characterLength = parseInt(prompt('How many characters would you like your password to be? (Between 8 -1 28)'));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert('Character length has to be a number between 8-128 digits. Try Again');
    return false;
  }

  if (confirm('Would you like lowercase letters in your password?')) {
    choice = choice.concat(lowerCase);
  }

  if (confirm('Would you like Upper Case letters in your password?')) {
    choice = choice.concat(number);
  }

  if (confirm('Would you like numbers in your password?')) {
    choice = choice.concat(number);
  }

  if (confirm('Would you like special characters in your password?')) {
    choice = choice.concat(specialChar);
  }
  return true;

}