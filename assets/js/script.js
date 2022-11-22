// Assignment code here
function generatePassword (){
    var passwordLength = prompt ("Choose a length of your password. It should be minimum 8 and maximum 128 characters.");
    if (passwordLength < 8 || passwordLength > 128) {
        alert ("Error");
        return;
    }

    //Variables for variants of password
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "1234567890";
    var symbols = "!@#$%^&*()?";
    
    //Questions to user
    var isUpperCase = confirm ("Do you want any uppercase letters?");
    var isLowerCase = confirm ("Do you want any lowercase letters?");
    var isNumbers = confirm ("Do you want any numbers?");
    var isSymbol = confirm ("Do you want any symbols?");

    // Generating a string of symbols
    var finalPassword = '';
    var allsymbols = lowerCase + upperCase + numbers + symbols;

    for (var i = 0; i < Number(passwordLength); i++){
        var randomNumber = Math.floor(Math.random() * allsymbols.length);
        finalPassword += allsymbols[randomNumber]; 
     }

    return finalPassword;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");  

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
