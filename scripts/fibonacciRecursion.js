// Fibonacci Algorithm using Recursion
let ctr = 0;
const fib = (n) => {
    ctr++; // count how many times this is recursion runs
    if (n === 0 || n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}  
// O(2n) => 2 power of n, Eponential Time Complexity (WORST)

// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
console.log(fib(5) + '/counter: ' + ctr);
console.log(fib(6) + '/counter: ' + ctr);


// Count how many times this runs
// fib(5);
// console.log(ctr);
// ctr = 0;

// fib(10);
// console.log(ctr);
// ctr = 0;

// fib(20);
// console.log(ctr);
// ctr = 0;

// fib(30);
// console.log(ctr);
// ctr = 0;