// Assignment code here
function generatePassword() {
  var passwordLength = prompt(
    "Choose a length of your password. It should be minimum 8 and maximum 128 characters."
  );
	if (passwordLength === null || passwordLength === "") {
		alert("You didn't choose password length. Choose password length again");
		finalPassword = "Choose password length again";
		return finalPassword;
	};
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Not correct password length. Choose again");	
		finalPassword = "Wrong password length";
		return finalPassword;	
    //return;
  }
	

  //Variables for variants of password
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var symbols = "!@#$%^&*()?";

  //Questions to user
  var isUpperCase = confirm("Do you want any uppercase letters?");
  var isLowerCase = confirm("Do you want any lowercase letters?");
  var isNumbers = confirm("Do you want any numbers?");
  var isSymbol = confirm("Do you want any symbols?");
  console.log();

  // Generating a string of symbols
  var finalPassword = "";
  var allsymbols = "";

  if (isUpperCase) {
    allsymbols += upperCase;
  }
  if (isLowerCase) {
    allsymbols += lowerCase;
  }
  if (isNumbers) {
    allsymbols += numbers;
  }
  if (isSymbol) {
    allsymbols += symbols;
  }

  for (var i = 0; i < Number(passwordLength); i++) {
    var randomNumber = Math.floor(Math.random() * allsymbols.length);
    finalPassword += allsymbols[randomNumber];
  }
  //checking of there is no any entry
  if (!isUpperCase && !isLowerCase && !isNumbers && !isSymbol) {
		alert("You didn't choose any symbol. Choose again");	
    finalPassword = "You didn't choose any symbol. Choose again";
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
