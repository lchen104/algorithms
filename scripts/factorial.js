// Factorial algorithm - Returns the sum of each previous element multiplied 
// Multiply n number of elements to find the factorial

const factorial = (n) => {
    let sum = 1;
    for (let i = 2; i <= n; i++) {
        sum *= i;
    }
    return sum;
}

// O(n) => Linear Time Complexity
// In every function call => O(1)
// But we trigger multiple function calls => n functions calls
// T = n * O(1) => O(n)
// T = 1 * n = n => O(n)

console.log(factorial(3)); // 3 * 2 * 1 => 6
console.log(factorial(4)); // 4 * 3 * 2 * 1 => 24
console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 = > 120