//characters that can be used in the password
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

//gets the characters 
function getLowercase() {
	return lowerLetters[Math.floor(Math.random() * lowerletters.length)];
}

function getUppercase() {
	return upperLetters[Math.floor(Math.random() * upperletters.length)];
}

function getNumbers() {
	return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
	return symbols[Math.floor(Math.random() * symbols.length)];
}

//generate password
