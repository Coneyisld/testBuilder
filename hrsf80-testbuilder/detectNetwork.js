// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'
// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
var detectNetwork = function(cardNumber) {
	// Note: `cardNumber` will always be a string
	// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
	// The American Express network always starts with a 34 or 37 and is 15 digits long
	// Once you've read this, go ahead and try to implement this function, then return to the console.
	var startingNumberOneDigit = +cardNumber.slice(0, 1);
	var startingNumberTwoDigits = +cardNumber.slice(0, 2);
	var startingNumberThreeDigits = +cardNumber.slice(0, 3);
	var startingNumberFourDigits = +cardNumber.slice(0, 4);
	var startingNumberSixDigits = +cardNumber.slice(0, 6);
	var numberOfDigits = cardNumber.length
	if ((startingNumberFourDigits === 5018 || startingNumberFourDigits === 5020 || startingNumberFourDigits === 5038 || startingNumberFourDigits === 6304) && (numberOfDigits === 12 || numberOfDigits === 13 || numberOfDigits === 14 || numberOfDigits === 15 || numberOfDigits === 16 || numberOfDigits === 17 || numberOfDigits === 18 || numberOfDigits === 19)) {
		return "Maestro";
	} //good
	if ((startingNumberTwoDigits === 38 || startingNumberTwoDigits === 39) && (numberOfDigits === 14)) {
		return "Diner's Club";
	}
	if ((startingNumberFourDigits === 6011 || startingNumberTwoDigits === 65 || startingNumberThreeDigits === 644 || startingNumberThreeDigits === 645 || startingNumberThreeDigits === 646 || startingNumberThreeDigits === 647 || startingNumberThreeDigits === 648 || startingNumberThreeDigits === 649) && (numberOfDigits === 16 || numberOfDigits === 19)) {
		return "Discover";
	}
	if ((startingNumberTwoDigits === 34 || startingNumberTwoDigits === 37) && (numberOfDigits === 15)) {
		return "American Express";
	}
	if ((startingNumberTwoDigits === 51 || startingNumberTwoDigits === 52 || startingNumberTwoDigits === 53 || startingNumberTwoDigits === 54 || startingNumberTwoDigits === 55) && (numberOfDigits === 16)) {
		return 'MasterCard';
	}
	if ((startingNumberThreeDigits === 624 || startingNumberThreeDigits === 625 || startingNumberThreeDigits === 626) && (numberOfDigits === 16 || numberOfDigits === 17 || numberOfDigits === 18 || numberOfDigits === 19)) {
		return "China UnionPay";
	}
	if ((startingNumberFourDigits === 6282 || startingNumberFourDigits === 6283 || startingNumberFourDigits === 6284 || startingNumberFourDigits === 6285 || startingNumberFourDigits === 6286 || startingNumberFourDigits === 6287 || startingNumberFourDigits === 6288) && (numberOfDigits === 16 || numberOfDigits === 17 || numberOfDigits === 18 || numberOfDigits === 19)) {
		return "China UnionPay";
	}
	if (numberOfDigits === 16 || numberOfDigits === 17 || numberOfDigits === 18 || numberOfDigits === 19) {
		for (var i = 622126; i <= 622925; i++) {
			if (i === startingNumberSixDigits) {
				return "China UnionPay"
			}
		}
	}
	if ((startingNumberFourDigits === 4903 || startingNumberFourDigits === 4905 || startingNumberFourDigits === 4911 || startingNumberFourDigits === 4936 || startingNumberFourDigits === 6333 || startingNumberFourDigits === 6759 || startingNumberSixDigits === 564182 || startingNumberSixDigits === 633110) && (numberOfDigits === 16 || numberOfDigits === 18 || numberOfDigits === 19)) {
		return "Switch";
	}
	if ((startingNumberOneDigit === 4) && (numberOfDigits === 13) || (numberOfDigits === 16) || (numberOfDigits === 19)) {
		return 'Visa';
	}
	return false;
}; ///that was a piece of work!


