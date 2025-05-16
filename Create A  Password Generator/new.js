const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*=-_";

const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-upercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");
const copy = document.getElementById("copy");

submit.addEventListener("click", () => {
    let initialPassword = empty;
    if (upperCase.checked) initialPassword += uCase;
    if (lowerCase.checked) initialPassword += lCase;
    if (pNumber.checked) initialPassword += number;
    if (pSymbol.checked) initialPassword += symbol;

    if (initialPassword === "") {
        alert("Please select at least one option!");
        return;
    }

    password.value = generatePassword(pLength.value, initialPassword);
});

function generatePassword(length, initialPassword) {
    let pass = "";
    for (let i = 0; i < length; i++) {
        pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }
    return pass;
}

// Copy Password to Clipboard
copy.addEventListener("click", () => {
    if (password.value === "") {
        alert("Please generate a password first!");
    } else {
        navigator.clipboard.writeText(password.value)
            .then(() => {
                alert("Password has been copied to the clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy password: ", err);
                alert("Unable to copy the password. Please try again.");
            });
    }
});
