// Factorial in Recursion algorithm - Returns the sum of each previous element multiplied 
// Multiply n number of elements to find the factorial

// Re-factored to Recursion
const factorial = (n) => {
    if (n === 1 ) {
        return 1;
    }
    return n * factorial(n - 1);
}

// O(n) => Linear Time Complexity
// In each function call => O(1)
// But we trigger multiple function calls => n functions calls
// T = n * O(1) => O(n)
// T = 1 * n = n => O(n)

console.log(factorial(3)); // 3 * 2 * 1 => 6
console.log(factorial(4)); // 4 * 3 * 2 * 1 => 24
console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 = > 120