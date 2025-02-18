// Iterative approach
const fibs = (num) => {
	for (var fibonacci = [0, 1], i = 2; i < num; i++) {
		fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
	}
	return fibonacci;
};

console.log(`Iterative solution:`, fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// Recursive approach
const fibsRec = (num, fibonacci = [0, 1]) => {
	// console.log("This was printed recursively");

	if (num <= 0) {
		return [];
	} else if (num <= 2) {
		return fibonacci.slice(0, num);
	} else if (fibonacci.length >= num) {
		return fibonacci;
	}

	const nextNum =
		fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
	return fibsRec(num, [...fibonacci, nextNum]);
};

console.log(`Recursive solution:`, fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
