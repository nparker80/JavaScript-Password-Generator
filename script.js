//Numeric values
const numbers = "0123456789";
//letters
const characters = "abcdefghijklmnopqrstuvwxyz";
//special characters
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

const generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  const password = createNewPassword();
  document.getElementById("password").textContent = password;
});

//Start user inputs
const createNewPassword = () => {
  const promptText =
    "How many characters would you like your password? Choose between 8 and 128";
  const passwordLength = parseInt(prompt(promptText));

//If password is NaN then alert the user 
  if (isNaN(passwordLength)) {
    alert("Value is not a number.");
    return null;
  }
 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select a value greater than 7 and less than 129 characters.");
    return null;
  }

  const shouldHaveNumbers = confirm("Should your password contain numbers?");
  const shouldHaveSpecials = confirm(
    "Should your password contain special characters?"
  );
  const shouldHaveUpper = confirm(
    "Should your password contain uppercase letters?"
  );
  const shouldHaveLower = confirm(
    "Should your password contain lowercase letters?"
  );

//User options for their specific password using ternary
  let options = "";
  options += shouldHaveNumbers ? numbers : "";
  options += shouldHaveSpecials ? specialCharacters : "";
  options += shouldHaveUpper ? characters.toUpperCase() : "";
  options += shouldHaveLower ? characters.toLowerCase() : "";

  return generatePasswordFromCharacters(options, passwordLength);
};

//After password is generated use a for loop to generate the random password based
//on the user options selected
const generatePasswordFromCharacters = (characters, length) => {
  const charactersLength = characters.length;
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};


