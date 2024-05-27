function getArrayParams(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let countNumbers = arr.length;
	let sum = arr.reduce((acc, curr) => acc + curr, 0);
	let avg = sum / countNumbers;
	avg = Math.round(avg * 100) / 100;

	return {
		min: min,
		max: max,
		avg: avg,
	};
}

function summElementsWorker(...arr) {
	let sumArr = arr.reduce((acc, curr) => acc + curr, 0);
	return sumArr;
}

function differenceMaxMinWorker(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	if (arr.length === 0) {
		min = 0;
		max = 0;
	}
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	let differenceElement = sumEvenElement - sumOddElement;
	return differenceElement;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	if (arr.length === 0) {
		return 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		} else {
			continue;
		}
	}
	let differenceElement = sumEvenElement / countEvenElement;
	return differenceElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func.apply(null, arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}
