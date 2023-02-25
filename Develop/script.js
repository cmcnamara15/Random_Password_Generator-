// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = Array.from({length: 10}, (_, i) => String.fromCharCode(48 + i));
console.log(numbers)

var uppercase = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i));
console.log(uppercase);

var lowercase = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i));
console.log(lowercase);

var specialChar = [
  "!", "@", "#", "$", "%", "^", "&","*", "(", ")", "_", "-", "+", "=", 
  "~", "`", "{", "}", "[", "]", "|", ":", ";", "<", ">", "?", ".", ",",
  "/"]
console.log(specialChar)

var allChars = numbers.concat(uppercase, lowercase, specialChar);
// console.log(allChar)

function selectRandomElement(characters) {
  var index = Math.floor(Math.random() * characters.length)
  return characters[index];
}

function generateCharacterOptions() {
  var allChars = []; // start empty 
  var confirmNumbers = window.confirm("Do you want numbers in your password?");
  allChars.concat(numbers);
  var affirmLetters = window.confirm("Do you want letters in your password?");
  if(affirmLetters){
  allChars.concat(uppercase, lowercase);}
  var affirmSpecialChar = window.confirm("Do you want special characters in your Password?");
  if(affirmSpecialChar){
  allChars.concat(specialChar);}
  return allChars
}

function generatePassword() {
  console.log("clicked the button")
  var userinput = prompt("Please enter a number between 8 and 128");
  if (userinput < 8) {
   alert("Please select proper length")}
  else if (userinput > 128) {
   alert("Please select proper length")}
  
  else {
    // var affirm = window.confirm("Confirm to include lowercase & uppercase letters. numeric and special characters.");
    var affirm = generateCharacterOptions(); 
    console.log(userinput);
    console.log(typeof userinput)
    userinput = Number(userinput);
    console.log(typeof userinput);
    if(affirm) {
      var password =''
      for(var i=0; i < userinput; i++) {
     password += selectRandomElement(allChars)
     }
    }
    console.log(password)
    return password;
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

