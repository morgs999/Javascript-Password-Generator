var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  function generatePassword() {
    // Establish Character sets, including blank beginning
    chars = ''
    upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lowerChar = "abcdefghijklmnopqrstuvwxyz"
    numericChar = "0123456789"
    specialChar = "!@#$%^&*?"

    // Get the password length from the user
    let passleng = window.prompt("How many characters(8-128)?")

    // Exception handling for number of characters
    if (passleng < 8 || passleng > 128) {
      window.alert("A password can only be between 8 and 128 characters, try again.")
      return generatePassword();
    }

    // Cycle through prompts of what to include
    let uppercase = window.confirm("Include uppercase letters?")
    if (uppercase) {
      chars = chars.concat(upperChar);
    }

    let lowercase = window.confirm("Include lowercase letters?")
    if (lowercase) {
      chars = chars.concat(lowerChar);
    }

    let numeric = window.confirm("Include numeric characters?")
    if (numeric) {
      chars = chars.concat(numericChar);
    }

    let special = window.confirm("Include special characters?")
    if (special) {
      chars = chars.concat(specialChar)
    }

    // Exception handling for no type selected
    if (!uppercase && !lowercase && !numeric && !special) {
      window.alert("You must select at least one type of character to include.")
      generatePassword();
    }

    // Set password by randomly generating through selected characters
    password = ''
    for (let i = 0; i <= passleng; i++) {
      let pass = Math.floor(Math.random() * chars.length);
      password += chars.charAt(pass)
    }
    return password;
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);