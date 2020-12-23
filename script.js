//grabs the input from the user by class id
const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("passwordLength");
const upperInput = document.getElementById("upper");
const lowerInput = document.getElementById("lower");
const symbolInput = document.getElementById("symbols");
const numberInput = document.getElementById("numbers");
const generateInput = document.getElementById("newPassword");

//characters that can be used in the password
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

//gets the characters 
function getUpperrcase() {
	return upperLetters[Math.floor(Math.random() * upperletters.length)];
}

function getLowercase() {
	return lowerrLetters[Math.floor(Math.random() * lowerletters.length)];
}

function getNumbers() {
	return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
	return symbols[Math.floor(Math.random() * symbols.length)];
}

//generates password
function generatePassword() {
	const length = lengthInput.value;
	let generatedPassword = "";
	
	if (upperInput.checked) {
		password += getUppercase();
	}
	if (lowerInput.checked) {
		password += getlowercase();
	}
	if (numberInput.checked) {
		password += getNumbers();
	}
	if (symbolInput.checked) {
		password += getSymbols();
	}
	
	for (let i = generatedPassword.length; i < length; i++)
	{
	const character = generateCharacters();
	password += characer;
	}
	
	passwordInput.innerText = password;
}

//generates individual characters
function generateCharacter() {
	const characters = [];
	
	if (upperInput.checked) {
		characters.push(getUppercase());
	}
	if (lowerInput.checked) {
		characters.push(getLowercase());
	}
	if (numberInput.checked) {
		characters.push(getNumbers());
	}
	if (symbolInput.checked) {
		characters.push(getSymbols());
	}
	if (characters.length == 0) {
		return "";
	}
	
	return characters[Math.floor(Math.random() * characters.length)];
}

//display password 
//document.getElementById("newPassword").value = characters;
generateInput.addEventListener("click", generatePassword);
document.getElementById("newPassword").value = generateCharacter();
