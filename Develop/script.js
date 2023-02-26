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

var allChars;
// numbers.concat(uppercase, lowercase, specialChar);


function selectRandomElement(characters) {
  var index = Math.floor(Math.random() * characters.length) 
  return characters[index];
}

function generateCharacterOptions() {
  allChars = []; 
  var confirmNumbers = window.confirm("Do you want numbers in your password?");
  if (confirmNumbers) {
  allChars = allChars.concat(numbers)}
  else{}
  console.log(allChars);
  var affirmLetters = window.confirm("Do you want letters in your password?");
  if(affirmLetters){
  allChars = allChars.concat(uppercase, lowercase);}
  else{}
  console.log(allChars);
  var affirmSpecialChar = window.confirm("Do you want special characters in your Password?");
  if(affirmSpecialChar){
  allChars = allChars.concat(specialChar);}
  else {}
  return allChars;
}

function generatePassword() {
  console.log("clicked the button")
  var userinput = prompt("Please enter a number between 8 and 128");
  if (userinput < 8) {
   alert("Please select proper length")}
  else if (userinput > 128) {
   alert("Please select proper length")}
  
  else {
    userinput = Number(userinput);
    var affirm = generateCharacterOptions();
    console.log(affirm)
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


// ___Comments for line 3___
// Wondering if there was a way to write an array without typing out each letter I found 
// that there was. Using Array.from and choosing a length I was able to reference numeric 
// places for those characters from unicode character chart and pull them into an Array!

// ___Comments for line 14____
// that method proved to be difficult for special characters because they are not 
// organized sequently on the chart. So I decided to type them out

// ___Comments for line 18___
// console.log(allChar)--- Using the .concat method I combined these arrays globally/

// ___Comments for line 21___
// After much struggle trying to use .sort to randomize the array  decided to create a function with 
// hope that it could be reusable.

// if (userinput >= 8 && userinput <= 136)