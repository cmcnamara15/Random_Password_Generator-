// Assignment Code
var generateBtn = document.querySelector("#generate");

// Wondering if there was a way to write an array without typing out each letter I found 
// that there was. Using Array.from and choosing a length I was able to reference numeric 
// places for those characters from unicode character chart and pull them into an Array!
var numbers = Array.from({length: 10}, (_, i) => String.fromCharCode(48 + i));
console.log(numbers)

var uppercase = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i));
console.log(uppercase);

var lowercase = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i));
console.log(lowercase);

// that method proved to be difficult for special characters because they are not 
// organized sequently on the chart. So I decided to type them out
var specialChar = [
  "!", "@", "#", "$", "%", "^", "&","*", "(", ")", "_", "-", "+", "=", 
  "~", "`", "{", "}", "[", "]", "|", ":", ";", "<", ">", "?", ".", ",",
  "/"]
console.log(specialChar)

var allChars;
// ^It took me a long time to understand that I needed to declare this variable completely empty


// the function to select a random element 
function selectRandomElement(characters) {
  var index = Math.floor(Math.random() * characters.length) 
  return characters[index];
}

// the function that prompts the user for information and adjusts the array accordingly
function generateCharacterOptions() {
  allChars = []; 
  var confirmNumbers = window.confirm("Do you want numbers in your password?");
  if (confirmNumbers) {
  allChars = allChars.concat(numbers)}

  console.log(allChars);
  var affirmLetters = window.confirm("Do you want uppercase letters in your password?");
  if(affirmLetters){
  allChars = allChars.concat(uppercase);}

  console.log(allChars);
  var affirmLetters = window.confirm("Do you want lowercase letters in your password?");
  if(affirmLetters){
  allChars = allChars.concat(lowercase);}
 
  console.log(allChars);
  var affirmSpecialChar = window.confirm("Do you want special characters in your Password?");
  if(affirmSpecialChar){
  allChars = allChars.concat(specialChar);}
  while(confirmNumbers === false && affirmLetters === false && affirmSpecialChar === false){
    alert("please choose at least one character set");
  }
  return allChars;
}

function generatePassword() {
  console.log("clicked the button")
  var userinfo = prompt("Please enter a number between 8 and 128");
  if(userinfo < 8) {
  alert("Please enter a proper length")}
  else if (userinfo > 128) {
  // while(userinput >= 8 && userinput <= 136) {
  alert("Please select proper length")}
  // else if (isNaN(userinfo) == false ) {
  // alert("Please enter a number")
  // }
  
  else {
    userinfo = Number(userinfo);
    var affirm = generateCharacterOptions();
    console.log(affirm)
    if(affirm) {
      var password =''
      for(var i=0; i < userinfo; i++) {
      password += selectRandomElement(allChars)
     }
    // using a for loop to select elements of the array based on users input 
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


// if (userinput >= 8 && userinput <= 136)