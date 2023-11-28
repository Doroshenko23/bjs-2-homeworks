"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;

	if (d < 0) {
		arr;
	} else if (d === 0) {
		let x = -b / (2 * a);
		arr.push(x);
	} else if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	}

	return arr;
}
solveEquation();



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let interestRate = percent / 100 / 12;
	let loanBody = amount - contribution;
	let monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** countMonths) - 1)));
	let totalAmount = monthlyPayment * countMonths;
	let roundingTotalAmount = totalAmount.toFixed(2);

	return Number(roundingTotalAmount);
}
calculateTotalMortgage();
