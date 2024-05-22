'use strict';

function solveEquation(a, b, c) {
	let arr = [];
	const discriminant = Math.pow(b, 2) - 4 * a * c;

	if (discriminant > 0) {
		const sqrtDiscriminant = Math.sqrt(discriminant);
		const twoA = 2 * a;
		const firstRoot = (-b + sqrtDiscriminant) / twoA;
		const secondRoot = (-b - sqrtDiscriminant) / twoA;
		arr.push(firstRoot, secondRoot);
	} else if (discriminant === 0) {
		const firstRoot = -b / (2 * a);
		arr.push(firstRoot);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const monthPercent = percent / 100 / 12;
	const loanAmount = amount - contribution;
	const monthPayment =
		loanAmount *
		(monthPercent +
			monthPercent / (Math.pow(1 + monthPercent, countMonths) - 1));
	let totalMortgage;
	totalMortgage = monthPayment * countMonths;

	return parseFloat(totalMortgage.toFixed(2));
}
