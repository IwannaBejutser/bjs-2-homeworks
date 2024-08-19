function compareArrays(arr1, arr2) {
	return (
		arr1.length === arr2.length &&
		arr1.every((element, index) => element === arr2[index])
	);
}

function getUsersNamesInAgeRange(users, gender) {
	let result = users
		.filter((user) => user.gender === gender)
		.reduce((acc, user, _, arr) => acc + user.age / arr.length, 0);
	return result;
}
