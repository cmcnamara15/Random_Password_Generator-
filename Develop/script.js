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

var allChar = numbers.concat(uppercase, lowercase, specialChar);
console.log(allChar)

var password =''

// var index = Math.floor(Math.random() * allChar.length);
// var computerChoice = allChar[index];
// console.log(allChar[index])

function randomChar([]) {
  return Math.random() -0.5;
}
function generatePassword() {
  console.log("clicked the button")
  var userinput = prompt("Please enter a number between 8 and 128");
  if (userinput < 8) {
   alert("Please select proper length")}
  else if (userinput > 128) {
   alert("Please select proper length")}
  
  else {
    var affirm = window.confirm("Confirm to include lowercase & uppercase letters. numeric and special characters.");
    console.log(userinput);
    console.log(typeof userinput)
    userinput = Number(userinput);
    console.log(typeof userinput);
  if(affirm) {
    allChar.sort(randomChar)
   
    var index = Math.floor(Math.random() * allChar.length);
    var index = allChar[index];
    console.log(index)
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


// inserted this at line 33
// var index = Math.floor(Math.random() * allChar);
// console.log(index)
// }
// for(var i = 0; i < charlength; i++) {
// const index = math.floor
// }

// for (var i = 0; i < userinput; i++) {
//   password = password + allChar[randomChar()];

// for (var i = 0; i < userinput.length; i++) {
//   password = password + allChar[i];
//   console.log(password);