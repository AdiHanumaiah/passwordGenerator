//grabs the input from the user by class id
const lengthInput = document.getElementById("length");
const upperInput = document.getElementById("upper");
const lowerInput = document.getElementById("lower");
const symbolInput = document.getElementById("symbol");
const numberInput = document.getElementById("number");
const generateInput = document.getElementById("generate");

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
}
