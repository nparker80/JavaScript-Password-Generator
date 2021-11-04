
// specialcharacters
specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// numbers
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// lowerCase
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// upperCase
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var selection;

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
    let selectChars = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement for user validation 
    if (selectChars < 8 || selectChars > 128) {
        alert("Please select a value greater than 7 and less than 129 characters.");

    } else {
        // Continues once user input is validated
        confnums = confirm("Should your password contain numbers?");
        confspecialChars = confirm("Should your password contain special characters?");
        confupperCase = confirm("Should your password contain uppercase letters?");
        conflowerCase = confirm("Should your password contain lowercase letters?");
    }
    
    // Else if for 4 negative options
    if (!confspecialChars && !confnums && !confupperCase && !conflowerCase) {
        selection = alert("Please select desired password characters.");

    }
    // First if statement that uses user input prompts to determine selection
    // Else if for 4 positive options
    else if (confspecialChars && confnums && confupperCase && conflowerCase) {

        selection = specialChars.concat(nums, upperCase, lowerCase);
    }
    // Else if for 3 positive options
    else if (confspecialChars && confnums && confupperCase) {
        selection = specialChars.concat(nums, upperCase);
    }
    else if (confspecialChars && confnums && conflowerCase) {
        selection = specialChars.concat(nums, lowerCase);
    }
    else if (confspecialChars && conflowerCase && confupperCase) {
        selection = specialChars.concat(lowerCase, upperCase);
    }
    else if (confnums && conflowerCase && confupperCase) {
        selection = nums.concat(lowerCase, upperCase);
    }
    // Else if for 2 positive options 
    else if (confspecialChars && confnums) {
        selection = specialChars.concat(nums);

    } else if (confspecialChars && conflowerCase) {
        selection = specialChars.concat(lowerCase);

    } else if (confspecialChars && confupperCase) {
        selection = specialChars.concat(upperCase);
    }
    else if (conflowerCase && confnums) {
        selection = lowerCase.concat(nums);

    } else if (conflowerCase && confupperCase) {
        selection = lowerCase.concat(upperCase);

    } else if (confnums && confupperCase) {
        selection = nums.concat(upperCase);
    }
    // Else if for 1 positive option
    else if (confspecialChars) {
        selection = specialChars;
    }
    else if (confnums) {
        selection = nums;
    }
    else if (conflowerCase) {
        selection = lowerCase;
    };

    var userPassword = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < selectChars; i++) {
        var passwordCombo = selection[Math.floor(Math.random() * selection.length)];
        userPassword.push(passwordCombo);
    }
    // This joins the password array and converts it to a string
    // Worked with a tutor to incorporate this option
    var ps = userPassword.join("");
    UserInput(ps);
    return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

