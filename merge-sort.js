const mergeSort = (arr) => {
	// Base case: return array if it has 0 or 1 elements since it's already sorted
	if (arr.length <= 1) return arr;

	// Calculate middle index to divide array into two halves
	const midPoint = Math.floor(arr.length / 2);

	// Split array into left and right subarrays using destructuring
	const [left, right] = [arr.slice(0, midPoint), arr.slice(midPoint)];

	// Recursively sort both halves and merge them back together
	return merge(mergeSort(left), mergeSort(right));

	// Helper function that merges two sorted arrays into a single sorted array
	function merge(left, right) {
		const merged = [];

		// Compare and merge elements while both arrays still have elements
		// Using shift() to remove and return the first element of each array
		while (left.length && right.length) {
			merged.push(left[0] <= right[0] ? left.shift() : right.shift());
		}

		// Combine merged array with any remaining elements from either array
		// This works because any remaining elements are already sorted
		return [...merged, ...left, ...right];
	}
};

let array1 = [3, 2, 1, 13, 8, 5, 0, 1];
let array2 = [105, 79, 100, 110];

console.log(`Merge sort:`, mergeSort(array1)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(`Merge sort:`, mergeSort(array2)); // [79, 100, 105, 110]
